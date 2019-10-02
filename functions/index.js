const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const api = express();

const cors = require('cors');

api.use(
    cors({
      origin: '*',
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Content-Length',
        'X-Requested-With',
        'Accept'
      ],
      methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
  );

api.get('/r/:id', function(req, res) {
  var url_id = req.params.id;
  res.status(200).send(url_id);
});



api.get('/sendEmail', function(req, res) {
  const mailjet = require ('node-mailjet')
    .connect('112dfab4b51fc1d185e0d2db95cbb9e6', 'b9d0a16849a11b5bed27883404948034')
 // .connect('112dfab4b51fc1d185e0d2db95cbb9e6', 'b9d0a16849a11b5bed27883404948034')
  const request = mailjet
  .post('send', {'version': 'v3.1'})
  .request({
    'Messages':[
      {
        'From': {
          'Email': 'noreply@rajivkhushiram.com',
          'Name': 'Rajiv Khushiram'
        },
        'To': [
          {
            'Email': 'rajiv.khushiram3000@gmail.com',
            'Name': +snapshot.data().firstname + snapshot.data().lastname,
          }
        ],
        // Loop through accounts and get  collections
        // Loop through 
        //
        'Subject': 'Rajiv Khushiram: Welcome to my website',
        'TextPart': 'The first test',
        'HTMLPart': "<!doctype html><html xmlns='http://www.w3.org/1999/xhtml' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'><head><title></title><!--[if !mso]><!-- --><meta http-equiv='X-UA-Compatible' content='IE=edge'><!--<![endif]--><meta http-equiv='Content-Type' content='text/html; charset=UTF-8'><meta name='viewport' content='width=device-width,initial-scale=1'><style type='text/css'>#outlook a { padding:0; }"
        +".ReadMsgBody { width:100%; }"
        +".ExternalClass { width:100%; }"
        +".ExternalClass * { line-height:100%; }"
        +"body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }"
        +"table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }"
        +"img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }"
        +"p { display:block;margin:13px 0; }</style><!--[if !mso]><!--><style type='text/css'>@media only screen and (max-width:480px) {"
          +" @-ms-viewport { width:320px; }"
          +"@viewport { width:320px; }"
          +"}</style><!--<![endif]--><!--[if mso]>"
          +"<xml>"
          +" <o:OfficeDocumentSettings>"
          +"<o:AllowPNG/>"
          +"<o:PixelsPerInch>96</o:PixelsPerInch>"
          +"</o:OfficeDocumentSettings>"
          +" </xml>"
          +" <![endif]--><!--[if lte mso 11]>"
          +" <style type='text/css'>"
          +" .outlook-group-fix { width:100% !important; }"
          +"</style>"
          +" <![endif]--><style type='text/css'>@media only screen and (min-width:480px) {"
            +".mj-column-per-67 { width:67% !important; max-width: 67%; }"
            +".mj-column-per-33 { width:33% !important; max-width: 33%; }"
            +".mj-column-per-100 { width:100% !important; max-width: 100%; }"
            +" }</style><style type='text/css'>[owa] .mj-column-per-67 { width:67% !important; max-width: 67%; }"
            +"[owa] .mj-column-per-33 { width:33% !important; max-width: 33%; }"
            +"[owa] .mj-column-per-100 { width:100% !important; max-width: 100%; }</style><style type='text/css'>@media only screen and (max-width:480px) {"
              +" table.full-width-mobile { width: 100% !important; }"
              +"td.full-width-mobile { width: auto !important; }"
 +"}</style></head><body style='background-color:#F4F4F4;'><div style='background-color:#F4F4F4;'><!--[if mso | IE]><table align='center' border='0' cellpadding='0' cellspacing='0' class='' style='width:600px;' width='600' ><tr><td style='line-height:0px;font-size:0px;mso-line-height-rule:exactly;'><![endif]--><div style='Margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;vertical-align:top;'><!--[if mso | IE]><table role='presentation' border='0' cellpadding='0' cellspacing='0'><tr><td class='' style='vertical-align:top;width:402px;' ><![endif]--><div class='mj-column-per-67 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'><tr><td align='left' style='font-size:0px;padding:0px 0px 0px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><div style='font-family:Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;color:#55575d;'><p style='font-size: 13px; margin: 10px 0;'></p></div></td></tr></table></div><!--[if mso | IE]></td><td class='' style='vertical-align:top;width:198px;' ><![endif]--><div class='mj-column-per-33 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'><tr><td align='right' style='font-size:0px;padding:0px 25px 0px 0px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><div style='font-family:Arial, sans-serif;font-size:11px;line-height:22px;text-align:right;color:#55575d;'><p style='font-size: 13px; margin: 10px 0;'><a href='[[PERMALINK]]' style='color:inherit;text-decoration:none;' target='_blank'></a></p></div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align='center' border='0' cellpadding='0' cellspacing='0' class='' style='width:600px;' width='600' ><tr><td style='line-height:0px;font-size:0px;mso-line-height-rule:exactly;'><![endif]--><div style='Margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;vertical-align:top;'><!--[if mso | IE]><table role='presentation' border='0' cellpadding='0' cellspacing='0'><tr><td class='' style='vertical-align:top;width:402px;' ><![endif]--><div class='mj-column-per-67 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'><tr><td align='left' style='font-size:0px;padding:0px 0px 0px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><div style='font-family:Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;color:#55575d;'><p style='font-size: 13px; margin: 10px 0;'></p></div></td></tr></table></div><!--[if mso | IE]></td><td class='' style='vertical-align:top;width:198px;' ><![endif]--><div class='mj-column-per-33 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'><tr><td align='right' style='font-size:0px;padding:0px 25px 0px 0px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><div style='font-family:Arial, sans-serif;font-size:11px;line-height:22px;text-align:right;color:#55575d;'><p style='font-size: 13px; margin: 10px 0;'><a href='[[PERMALINK]]' style='color:inherit;text-decoration:none;' target='_blank'></a></p></div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align='center' border='0' cellpadding='0' cellspacing='0' class='' style='width:600px;' width='600' ><tr><td style='line-height:0px;font-size:0px;mso-line-height-rule:exactly;'><![endif]--><div style='Margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:0px;text-align:center;vertical-align:top;'><!--[if mso | IE]><table role='presentation' border='0' cellpadding='0' cellspacing='0'><tr><td class='' style='vertical-align:top;width:600px;' ><![endif]--><div class='mj-column-per-100 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'><tr><td align='center' style='font-size:0px;padding:10px 25px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'><tbody><tr><td style='width:600px;'><img alt='' height='auto' src='http://191n.mj.am/tplimg/191n/b/040q/qz83.png' style='border:none;border-radius:px;display:block;outline:none;text-decoration:none;height:auto;width:100%;' width='600'></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align='center' border='0' cellpadding='0' cellspacing='0' class='' style='width:600px;' width='600' ><tr><td style='line-height:0px;font-size:0px;mso-line-height-rule:exactly;'><![endif]--><div style='background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#ffffff;background-color:#ffffff;width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;vertical-align:top;'><!--[if mso | IE]><table role='presentation' border='0' cellpadding='0' cellspacing='0'><tr><td class='' style='vertical-align:top;width:600px;' ><![endif]--><div class='mj-column-per-100 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'><tr><td align='left' style='font-size:0px;padding:0px 25px 0px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><div style='font-family:Arial, sans-serif;font-size:13px;line-height:22px;text-align:left;color:#55575d;'><h1 style='font-size: 20px; font-weight: bold;'>Title of your email</h1></div></td></tr><tr><td align='left' style='font-size:0px;padding:0px 25px 0px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><div style='font-family:Arial, sans-serif;font-size:13px;line-height:22px;text-align:left;color:#55575d;'><p style='font-size: 13px; margin: 10px 0;'>The content of your email goes here.</p><p style='font-size: 13px; margin: 10px 0;'>You can drag and drop blocks of text, images or other content elements to add them to your message. Customize the font and the colors. Add links to track clicks.</p></div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align='center' border='0' cellpadding='0' cellspacing='0' class='' style='width:600px;' width='600' ><tr><td style='line-height:0px;font-size:0px;mso-line-height-rule:exactly;'><![endif]--><div style='background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#ffffff;background-color:#ffffff;width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:0px;text-align:center;vertical-align:top;'><!--[if mso | IE]><table role='presentation' border='0' cellpadding='0' cellspacing='0'><tr><td class='' style='vertical-align:top;width:600px;' ><![endif]--><div class='mj-column-per-100 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'><tr><td align='center' style='font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'><tbody><tr><td style='width:550px;'><img alt='' height='auto' src='http://191n.mj.am/tplimg/191n/b/040q/qz82.png' style='border:none;border-radius:px;display:block;outline:none;text-decoration:none;height:auto;width:100%;' width='550'></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align='center' border='0' cellpadding='0' cellspacing='0' class='' style='width:600px;' width='600' ><tr><td style='line-height:0px;font-size:0px;mso-line-height-rule:exactly;'><![endif]--><div style='background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#ffffff;background-color:#ffffff;width:100%;'>"
 +"<tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;'><!--[if mso | IE]><table role='presentation' border='0' cellpadding='0' cellspacing='0'><tr><td class='' style='vertical-align:top;width:600px;' ><![endif]--><div class='mj-column-per-100 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'><tr><td align='left' style='font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><div style='font-family:Arial, sans-serif;font-size:13px;line-height:22px;text-align:left;color:#55575d;'><p style='font-size: 13px; margin: 10px 0;'>This is a second paragraph you can customize as your please.</p><p style='font-size: 13px; margin: 10px 0;'>If you have stored contact properties with your contacts, you can include personalization variables such as first name, last name in your message content.</p></div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align='center' border='0' cellpadding='0' cellspacing='0' class='' style='width:600px;' width='600' ><tr><td style='line-height:0px;font-size:0px;mso-line-height-rule:exactly;'><![endif]--><div style='Margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;vertical-align:top;'><!--[if mso | IE]><table role='presentation' border='0' cellpadding='0' cellspacing='0'><tr><td class='' style='vertical-align:top;width:600px;' ><![endif]--><div class='mj-column-per-100 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'><tr><td align='center' style='font-size:0px;padding:0px 20px 0px 20px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><div style='font-family:Arial, sans-serif;font-size:11px;line-height:22px;text-align:center;color:#55575d;'><p style='font-size: 13px; margin: 10px 0;'>This e-mail has been sent to [[EMAIL_TO]], <a href='[[UNSUB_LINK_EN]]' style='color:inherit;text-decoration:none;' target='_blank'>click here to unsubscribe</a>.</p></div></td></tr><tr><td align='center' style='font-size:0px;padding:0px 20px 0px 20px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><div style='font-family:Arial, sans-serif;font-size:11px;line-height:22px;text-align:center;color:#55575d;'><p style='font-size: 13px; margin: 10px 0;'>   </p></div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>",
   'CustomID': 'Welcome'
      }
    ]
  })
  request
    .then((result) => {
      console.log(result.body)
      res.status(200).send(result);  

    })
    .catch((err) => {
      console.log(err.statusCode)
      res.status(400).send(err);  
    })
  
});

exports.api = functions.https.onRequest(api)

exports.dispatchContactMailtoMe = functions.firestore
.document('messages/{docID}')
.onCreate((snapshot, context) => {
  const mailjet = require ('node-mailjet')
    .connect('112dfab4b51fc1d185e0d2db95cbb9e6', 'b9d0a16849a11b5bed27883404948034')
 // .connect('112dfab4b51fc1d185e0d2db95cbb9e6', 'b9d0a16849a11b5bed27883404948034')
  const request = mailjet
  .post('send', {'version': 'v3.1'})
  .request({
    'Messages':[
      {
        'From': {
          'Email': 'noreply@rajivkhushiram.com',
          'Name': 'Rajiv Khushiram'
        },
        'To': [
          {
            'Email': snapshot.data().email,
            'Name':  snapshot.data().firstname + " "+ snapshot.data().lastname,
          }
        ],
        // Loop through accounts and get  collections
        // Loop through 
        //
        'Subject': 'Rajiv Khushiram: Your Message was Successfully Sent',
        'TextPart': '',
        'HTMLPart': "<!doctype html><html xmlns='http://www.w3.org/1999/xhtml' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'><head><title></title><!--[if !mso]><!-- --><meta http-equiv='X-UA-Compatible' content='IE=edge'><!--<![endif]--><meta http-equiv='Content-Type' content='text/html; charset=UTF-8'><meta name='viewport' content='width=device-width,initial-scale=1'><style type='text/css'>#outlook a { padding:0; }"
        +".ReadMsgBody { width:100%; }"
        +".ExternalClass { width:100%; }"
        +".ExternalClass * { line-height:100%; }"
        +"body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }"
        +"table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }"
        +"img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }"
        +"p { display:block;margin:13px 0; }</style><!--[if !mso]><!--><style type='text/css'>@media only screen and (max-width:480px) {"
          +" @-ms-viewport { width:320px; }"
          +"@viewport { width:320px; }"
          +"}</style><!--<![endif]--><!--[if mso]>"
          +"<xml>"
          +" <o:OfficeDocumentSettings>"
          +"<o:AllowPNG/>"
          +"<o:PixelsPerInch>96</o:PixelsPerInch>"
          +"</o:OfficeDocumentSettings>"
          +" </xml>"
          +" <![endif]--><!--[if lte mso 11]>"
          +" <style type='text/css'>"
          +" .outlook-group-fix { width:100% !important; }"
          +"</style>"
          +" <![endif]--><style type='text/css'>@media only screen and (min-width:480px) {"
            +".mj-column-per-67 { width:67% !important; max-width: 67%; }"
            +".mj-column-per-33 { width:33% !important; max-width: 33%; }"
            +".mj-column-per-100 { width:100% !important; max-width: 100%; }"
            +" }</style><style type='text/css'>[owa] .mj-column-per-67 { width:67% !important; max-width: 67%; }"
            +"[owa] .mj-column-per-33 { width:33% !important; max-width: 33%; }"
            +"[owa] .mj-column-per-100 { width:100% !important; max-width: 100%; }</style><style type='text/css'>@media only screen and (max-width:480px) {"
              +" table.full-width-mobile { width: 100% !important; }"
              +"td.full-width-mobile { width: auto !important; }"
 +"}</style></head><body style='background-color:#F4F4F4;'><div style='background-color:#F4F4F4;'><!--[if mso | IE]><table align='center' border='0' cellpadding='0' cellspacing='0' class='' style='width:600px;' width='600' ><tr><td style='line-height:0px;font-size:0px;mso-line-height-rule:exactly;'><![endif]--><div style='Margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;vertical-align:top;'><!--[if mso | IE]><table role='presentation' border='0' cellpadding='0' cellspacing='0'><tr><td class='' style='vertical-align:top;width:402px;' ><![endif]--><div class='mj-column-per-67 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'><tr><td align='left' style='font-size:0px;padding:0px 0px 0px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><div style='font-family:Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;color:#55575d;'><p style='font-size: 13px; margin: 10px 0;'></p></div></td></tr></table></div><!--[if mso | IE]></td><td class='' style='vertical-align:top;width:198px;' ><![endif]--><div class='mj-column-per-33 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'><tr><td align='right' style='font-size:0px;padding:0px 25px 0px 0px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><div style='font-family:Arial, sans-serif;font-size:11px;line-height:22px;text-align:right;color:#55575d;'><p style='font-size: 13px; margin: 10px 0;'><a href='[[PERMALINK]]' style='color:inherit;text-decoration:none;' target='_blank'></a></p></div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align='center' border='0' cellpadding='0' cellspacing='0' class='' style='width:600px;' width='600' ><tr><td style='line-height:0px;font-size:0px;mso-line-height-rule:exactly;'><![endif]--><div style='Margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;vertical-align:top;'><!--[if mso | IE]><table role='presentation' border='0' cellpadding='0' cellspacing='0'><tr><td class='' style='vertical-align:top;width:402px;' ><![endif]--><div class='mj-column-per-67 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'><tr><td align='left' style='font-size:0px;padding:0px 0px 0px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><div style='font-family:Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;color:#55575d;'><p style='font-size: 13px; margin: 10px 0;'></p></div></td></tr></table></div><!--[if mso | IE]></td><td class='' style='vertical-align:top;width:198px;' ><![endif]--><div class='mj-column-per-33 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'><tr><td align='right' style='font-size:0px;padding:0px 25px 0px 0px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><div style='font-family:Arial, sans-serif;font-size:11px;line-height:22px;text-align:right;color:#55575d;'><p style='font-size: 13px; margin: 10px 0;'><a href='[[PERMALINK]]' style='color:inherit;text-decoration:none;' target='_blank'></a></p></div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align='center' border='0' cellpadding='0' cellspacing='0' class='' style='width:600px;' width='600' ><tr><td style='line-height:0px;font-size:0px;mso-line-height-rule:exactly;'><![endif]--><div style='Margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:0px;text-align:center;vertical-align:top;'><!--[if mso | IE]><table role='presentation' border='0' cellpadding='0' cellspacing='0'><tr><td class='' style='vertical-align:top;width:600px;' ><![endif]--><div class='mj-column-per-100 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'><tr><td align='center' style='font-size:0px;padding:10px 25px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'><tbody><tr><td style='width:600px;'><img alt='' height='auto' src='http://191n.mj.am/tplimg/191n/b/040q/qz83.png' style='border:none;border-radius:px;display:block;outline:none;text-decoration:none;height:auto;width:100%;' width='600'></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align='center' border='0' cellpadding='0' cellspacing='0' class='' style='width:600px;' width='600' ><tr><td style='line-height:0px;font-size:0px;mso-line-height-rule:exactly;'><![endif]--><div style='background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#ffffff;background-color:#ffffff;width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;vertical-align:top;'><!--[if mso | IE]><table role='presentation' border='0' cellpadding='0' cellspacing='0'><tr><td class='' style='vertical-align:top;width:600px;' ><![endif]--><div class='mj-column-per-100 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'><tr><td align='left' style='font-size:0px;padding:0px 25px 0px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><div style='font-family:Arial, sans-serif;font-size:13px;line-height:22px;text-align:left;color:#55575d;'><h1 style='font-size: 20px; font-weight: bold;'>Welcome to Rajiv's Blog</h1></div></td></tr><tr><td align='left' style='font-size:0px;padding:0px 25px 0px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><div style='font-family:Arial, sans-serif;font-size:13px;line-height:22px;text-align:left;color:#55575d;'><p style='font-size: 13px; margin: 10px 0;'>The message below was sent to Rajiv.</p><p style='font-size: 13px; margin: 10px 0;'>Message : "+ snapshot.data().message +"</p></div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align='center' border='0' cellpadding='0' cellspacing='0' class='' style='width:600px;' width='600' ><tr><td style='line-height:0px;font-size:0px;mso-line-height-rule:exactly;'><![endif]--><div style='background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#ffffff;background-color:#ffffff;width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:0px;text-align:center;vertical-align:top;'><!--[if mso | IE]><table role='presentation' border='0' cellpadding='0' cellspacing='0'><tr><td class='' style='vertical-align:top;width:600px;' ><![endif]--><div class='mj-column-per-100 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'><tr><td align='center' style='font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'><tbody><tr><td style='width:550px;'><img alt='' height='auto' src='http://191n.mj.am/tplimg/191n/b/040q/qz82.png' style='border:none;border-radius:px;display:block;outline:none;text-decoration:none;height:auto;width:100%;' width='550'></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align='center' border='0' cellpadding='0' cellspacing='0' class='' style='width:600px;' width='600' ><tr><td style='line-height:0px;font-size:0px;mso-line-height-rule:exactly;'><![endif]--><div style='background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#ffffff;background-color:#ffffff;width:100%;'>"
 +"<tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;'><!--[if mso | IE]><table role='presentation' border='0' cellpadding='0' cellspacing='0'><tr><td class='' style='vertical-align:top;width:600px;' ><![endif]--><div class='mj-column-per-100 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'><tr><td align='left' style='font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><div style='font-family:Arial, sans-serif;font-size:13px;line-height:22px;text-align:left;color:#55575d;'><p style='font-size: 13px; margin: 10px 0;'>This is a second paragraph you can customize as your please.</p><p style='font-size: 13px; margin: 10px 0;'>If you have stored contact properties with your contacts, you can include personalization variables such as first name, last name in your message content.</p></div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align='center' border='0' cellpadding='0' cellspacing='0' class='' style='width:600px;' width='600' ><tr><td style='line-height:0px;font-size:0px;mso-line-height-rule:exactly;'><![endif]--><div style='Margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;vertical-align:top;'><!--[if mso | IE]><table role='presentation' border='0' cellpadding='0' cellspacing='0'><tr><td class='' style='vertical-align:top;width:600px;' ><![endif]--><div class='mj-column-per-100 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'><tr><td align='center' style='font-size:0px;padding:0px 20px 0px 20px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><div style='font-family:Arial, sans-serif;font-size:11px;line-height:22px;text-align:center;color:#55575d;'><p style='font-size: 13px; margin: 10px 0;'>This e-mail has been sent to [[EMAIL_TO]], <a href='[[UNSUB_LINK_EN]]' style='color:inherit;text-decoration:none;' target='_blank'>click here to unsubscribe</a>.</p></div></td></tr><tr><td align='center' style='font-size:0px;padding:0px 20px 0px 20px;padding-top:0px;padding-bottom:0px;word-break:break-word;'><div style='font-family:Arial, sans-serif;font-size:11px;line-height:22px;text-align:center;color:#55575d;'><p style='font-size: 13px; margin: 10px 0;'>   </p></div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>",
   'CustomID': 'Welcome'
      }
    ]
  })
  request
    .then((result) => {
      console.log("success mail dispatch")
      console.log(result.body)

    })
    .catch((err) => {
      console.log("error: mail dispatch")
      console.log(err.statusCode)
    })
  console.log(JSON.stringify(snapshot))
  console.log(context.params.docID);
  console.log(snapshot.data().email );
  console.log(snapshot.data().message );
  console.log(snapshot.data().firstname );
  console.log(snapshot.data().lastname)

});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send('Hello from Firebase!');
// });
