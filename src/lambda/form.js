require('dotenv').config()

const { MongoClient } = require('mongodb');
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_API_DOMAIN = process.env.MAILGUN_API_DOMAIN;
const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

const sendEmail = (name, contact, message) => {
  const mailgun = require('mailgun-js')({apiKey: MAILGUN_API_KEY, domain: MAILGUN_API_DOMAIN})
  const data = {
    from: `Form test <noreply@kimlarsson.se>`,
    // to: `${contact}@bravissimo.se`,
    to: 'kimla89@gmail.com',
    subject: 'New message from ' + name,
    text: `
      Name: ${name}
      Contact: ${contact}
      Message: ${message}
    `
  }
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    if (error) console.log(error)
  })
}

function errorResponse(callback, err) {
  console.error(err);

  callback(null, {
    statusCode: 500,
    body: JSON.stringify({ error: err })
  })
}

export function handler (event, context, callback) {
  const data = JSON.parse(event.body);

  sendEmail(data.name, data.contact, data.message);

  MongoClient.connect(`${DB_URL}/${DB_NAME}`, (err, connection) => {
    if (err) return errorResponse(callback, err);
  
    const db = connection.db(DB_NAME);
    const collection = db.collection('submits');

    collection.insertMany([
      {
        name: data.name,
        contact: data.contact,
        message: data.message,
        timestamp: new Date(),
      }
    ], function(err, result) {
      if (err) return errorResponse(callback, err);

      connection.close();

      callback(null, {
        statusCode: 200,
        body: JSON.stringify(result)
      });
    });
  });
}