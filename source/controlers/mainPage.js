import path      from 'path';
import getLogger from '../libs/logger';

const log = getLogger(module);

export default mainController;

async function mainController(req, res, next) {
    try {
        res.sendFile(path.join(__dirname, '../public', 'index.html'));
    }
    catch (err) {
        next(err);
    }
}