import winston from 'winston';
import config  from '../config/index';

export default getLogger;

function getLogger(module) {
    const path = module.filename.split('/').slice(-2).join('/');

    return new winston.Logger({
        transports : [
            new winston.transports.Console({
                colorize : true,
                level    : (config.get('development')) ? 'debug' : 'error',
                label    : path
            })
        ]
    });
}