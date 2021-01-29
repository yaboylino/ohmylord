"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = helloAPI;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function helloAPI(req, res) {
  res.statusCode = 200;
  res.json({
    name: 'John Doe'
  });
}