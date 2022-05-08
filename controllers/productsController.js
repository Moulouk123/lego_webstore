/*products_list = function (req, res) {
    res.send('Liste des produits');
};*/
/*product_infos = function (req, res) {
    res.send("Fiche produit : " + req.params.idproduct);
};*/
exports.products_list = function(req, res) {
    res.send('Liste des produits');
  };
  exports.products_info = function(req, res) {
    res.send("Fiche produit : " + req.params.idproduct);
  };
/*
module.exports = {
    products_list,
    //product_infos
}*/