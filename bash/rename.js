var fs = require("fs");
const execSync = require('child_process').execSync

const TargetDir = './docs/'

const reFileName = (() => {
    let index = 0
    return () => `${++index}.md`
})()

function moveMd(path) {
    fs.rename(path, `./docsWillBuild/${reFileName()}`, () => '')
}

function moveImage(path) {
    fs.readdir(path, (err, images) => {
        if (err) console.error(err)
        images.forEach(image => {
            fs.rename(path + image, './docsWillBuild/images/' + image, () => '')
        })
    })
}

function moveFile(dir) {
    fs.readdir(dir, (err, fileList) => {
        if (err) console.error(err)
        fileList.forEach(filename => {
            if (filename === 'images') {
                moveImage(dir + filename)
            } else {
                moveMd(dir + filename)
            }
        })
    })
}

fs.readdir(TargetDir, (err, fileList) => {
    if (err) console.error(err)
    fileList.filter(filename => /^[a-z]_[0-9]+_[a-z]+$/.test(filename)).forEach(filename => {
        moveFile(TargetDir + filename + '/')
    })
})


// // 获取所有的目录
// const content = fs.readdirSync(TargetDir).filter(i => !ExcludeDirOrFile.includes(i))

// for (let i = 0; i < content.length; i++) {
//     const allFiles = fs.readdirSync(TargetDir + content[i] + '/').filter(i => !ExcludeDirOrFile.includes(i))

//     allFiles.forEach((file, index) => {
//         // console.log(`${TargetDir}${file} ./${radam32()}`)
//         execSync(`mv ${TargetDir}${content[i]}/${file} ${TargetDir}${radam32()}.md` )
//     })
// }

















// const dealType = argv[3] === 'dir' ? 'dir' : 'allChild'

// // 待处理根目录 重命名规则
// const rootRenameRule = name => name.split('_')[2]
// // 子目录 重命名规则
// const childRenameRule = name => {
//     if (name.indexOf('-') > 0) return name.split('-')[1]
//     return name
// }
// // 是否是目录
// const isDir = dirPath => fs.statSync(dirPath).isDirectory()
// // 是否是文件
// const isFile = filePath => fs.statSync(filePath).isFile()

// async function findChildDirAndFile(targetDir, excludeRules = [], renameRule) {
//     return new Promise((res, rej) => {
//         fs.readdir(targetDir, (err, files) => {
//             if (err) rej(err)
    
//             const dirs = files.filter(filename => !excludeRules.includes(filename))
//             // 检查是否会出现子目录 简化 重名的情况
//             const featureDirs = dirs.map(renameRule)
//             if ( Array.from(new Set(featureDirs)).length !== dirs.length ) return console.log('如果简化 会出现重名的目录 请检查!')

//             // 区分 目录和文件
//             res({
//                 dirs: dirs.filter(dirPath => isDir((targetDir + dirPath))),
//                 files: dirs.filter(filePath => isFile((targetDir + filePath)))
//             })
    
//         })
//     })
// }

// // 重命名文件或目录
// async function rename(prefix, name, newPathRule) {
//     if (!name) return console.log('待重命名目录为指定')
//     if (!newPathRule || typeof newPathRule !== 'function') return console.log('重命名规则为声明!')
    
//     const oldPath = prefix + name
//     const newPath = prefix + newPathRule(name)

    
//     return new Promise((res, rej) => {
//         fs.rename(oldPath, newPath, err => {
//             if (err) rej(err)
//             res(1)
//         })
//     })
// }

// async function resolveChildDir(childDirPath, excludeDirOrFile, renameRule) {
//     const data = await findChildDirAndFile(childDirPath, excludeDirOrFile, renameRule)
//     const { dirs, files } = data
//     return new Promise((res, rej) => {
//         files.forEach(async dirname => await rename(childDirPath, dirname, renameRule))
//         if (dirs.length) {
//             dirs.forEach(async dirname => {
//                 const childDate = await findChildDirAndFile(childDirPath + dirname + '/', excludeDirOrFile, renameRule)
//                 childDate.files.forEach(async filename => await rename(childDirPath + dirname + '/', filename, renameRule))
//             })
//         }
//         res()
//     })
// }

// findChildDirAndFile(TargetDir, ExcludeDirOrFile, rootRenameRule).then(async data => {
//     const { dirs } = data
//     // 重命名子目录相关文件
//     dealType === 'dir'
//     ? dirs.forEach(async dirname => await resolveChildDir(TargetDir + dirname + '/', ExcludeDirOrFile, childRenameRule))
//     // 重命名目录
//     : dirs.forEach(async dirname => await rename(TargetDir, dirname, rootRenameRule))
// })
