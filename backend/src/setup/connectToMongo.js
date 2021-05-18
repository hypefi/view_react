const { MongoClient } = require('mongodb');

const connectToMongo = async ({ uri, dbName }) => {
  const client = new MongoClient(uri, {
    useUnifiedTopology: true,
  });
  return new Promise ((resolve, reject) => {
    client.connect((err) => {
      if (err) {
        reject(err);
        return;
      }
      const db = client.db(dbName);
      resolve(db)
    })
  });
};

module.exports = connectToMongo;
