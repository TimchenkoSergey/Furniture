import mongoose  from 'mongoose';
import config    from '../config';
import getLogger from '../libs/logger';

const log = getLogger(module);

const options = {
    server: {
        poolSize: 30,
        socketOptions: {
            socketTimeoutMS: 0,
            connectTimeoutMS: 0
        }
    }
};

mongoose.Promise = global.Promise;
mongoose.connect(config.get('mongoUri'), options);

mongoose.connection.on('connected', function () {
    log.debug(`Mongoose default connection open to ${config.get('mongoUri')}`);
});

mongoose.connection.on('error',function (err) {
    log.error(`Mongoose default connection error: ${err}`);
});

mongoose.connection.on('disconnected', function () {
    log.warn('Mongoose default connection disconnected');
});

export default mongoose;