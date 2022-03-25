export function logger(color, text) {

    const colors = {
        "info": "\x1b[32m",
        "warn": "\x1b[31m",
        "silly": "\x1b[35m",
        "debug": "\x1b[33m"
    }

    if (color.localeCompare('info') === 0) {
        return console.log(`${colors.info}[INFO]: `, text)
    }

    if (color.localeCompare('warn') === 0) {
        return console.log(`${colors.warn}[WARN]: `, text)
    }

    if (color.localeCompare('silly') === 0) {
        return console.log(`${colors.silly}[SILLY]: `, text)
    }

    if (color.localeCompare('debug') === 0) {
        return console.log(`${colors.debug}[DEBUG]: `, text)
    }

}

