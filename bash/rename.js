const fs = require("fs");
const path = require("path");
const { exec } = require('child_process')

// 待处理目录
const RootPath = 'docs'
// 所有的文件集合
const allFileName = {}
// 处理排除的目录
const exclude = filename => filename !== '.vuepress'
// 重命名md文档
const reMdFileName = (() => {
    let index = 0
    return () => `${++index}.md`
})()

// 处理images图片资源
function moveImages(imagesPath) {
    let images = fs.readdirSync(imagesPath);
    images.forEach(image => {
        exec(`cp ${path.join(imagesPath, image)} ./docsWillBuild/images/${image}`)
    })
}
// 处理markdown文档
function moveMd(mdPath) {
    exec(`head -1 ${mdPath} | tail -1`, (err, stdout) => {
        if (err) console.error(err, mdPath)

        const newName = reMdFileName()
        const title = stdout.slice(2).replace('\n', '')
        if (allFileName[title]) {
            console.log(title)
        } else {
            allFileName[title] = newName.replace('md', 'html')
        }
        exec(`cp ${mdPath} ./docsWillBuild/${newName}`)
    })
    
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
        dealUnitDir(filePath)
    })
}

dealUnitDir(RootPath)

setTimeout(() => {
    fs.writeFile('./docsWillBuild/.vuepress/data.json', JSON.stringify(allFileName), 'utf-8', err => {
        if (err) console.error(err)
        console.log('写入成功')
    })
    console.log('总md文件数目:' + Object.keys(allFileName).length)
}, 5 * 1000)