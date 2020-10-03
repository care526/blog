var fs = require("fs");
const {exec, execSync} = require('child_process')

const TargetDir = './docs/'

const reFileName = (() => {
    let index = 0
    return () => `${++index}.md`
})()

function moveMd(path) {
    exec(`head -1 ${path} | tail -1`, (err, stdout) => {
        if (err) console.error(err, path)
        console.log(stdout.slice(2))
        execSync(`cp -r ${path} ./docsWillBuild/${reFileName()}`)
    })
}

function moveImage(path) {
    fs.readdir(path, (err, images) => {
        if (err) console.error(err)
        images.forEach(image => {
            execSync(`cp ${path + image} ./docsWillBuild/images/${image}`)
        })
    })
}

function moveFile(dir) {
    fs.readdir(dir, (err, fileList) => {
        if (err) console.error(err)
        fileList.forEach(filename => {
            if (filename === 'images') moveImage(dir + filename + '/')
            if (filename.indexOf('.md') > -1) moveMd(dir + filename)
        })
    })
}

fs.readdir(TargetDir, (err, fileList) => {
    if (err) console.error(err)
    fileList.filter(filename => /^[a-z]_[0-9]+_[a-z]+$/.test(filename)).forEach(filename => {
        moveFile(TargetDir + filename + '/')
    })
})
