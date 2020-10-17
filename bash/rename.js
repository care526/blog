const fs = require("fs");
const path = require("path");
const { exec } = require('child_process')

// 待处理目录
const RootPath = 'docs'
// 所有的文件集合
const allFileTree = {
    id: 'care的知识体系',
    children: []
}
setAllFileTree = (type, pathName, index) => {
    if (pathName.indexOf('README') > -1) return

    const arr = pathName.slice(5).split('/')
    arr.unshift(allFileTree.children)
    if (type === 'dir') {
        arr.reduce((root, parentNode) => {
            // if (!root) return
            const node = {
                id: parentNode,
                children: []
            }
            const Nodes = root.filter(i => i.id === parentNode)
            if (Nodes.length) {
                return Nodes[0].children
            } else {
                root.push(node)
                return node.children
            }
        })
    }
    if (type === 'md') {
        arr.reduce((root, childNode) => {
            // if (!root) return
            if (!childNode.indexOf('.md') > -1) {
                if (root.filter(i => i.id === childNode).length) {
                    return root.filter(i => i.id === childNode)[0].children
                } else {
                    root.push({
                        id: `${index}.${childNode.slice(0, -3)}`,
                        index
                    })
                }
            }
        })
    }
}
// 处理排除的目录
const exclude = filename => !['.vuepress', 'README.md', 'navigate.md'].includes(filename)
// 重命名md文档
const reMdFileName = (() => {
    let index = 0
    return () => `${++index}.md`
})()

// 处理images图片资源
function moveImages(imagesPath) {
    let images = fs.readdirSync(imagesPath);
    images.forEach(image => {
        exec(`cp ${path.join(imagesPath, image)} ./docsWillBuild/md/images/${image}`)
    })
}
// 处理markdown文档
function moveMd(mdPath) {
    // exec(`head -1 ${mdPath} | tail -1`, (err, stdout) => {
        // if (err) console.error(err, mdPath)

    const newName = reMdFileName()
    setAllFileTree('md', mdPath, newName.slice(0, -3))
    exec(`cp ${mdPath} ./docsWillBuild/md/${newName}`)
    // })
    
}
// 处理目录
function dealUnitDir(dirPath) {
    let files = fs.readdirSync(dirPath);
    files = files.filter(exclude)
    files.forEach(filename => {
        const filePath = path.join(dirPath, filename)
        if (filename === 'images') {
            return moveImages(filePath)
        }
        if (filename.indexOf('.md') > -1) {
            return moveMd(filePath)
        }
        setAllFileTree('dir', filePath)
        dealUnitDir(filePath)
    })
}

dealUnitDir(RootPath)

setTimeout(() => {
    fs.writeFile('./docsWillBuild/.vuepress/data.json', JSON.stringify(allFileTree), 'utf-8', err => {
        if (err) console.error(err)
        console.log('写入成功')
    })
}, 5 * 1000)