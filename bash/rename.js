const fs = require("fs");
const path = require("path");
// const {exec, execSync} = require('child_process')

// const yingshe = {}

const TargetDir = './docs'

const exclude = filename => {
    return filename !== '.vuepress'
}


function dealUnitDir(rootPath) {
    const files = fs.readdirSync(rootPath);
    files = files.filter(exclude)
    files.forEach(filename => {
        console.log(filename)
    })
}





// const reFileName = (() => {
//     let index = 0
//     return () => `${++index}.md`
// })()

// function moveMd(path) {
//     exec(`head -1 ${path} | tail -1`, (err, stdout) => {
//         if (err) console.error(err, path)
//         const newName = reFileName()
//         yingshe[stdout.slice(2).replace('\n', '')] = newName
//         execSync(`cp ${path} ./docsWillBuild/${newName}`)
//     })
// }

// function moveImage(path) {
//     fs.readdir(path, (err, images) => {
//         if (err) console.error(err)
//         images.forEach(image => {
//             execSync(`cp ${path + image} ./docsWillBuild/images/${image}`)
//         })
//     })
// }

// function moveFile(dir) {
//     fs.readdir(dir, (err, fileList) => {
//         if (err) console.error(err)
//         fileList.forEach(filename => {
//             if (filename === 'images') moveImage(dir + filename + '/')
//             if (filename.indexOf('.md') > -1) moveMd(dir + filename)
//         })
//     })
// }

// fs.readdir(TargetDir, (err, fileList) => {
//     if (err) console.error(err)
//     fileList.filter(filename => /^[a-z]_[0-9]+_[a-z]+$/.test(filename)).forEach(filename => {
//         moveFile(TargetDir + filename + '/')
//     })
// })

// setTimeout(() => {
//     fs.writeFile('./docsWillBuild/.vuepress/data.json', JSON.stringify(yingshe), 'utf-8', err => {
//         if (err) console.error(err)
//         console.log('写入成功')
//     })
//     console.log(Object.keys(yingshe).length)
// }, 5 * 1000)