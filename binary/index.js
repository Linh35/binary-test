"use strict";

const fs = require("fs");

module.exports.fetchBinary = (event, context, callback) => {
  try {
    const content = fs.readFileSync("binary/sample.pdf");

    const response = {
      statusCode: 200,
      headers: {
        "Content-Type": "application/pdf"
      },
      body: content.toString("base64"),
      isBase64Encoded: true
    };

    return callback(null, response);
  } catch (errorMessage) {
    console.error(errorMessage);

    const response = {
      statusCode: 500,
      body: errorMessage
    };

    return callback(null, response);
  }
};
