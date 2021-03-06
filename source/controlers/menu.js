import model     from '../model/model';
import models    from '../model/models';
import getLogger from '../libs/logger';

const log = getLogger(module);

export default menuController;

async function menuController(req, res, next) {
    try {
        log.debug(`Received a GET request for a menu`);

        const menu = await model.find(models.MenuItem, {});

        res.json(menu);
    }
    catch (err) {
        next(err);
    }
}