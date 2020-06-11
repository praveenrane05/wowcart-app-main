const mysqlcon = require('../../common/services/mysql.service').con;


exports.saveCategoryData = (CategoryData) => {
    var query = "INSERT INTO wc_product_category (uid, category_name,last_updated,updated_by, url) VALUES ( uuid(),'"+ CategoryData.category_name + "','"+ CategoryData.last_updated + "','"+ CategoryData.updated_by + "','"+ CategoryData.url + "' )";
   console.log(query);
    return mysqlcon.promise().query(query)
        .then((result) => {
            console.log(result);
        })
        .catch(console.log);
}

exports.getCategoryData = (CategoryData) => {

    return mysqlcon.promise().query("SELECT * FROM wc_product_category;")
        .then(([rows, fields]) => {
            var objs = [];
            for (var i = 0; i < rows.length; i++) {
                objs.push(rows[i]);
            }

            console.log(JSON.stringify(objs));
            var finalJson = { "categories": objs }
            return JSON.stringify(finalJson);
        })
        .catch(console.log);

}

exports.saveSubCatData = (CategoryData) => {
    return mysqlcon.promise().query("INSERT INTO wc_sub_product_category (uid, sub_category_name, type) VALUES ( uuid(), '" + CategoryData.subCatName + "',' " + CategoryData.type + "')")
        .then((result) => {
            console.log(result);
        })
        .catch(console.log);
}

exports.getSubCategoryData = (subCategoryData) => {

    return mysqlcon.promise().query("SELECT * FROM wc_sub_product_category;")
        .then(([rows, fields]) => {
            var objs = [];
            for (var i = 0; i < rows.length; i++) {
                objs.push(rows[i]);
            }

            console.log(JSON.stringify(objs));
            var finalJson = { "subcategories": objs }
            return JSON.stringify(finalJson);
        })
        .catch(console.log);

}

exports.saveProductData = (ProductData) => {
    console.log(ProductData);
    var query = "INSERT INTO wc_product_list(uid, product_title, product_brand, product_model, product_selling_price, product_mrp, product_discount, product_delivery, product_quantity, product_services, product_image, product_seller, product_cat_id, product_cat_name, product_sub_cat_id, product_sub_cat_name, type) VALUES ( uuid(), '" + ProductData.productTitle + "', '" + ProductData.productBrand + "',' " + ProductData.productModel + "', " + ProductData.productSellingPrice + ", " + ProductData.productMrp + ", '" + ProductData.productDiscount + "',' " + ProductData.productDelivery + "', '" + ProductData.productQuantity + "',' " + ProductData.productServices + "', '" + ProductData.productImage + "',' " + ProductData.productSeller + "',' " + ProductData.productCatId + "',' " + ProductData.productCatName + "',' " + ProductData.productsubCatId + "',' " + ProductData.productSubCatName + "',' " + ProductData.productType + "')";
    console.log(query);
    return mysqlcon.promise().query(query)
        .then((result) => {
            console.log(result);
        })
        .catch(console.log);
}

exports.getProductData = (ProductData) => {

    return mysqlcon.promise().query("SELECT * FROM wc_product_list;")
        .then(([rows, fields]) => {
            var objs = [];
            for (var i = 0; i < rows.length; i++) {
                objs.push(rows[i]);
            }

            console.log(JSON.stringify(objs));
            var finalJson = { "products": objs }
            return JSON.stringify(finalJson);
        })
        .catch(console.log);

}