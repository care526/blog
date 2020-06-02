var path = require('path')
var Chokidar = require('chokidar')

var watcher = Chokidar.watch([path.join(__dirname, './docs')], {
  persistent: true,
  usePolling: true
})

var lock = false
var a = 1
function reset() {
  // if (lock) return
  // lock = true

  console.log(++a)
}

watcher
.on('ready', reset)
.on('add', reset)
.on('change', reset)
.on('unlink', reset)