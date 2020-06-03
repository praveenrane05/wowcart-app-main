const mysqlcon = require('../../common/services/mysql.service').con;


exports.saveCategoryData = (CategoryData) => {
    return mysqlcon.promise().query("INSERT INTO wc_product_category (uid, category_name) VALUES ( uuid(), 'Snacks & Beverages')")
        .then((result) => {
            console.log(result);
        })
        .catch(console.log)
        .then(() => mysqlcon.end());
}

exports.getCategoryData = (CategoryData) => {
    
    return mysqlcon.promise().query("SELECT * FROM wc_product_category;")
        .then(([rows, fields]) => {
            var objs = [];
            for (var i = 0; i < rows.length; i++) {
                objs.push( rows[i] );
            }

            console.log(JSON.stringify(objs));
            var finalJson = { "categories" : objs  }
            return JSON.stringify(finalJson);
        })
        .catch(console.log);

}

exports.saveSubCatData = (CategoryData) => {
    return mysqlcon.promise().query("INSERT INTO wc_sub_product_category (uid, sub_category_name, type) VALUES ( uuid(), '"+CategoryData.subCatName+"',' "+ CategoryData.type +"')")
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
                objs.push( rows[i] );
            }

            console.log(JSON.stringify(objs));
            var finalJson = { "subcategories" : objs  }
            return JSON.stringify(finalJson);
        })
        .catch(console.log);

}