const path = require('path')
const fs = require('fs')

const docsPath = path.resolve(__dirname, '../../')

const Items = fs.readdirSync(docsPath)
                .filter(child => !['.vuepress', 'README.md'].includes(child))
// 获取目录下的md文件
function findMdChild(dir, dirname) {
    return {
        title: dirname,
        collapsable: false,
        children: fs.readdirSync(dir)
                    .filter(fileName => fileName.indexOf('.md') > -1)
                    .map(fileName => fileName.slice(0, -3))
    }
}
// 获取目录下的子目录
function findDirChild(dir) {
    return fs.readdirSync(dir)
            .filter(fileName => fs.statSync(path.resolve(dir, fileName)).isDirectory() && fileName !== 'images')
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
                dirname
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