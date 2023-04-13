const getHomePage = (req, res) => {
    res.render('homePage', {
        title: "Homepage"
    });
};

export default getHomePage; 