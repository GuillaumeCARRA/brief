import Product from "./product.js";
import Category from "./category.js";



//1,n relationship
//For the table that holds n, we use the hasMany method
//1st argument: the model to link
//2nd argument: configuration object
Product.hasMany(Category, {
    foreignKey: 'category_id', 
    as: 'categories'
});


//relationship 1.1
//We use the belongsTo method on the table that holds the foreign key
Category.belongsTo(Product, {
    foreignKey: 'category_id', 
    as: 'products'
});

export default {Product, Category};