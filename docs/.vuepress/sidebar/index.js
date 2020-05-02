const path = require('path')
const fs = require('fs')

const Items = fs.readdirSync(path.resolve(__dirname, '../../'))
                .filter(rootPath => !['.vuepress', 'README.md'].includes(rootPath))

let Routers = {}

function findChild(dirName) {
    return fs.readdirSync(path.resolve(__dirname, `../../${dirName}`))
            .filter(fileName => fileName.indexOf('.md') > -1)
            .map(fileName => fileName.slice(0, -3))
}

Items.forEach(rootPath => {
    Routers[`/${rootPath}/`] = [{
        title: rootPath,
        collapsable: false,
        children: findChild(rootPath)
    }]
})

module.exports = Routers