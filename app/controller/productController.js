import Product  from '../models/product.js'; 



const getAllProducts = async (req, res) => {
    try{
        const products = await Product.findAll({
            include: [
                {association: 'category'},
            ]
        }); 
        res.render('product', {products}); 
    } catch(error) {
        res.status(500).send(error);
        console.log('erreur', error);
    }
}


export default {getAllProducts}