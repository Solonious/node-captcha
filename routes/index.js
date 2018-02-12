var svgCaptcha = require('svg-captcha');
var captchaText = '';

/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.captcha = function (req, res) {
    var captcha = svgCaptcha.create();
    captchaText = captcha.text;
    req.session.captcha = captcha.text;

    res.type('svg');
    res.status(200).send(captcha.data);
};

exports.captchaCheck = function(req, res, err) {
	if (err) res.send(err);

	if (req.body.capData === captchaText) {
		res.render('index', { title: 'Express' });
	}

};
