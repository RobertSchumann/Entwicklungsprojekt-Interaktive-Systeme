var express = require('express');
var router = express.Router();

/*
 * GET Library
 */
router.get('/library', function(req, res) {
    var db = req.db;
    var collection = db.get('library');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/*
 * GET Wish List
 */
router.get('/wishlist', function(req, res) {
    var db = req.db;
    var collection = db.get('wishlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/*
 * GET Browse
 */
router.get('/browse', function(req, res) {
    var db = req.db;
    var collection = db.get('browse');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/*
 * GET Trade Offers
 */
router.get('/tradeoffers', function(req, res) {
    var db = req.db;
    var collection = db.get('tradeoffers');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});


/*
 * GET Trade History
 */
router.get('/tradehistory', function(req, res) {
    var db = req.db;
    var collection = db.get('tradehistory');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});


/*
 * GET Account
 */
router.get('/account', function(req, res) {
    var db = req.db;
    var collection = db.get('account');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});



/*
 * POST to add to Library
 */
router.post('/addtolibrary', function(req, res) {
    var db = req.db;
    var collection = db.get('library');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

/*
 * POST to add to Wish List
 */
router.post('/addtowishlist', function(req, res) {
    var db = req.db;
    var collection = db.get('wishlist');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

/*
 * POST to add to Trade Offers
 */
router.post('/addtotradeoffers', function(req, res) {
    var db = req.db;
    var collection = db.get('tradeoffers');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

/*
 * POST to add to Trade History
 */
router.post('/addtotradehistory', function(req, res) {
    var db = req.db;
    var collection = db.get('tradehistory');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

/*
 * POST to update Account
 */
router.post('/updateaccount', function(req, res) {
    var db = req.db;
    var collection = db.get('account');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});




/*
 * DELETE to delete entry Library
 */
router.delete('/deletefromlibrary/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('library');
    var entryToDelete = req.params.id;
    collection.remove({ '_id' : entryToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

/*
 * DELETE to delete entry Wish List
 */
router.delete('/deletefromwishlist/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('wishlist');
    var entryToDelete = req.params.id;
    collection.remove({ '_id' : entryToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

/*
 * DELETE to delete entry Browse
 */
router.delete('/deletefrombrowse/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('browse');
    var entryToDelete = req.params.id;
    collection.remove({ '_id' : entryToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

module.exports = router;
