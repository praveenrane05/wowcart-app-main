const ProductsController = require('./controllers/products.controller');
// const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
// const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
const config = require('../common/config/env.config');

// const ADMIN = config.permissionLevels.ADMIN;
// const PAID = config.permissionLevels.PAID_USER;
// const FREE = config.permissionLevels.NORMAL_USER;

exports.routesConfig = function (app) {
    console.log("get here")

    app.post('/saveCategory', [
        ProductsController.saveCategory
    ]);

    app.get('/getCategory', [
        ProductsController.getCategoryData
    ]);

    app.post('/saveSubCatData', [
        ProductsController.saveSubCatData
    ]);

    app.get('/getSubCategoryData', [
        ProductsController.getSubCategoryData
    ]);
   
};
