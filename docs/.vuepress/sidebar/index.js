const path = require('path')
const fs = require('fs')

const DocsPath = path.resolve(__dirname, '../../')
const isIncludedDir = dirName => !['images'].includes(dirName)
const DocsChildDir = fs.readdirSync(DocsPath)
                .filter(child => 
                    !['.vuepress', 'README.md'].includes(child) ||
                    child.slice(1, 3) === '--'
                )

function getMarkdownFiles(dir, dirName, linkPrefix = '') {
    const isMarkdowndFile = fileName => fileName.slice(-3) === ".md"
    const setFullLinkUrl = fileName => linkPrefix + fileName.slice(0, -3)

    return {
        title: dirName,
        collapsable: false,
        children: fs.readdirSync(dir)
                    .filter(isMarkdowndFile)
                    .map(setFullLinkUrl)
    }
}
// 获取目录下的子目录(去除images)
function findDirChildDir(dir) {
    return fs.readdirSync(dir)
            .filter(fileName => 
                fs.statSync(path.resolve(dir, fileName)).isDirectory() &&
                isIncludedDir(fileName)
            )
}
// 生成侧边栏的配置
function setGroups(targetDir, targetDirName) {
    let groups = []
    groups[0] = getMarkdownFiles(targetDir, targetDirName)

    const targetChildDir = findDirChildDir(targetDir, targetDirName)
    const isTargetDirHasChildDir = Boolean(targetChildDir.length)
    
    if (isTargetDirHasChildDir) {
        targetChildDir.forEach((dirname, index) => {
            groups[index + 1] = getMarkdownFiles(
                path.resolve(targetDir, dirname),
                dirname,
                dirname + '/'
            )
        })
    }

    return groups
}

let Routers = {}
DocsChildDir.forEach(childRootPath => {
    Routers[`/${childRootPath}/`] = setGroups(
        path.join(DocsPath, childRootPath),
        childRootPath
    )
})

module.exports = Routers