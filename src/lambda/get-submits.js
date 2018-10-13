require('dotenv').config()

const { MongoClient } = require('mongodb');
const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

exports.handler = function(event, context, callback) {
  MongoClient.connect(`${DB_URL}/${DB_NAME}`, (err, connection) => {
    const db = connection.db(DB_NAME);
    const collection = db.collection('submits');
    collection.find({}).toArray(function(err, docs) {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(docs)
      });
    });
  });
}