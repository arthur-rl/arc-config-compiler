import chalk from "chalk";


function error(...args: any[]) {
    console.log(`${chalk.bgRed("ERROR")}`, ...args);
}

function info(...args: any[]) {
    console.log(`${chalk.bgBlue("INFO")}`, ...args);
}

export = {
    error,
    info
}