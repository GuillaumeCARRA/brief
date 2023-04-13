import seq from ('../db/client.js'); 

import {DataTypes, Model} from "sequelize"; 

class Product extends Model{}; 

// we use the static init method inherited from Model to configure our model
Product.init (
    // 1st argument: an object which describes the fields of the table
    // No need to indicate the id field, Sequelize adds it automatically
    {
        product_name: DataTypes.TEXT,
        product_description: DataTypes.TEXT, 
        product_price: DataTypes.INTEGER,
        category_id: DataTypes.INTEGER
    },
    // 2nd argument: an object with connection info
    {
        // instance of client sequelize
        seq,
        // we indicate the name of the table in the DB
        tableName: 'product'
    }
);

// don't forget to export 
module.exports = Product; 