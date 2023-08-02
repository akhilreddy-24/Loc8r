module.exports.homelist = function(req, res){
    res.render('location-list',{title:'Home'});
};

module.exports.locationInfo = function(req, res){
    res.render('location-info',{title:'Location info'});
};

module.exports.locationInfo1 = function(req, res){
    res.render('location-info1',{title:'Location info'});
};

module.exports.locationInfo2 = function(req, res){
    res.render('location-info2',{title:'Location info'});
};

module.exports.addReview = function(req, res){
    res.render('location-review-form',{title:'Review page'});
};