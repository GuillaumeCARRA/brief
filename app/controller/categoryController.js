import Category from '../models/category.js'; 

// const showCategory = (req, res) => {
//     res.render('category', {title: 'categorie'});
// };

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        console.log('all cat', categories);
        res.render('category', {categories}); 
    } catch (error) {
        res.status(500).send(error);
        console.log('erreur', error);
    }
}

const getOneCategory = async (req, res) => {
    try {
        
        const categoryId = req.params.id;

        const category = await Category.findOne({
            where: {id: categoryId}
        })
        res.json({category});

    } catch (error) {
        res.status(500).send(error);
        console.log('erreur', error);
    }
}


const createCategory = async (req, res) => {
    const categoryData = {
        category_name: req.body.category_name
    };
    console.log('cat', categoryData);

    try {
        const category = await Category.create(categoryData); 
        res.status(201).json(category); 
    } catch (error) {
        res.status(500).send(error);
        console.log('erreur', error);
    }
}


export default {getAllCategories, getOneCategory, createCategory}; 