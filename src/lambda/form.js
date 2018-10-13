require('dotenv').config()

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_API_DOMAIN = process.env.MAILGUN_API_DOMAIN;

var sendToEmail = (name, to, message) => {
  const mailgun = require('mailgun-js')({apiKey: MAILGUN_API_KEY, domain: MAILGUN_API_DOMAIN})
  const data = {
    from: `Form test <noreply@kimlarsson.se>`,
    // to: `${to}@bravissimo.se`,
    to: 'kimla89@gmail.com',
    subject: 'New message from ' + name,
    text: `
      Name: ${name}
      Message: ${message}
    `
  }
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    if (error) console.log(error)
  })
}


export function handler (event, context, callback) {
  const data = JSON.parse(event.body);
  sendToEmail(data.name, data.contact, data.message);
  const responseBody = {result: "Success."}
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody)
  });
}