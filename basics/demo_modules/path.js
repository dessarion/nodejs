const path = require('path')
const chalk = require('chalk')

const fileName = path.basename(__filename)

const dirName = path.dirname(__filename)

const extensionName = path.extname(__filename)

const parsedData = path.parse(__filename)

const stringPath = path.join(__dirname, 'current_server', 'index.html')

console.log(fileName);
console.log(`Directory ${dirName}`);
console.log(chalk.blueBright(`Current file extendsion ${extensionName}`));
console.log(parsedData);
console.log(chalk.bgRedBright(parsedData.dir));
console.log(chalk.yellowBright(stringPath));