var svgCaptcha = require('svg-captcha');


/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.captcha = function (req, res) {
    var captcha = svgCaptcha.create();
    req.session.captcha = captcha.text;

    res.type('svg');
    res.status(200).send(captcha.data);
};
