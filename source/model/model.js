const model = {
    find,
    findById,
    create,
    deleteOne,
    deleteByID,
    update
};

export default model;

function find(modelName, query = {}) {
    return new Promise(function (resolve, reject) {
        modelName.find(query, function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

function findById(modelName, id) {
    return new Promise(function (resolve, reject) {
        modelName.findById(id, function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

function create(modelName, obj) {
    return new Promise(function (resolve, reject) {
        const model = new modelName(obj);

        model.save(function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

function deleteOne(modelName, query) {
    return new Promise(function (resolve, reject) {
        modelName.findOneAndRemove(query, function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

function deleteByID(modelName, id) {
    return new Promise(function (resolve, reject) {
        modelName.findByIdAndRemove(id, function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

function update(modelName, query, update) {
    return new Promise(function (resolve, reject) {
        modelName.findOneAndUpdate(query, update, function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}