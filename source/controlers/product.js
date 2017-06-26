import model     from '../model/model';
import models    from '../model/models';
import getLogger from '../libs/logger';

const log = getLogger(module);

export default {
    productByIdController,
    productController
};

async function productByIdController(req, res, next) {
    try {
        const id = req.params.id;

        log.debug(`Received a GET request for a product with id ${id}`);

        const product = await model.findById(models.Product, id);

        res.json(product);
    }
    catch (err) {
        next(err);
    }
}

async function productController(req, res, next) {
    try {
        log.debug(`Received a GET request for a product`);

        const product = await model.find(models.Product, {});

        res.json(product);
    }
    catch (err) {
        next(err);
    }
}