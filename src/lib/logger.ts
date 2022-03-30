export function logger(color, text) {
    let today = new Date();

    function returnTime() {
        return `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
    }

    const reset = "\x1b[0m"

    const colors = {
        "info": "\x1b[36m",
        "warn": "\x1b[31m",
        "succ": "\x1b[32m",
        "silly": "\x1b[35m",
        "debug": "\x1b[33m"
    }

    if (color.localeCompare('info') === 0) {
        return console.log(`${colors.info} ${returnTime()} [INFO]: ${reset}`, text)
    }

    if (color.localeCompare('warn') === 0) {
        return console.log(`${colors.warn} ${returnTime()} [WARN]: ${reset}`, text)
    }

    if (color.localeCompare('silly') === 0) {
        return console.log(`${colors.silly} ${returnTime()} [SILLY]: ${reset}`, text)
    }

    if (color.localeCompare('debug') === 0) {
        return console.log(`${colors.debug} ${returnTime()} [DEBUG]: ${reset}`, text)
    }

}

