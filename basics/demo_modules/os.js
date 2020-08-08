const os = require('os')
const chalk = require('chalk')

const operationSystem = os.platform()

const processorArchitexture = os.arch()

const processorInfo = os.cpus()

const freeMemory = os.freemem()

const totalMemory = os.totalmem()

const homeDir = os.homedir()

const runTime = os.uptime()

console.log(chalk.rgb(150, 100, 50)(operationSystem));

console.log(chalk.rgb(50, 100, 150)(processorArchitexture));

console.log(processorInfo);

console.log(chalk.rgb(25, 50, 75)(freeMemory));

console.log(chalk.rgb(10, 100, 200)(totalMemory));

console.log(chalk.red(homeDir));

console.log(chalk.greenBright(runTime));