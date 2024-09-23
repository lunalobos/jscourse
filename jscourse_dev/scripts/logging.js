
const config = {
    mode: 'dev',
    selector: levelSelector('dev')
}

const modes = ['dev', 'prod'];

export function log(message, origin, level){
    if(config.selector.logValidation(level)){
        let date = new Date();
        console.log(` [${level.toUpperCase()}] - ${origin} - ${date.toISOString()} : ${message}`);
    }

}

export function setMode(mode){
    if(!modes.includes(mode)){
        throw new Error('Modo no válido');
    }
    config.mode = mode;
    config.selector = levelSelector(mode);
}

function levelSelector(mode){
    switch(mode){
        case 'dev':
            return {
                logValidation(level){
                    return true;
                }
            }
            break;
        case 'prod':
            return {
                trace: false,
                debug: false,
                info: false,
                warn: true,
                error: true,
                fatal: true,
                logValidation(level){
                    return this[level];
                }
            }
            break;
        default:
            return {
                logValidation(level){
                    return true;
                }
            }
    }
}
