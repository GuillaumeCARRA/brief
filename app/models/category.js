import seq from '../db/client.js'; 

import {DataTypes, Model} from "sequelize";

class Category extends Model{}; 

// we use the static init method inherited from Model to configure our model
Category.init (
    // 1st argument: an object which describes the fields of the table
    // No need to indicate the id field, Sequelize adds it automatically
    {
        category_name: DataTypes.TEXT
    },
    // 2nd argument: an object with connection info
    {
        // instance of client sequelize
        seq,
        // we indicate the name of the table in the DB
        tableName: 'category'
    }
);

// don't forget to export 
export default Category; 