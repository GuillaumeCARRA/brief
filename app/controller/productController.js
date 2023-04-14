import Product  from '../models/product'; 


const getAllProducts = async (req, res) => {
    try{
        const products = await Product.findAll(); 
        res.render('product', {products}); 
    } catch(error) {
        res.status(500).send(error);
        console.log('erreur', error);
    }
}