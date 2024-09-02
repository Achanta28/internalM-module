let os  = require("node:os")
let path = require("node:path")
let moment = require("moment")
console.log(os.platform())

console.log(os.totalmem())
console.log(os.freemem())

console.log(os.totalmem()/1024/1024/1024)
console.log(os.freemem()/1024/1024)
console.log(os.release())


console.log(path.parse("C:\Users\admin\Downloads\Kalki-2898-AD-Telugu-2024-gm5gd.mp4.crdownload"))
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

