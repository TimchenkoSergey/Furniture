import model     from '../model/model';
import models    from '../model/models';
import getLogger from '../libs/logger';

const log = getLogger(module);

export default awardsController;

async function awardsController(req, res, next) {
    try {
        log.debug(`Received a GET request for a awards`);

        const awards = await model.find(models.Award, {});

        res.json(awards);
    }
    catch (err) {
        next(err);
    }
}