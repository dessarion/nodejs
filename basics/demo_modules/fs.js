// File system
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const { ifError } = require('assert')

const dirAdress = path.join(__dirname, 'test_folder')

const filePath = path.join(__dirname, 'test_folder', 'test_text.txt')

// fs.mkdir(dirAdress, (err) => {
//     if(err){
//         throw err
//     }

//     console.log(chalk.greenBright('Folder created'));
// })

// fs.writeFile(filePath, 'File content', err => {
//     if (err){
//         throw err
//     }

//     console.log(chalk.gray('Text file created'));
// })

// fs.appendFile(filePath, '\nApended content', err => {
//     if (err){
//         throw err
//     }

//     console.log(chalk.hex('#deaded')('File apended'));
// })

// fs.readFile(filePath, (err, content)=>{
//     if (err){
//         throw err
//     }
//     const data = Buffer.from(content)
//     console.log(chalk.rgb(200, 150, 100)(`Content => ${content}`));
//     console.log(content);
//     console.log(data.toString());

// })

fs.readFile(filePath, 'utf-8', (err, content)=>{
    if (err){
        throw err
    }
    const data = Buffer.from(content)
    console.log(chalk.rgb(200, 150, 100)(`Content => ${content}`));
    console.log(content);
    console.log(data.toString());

})