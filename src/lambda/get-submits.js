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

exports.handler = function(event, context, callback) {
  MongoClient.connect(`${DB_URL}/${DB_NAME}`, (err, connection) => {
    if (err) return errorResponse(callback, err);
  
    const db = connection.db(DB_NAME);
    const collection = db.collection('submits');
    collection.find({}).toArray(function(err, docs) {
      if (err) return errorResponse(callback, err);

      connection.close();

      callback(null, {
        statusCode: 200,
        body: JSON.stringify(docs)
      });
    });
  });
}