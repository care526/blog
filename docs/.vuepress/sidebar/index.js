const path = require('path')
const fs = require('fs')

const docsPath = path.resolve(__dirname, '../../')

const Items = fs.readdirSync(docsPath)
                .filter(child => !['.vuepress', 'README.md'].includes(child))
// 获取目录下的md文件
function findMdChild(dir, dirName, isDeep) {
    return {
        title: dirName,
        collapsable: false,
        children: fs.readdirSync(dir)
                    .filter(fileName => fileName.indexOf('.md') > -1)
                    .map(fileName => {
                        if (isDeep) return dirName + '/' + fileName.slice(0, -3)
                        return fileName.slice(0, -3)
                    })
    }
}
// 获取目录下的子目录
function findDirChild(dir) {
    console.log(dir)
    return fs.readdirSync(dir)
            .filter(fileName => fs.statSync(path.resolve(dir, fileName)).isDirectory() && !['.DS_Store', 'images'].includes(fileName))
}
// 生成侧边栏的配置
function setGroups(targetDir, targetDirName) {
    let groups = []
    const targetChildDir = findDirChild(...arguments)

    groups[0] = findMdChild(...arguments)
    
    if (targetChildDir.length > 0) {
        targetChildDir.forEach((dirname, index) => {
            groups[index + 1] = findMdChild(
                path.resolve(targetDir, dirname),
                dirname,
                true
            )
        })
    }

    return groups
}

let Routers = {}

Items.forEach(rootPath => {
    Routers[`/${rootPath}/`] = setGroups(path.join(docsPath, rootPath), rootPath)
})

module.exports = Routers