const http = require("http");
const path = require("path");
const qs = require("querystring");

const { mimeTypes, staticFile } = require("./utilities");
const PORT = 3500;
console.log(typeof staticFile);
http
  .createServer(async function (req, res) {
    let url = req.url;
    console.log(url);

    switch (url) {
      case "/":
        staticFile(res, "/html/main_page.html", ".html");
        break;

      default:
        const extname = String(path.extname(url)).toLowerCase();
        if (extname in mimeTypes) staticFile(res, url, extname);
        else {
          res.statusCode = 404;
          res.end();
        }
        break;
    }
  })
  .listen(PORT);
