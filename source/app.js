import 'babel-polyfill';
import path         from 'path';
import express      from 'express';
import bodyParser   from 'body-parser';
import compression  from 'compression';
import config       from './config';
import routes       from './routes/index';
import getLogger    from './libs/logger';
import fillDb       from './model/fillDb';

const log = getLogger(module);
const app = express();

createApp();

async function createApp() {
    try {
        app.use(compression());
        app.use(bodyParser.urlencoded({ extended : true }));
        app.use(bodyParser.json());
        app.use(express.static(path.resolve(__dirname, 'public')));

        app.listen(config.get('port'), function () {
            log.debug(`Server start on port - ${ config.get('port') }`);
        });

        await routes(app);
        //await fillDb();
    }
    catch (err) {
        log.error(err);
    }
}