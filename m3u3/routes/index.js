var express = require('express');
var router = express.Router();

const nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async(req, res, next) => {
 
  var nombre = req.body.nombre;
  var email = req.body.email;
  var msj = req.body.msj;

  var obj = {
    to: 'lorenzobraunstein@gmail.com',
    subject: 'CONTACTO WEB',
    html: nombre + " se contacto a travez de la web y quiere mas informacion a este correo : " + email
    + ". <br> Ademas, hizo un comentario : " + msj 
  }
  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
  var info = await transport.sendMail(obj);

  res.render('contacto', {
    message: 'Mensaje enviado correctamente' 
  });
});

module.exports = router;
 