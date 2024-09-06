let myFavorites = []

module.exports.postFav = (req, res) => {

    myFavorites.push(req.body)
   return res.json(myFavorites)
}

module.exports.deleteFav = (req, res) => {
    const {id} = req.params;

    myFavorites = myFavorites.filter((character) => character.id !== parseInt(id));
    res.json( myFavorites)
}