require('dotenv').config()

const { MongoClient } = require('mongodb');
const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

function errorResponse(callback, err) {
  console.error(err);

  callback(null, {
    statusCode: 500,
    body: JSON.stringify({ error: err })
  })
}

export function handler (event, context, callback) {
  const data = JSON.parse(event.body);

  MongoClient.connect(`${DB_URL}/${DB_NAME}`, (err, connection) => {
    if (err) return errorResponse(callback, err);
  
    const db = connection.db(DB_NAME);
    const collection = db.collection('pages');

    collection.save({
      _id: "1",
      heading: data.heading,
      preamble: data.preamble,
      text: data.text,
    }, function(err, result) {
      if (err) return errorResponse(callback, err);

      connection.close();

      callback(null, {
        statusCode: 200,
        body: JSON.stringify(result)
      });
    });
  });
}