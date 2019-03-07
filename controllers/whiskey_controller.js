const express = require('express');
const whiskey = require('../models/whiskey');

const router = express.Router();

router.get("/", function(req, res) {
    whiskey.selectAll(function(data) {
        var hbsObject = {
            whiskey: data
        };
        console.log(`hbsObject11 ${hbsObject}`);
        res.render("index", hbsObject);
        //res.json(hbsObject);
    });
});

router.post("/api/whiskey", function(req, res) {
    console.log("18 whiskeyController: ", req.body);
    whiskey.insertOne([
        "name", "sampled"
    ], [
        req.body.name, req.body.sampled
    ], function() {
        res.redirect('/');
    });
});

router.put("/api/whiskey/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    whiskey.updateOne({
        sampled: req.body.sampled
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});

module.exports = router;