import model     from '../model/model';
import models    from '../model/models';
import getLogger from '../libs/logger';

const log = getLogger(module);

export default employeeController;

async function employeeController(req, res, next) {
    try {
        log.debug(`Received a GET request for a employee`);

        const employee = await model.find(models.Employee, {});

        res.json(employee);
    }
    catch (err) {
        next(err);
    }
}