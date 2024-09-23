const fs = require('fs');
// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err, data)

// })

// const a = fs.readFileSync('file.txt')
// console.log(a.toString())
// console.log("Finished reading")

fs.writeFile('file.txt', "Welocome to ksolves", () => {
    console.log("data has been written")
})