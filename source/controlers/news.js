import model     from '../model/model';
import models    from '../model/models';
import getLogger from '../libs/logger';

const log = getLogger(module);

export default {
    newsByIdController,
    newsController
};

async function newsByIdController(req, res, next) {
    try {
        const id = req.params.id;

        log.debug(`Received a GET request for a news with id ${id}`);

        const news = await model.findById(models.News, id);

        res.json(news);
    }
    catch (err) {
        next(err);
    }
}

async function newsController(req, res, next) {
    try {
        log.debug(`Received a GET request for a news`);

        const news = await model.find(models.News, {});

        res.json(news);
    }
    catch (err) {
        next(err);
    }
}