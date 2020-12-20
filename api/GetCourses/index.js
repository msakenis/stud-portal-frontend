const jwt = require('jsonwebtoken');
const { sendContext } = require('../SharedCode/sendContext');
const database = require('../SharedCode/db');

module.exports = function (context, req) {
  try {
    // checks if logged in
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, '123456789');
    console.log(decodedToken);
    database((db) =>
      db.query(`SELECT * FROM courses`, (err, result) => {
        if (err) {
          sendContext(context, err, 400);
        } else {
          sendContext(context, result, 200);
        }
      })
    );
  } catch (err) {
    sendContext(context, { msg: 'Please login to process this action!' }, 401);
  }
};
