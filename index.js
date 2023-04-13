// npm import
import express from "express";
import cors from 'cors'; 

// import .env
import {} from 'dotenv/config';

//import routes
import homePageRouter from './app/router/homePageRoute.js'; 
import categoryRouter from './app/router/categoryRouter.js'; 


// create express server 
const app = express(); 

/** réglages du moteur de vues */
app.set('view engine', 'ejs');
app.set('views', './app/views');


app.use( express.urlencoded({extended: true}) );

app.use(express.json());

app.use(cors({
    origin: '*',
    methods: 'GET,POST,PATCH,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type'
}));


app.use(homePageRouter);
app.use(categoryRouter);


// server launch
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});