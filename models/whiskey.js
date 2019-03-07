const orm = require('../config/orm');

var whiskey = {
    selectAll: function(cb) {
        orm.select("whiskeyTable", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("whiskeyTable", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("whiskeyTable", objColVals, condition, function(res) {
            cb(res);
        });
    }
}

module.exports = whiskey;

