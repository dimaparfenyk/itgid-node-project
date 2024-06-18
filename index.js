const http = require("http");
const path = require("path");
const qs = require("querystring");
const { mimeTypes, staticFile, parseCookies } = require("./utilities");

const PORT = 3500;
const { User, Authkey } = require("./class");

http
  .createServer(async function (req, res) {
    let url = req.url;

    switch (url) {
      case "/":
        staticFile(res, "/html/main_page.html", ".html");
        break;

      case "/reguser":
        if (req.method === "POST") {
          let body = "";
          req.on("data", function (data) {
            body += data;
            if (body.length > 1e6) {
              request.connection.destroy();
            }
          });

          req.on("end", async function () {
            let post = qs.parse(body);
            const user = new User(post.email, post.pass);
            if (!(await user.findUser())) {
              let result = await user.createUser();
              if (result) {
                res.end(
                  JSON.stringify({
                    success: true,
                    action: "user was created",
                  })
                );
              } else {
                res.end(
                  JSON.stringify({
                    success: false,
                    action: "create user error",
                  })
                );
              }
            } else {
              res.end(
                JSON.stringify({
                  success: false,
                  action: "user exists",
                })
              );
            }
          });
        }
        break;

      case "/login":
        staticFile(res, "/html/login.html", ".html");
        break;

      case "/login-user":
        if (req.method == "POST") {
          let body = "";
          req.on("data", function (data) {
            body += data;
          });

          req.on("end", async function () {
            let post = qs.parse(body);
            const user = new User(post.email, post.pass);
            let auth = await user.authUser();
            if (auth) {
              let cookie = await Authkey.createAuthKey(auth.id);
              let ts = new Date();
              ts.setDate(ts.getDate() + 7);
              res.end(
                JSON.stringify({
                  success: true,
                  action: "You are logged in",
                  cookie:
                    "auth=" +
                    cookie.authkey +
                    "; expires=" +
                    ts.toGMTString() +
                    "; path=/",
                })
              );
            } else {
              res.end(
                JSON.stringify({
                  success: false,
                  action: "user not found",
                })
              );
            }
          });
        }
        break;

      case "/admin":
        cookies = parseCookies(req);
        if (cookies.auth) {
          let r = await Authkey.checkCookie(cookies.auth);
          if (r) {
            staticFile(res, "/html/admin.html", ".html");
          } else {
            res.setHeader("Set-Cookie", ['auth="";max-age=-1', "u=;max-age=0"]);
            staticFile(res, "/html/login.html", ".html");
          }
        } else {
          res.setHeader("Set-Cookie", ['auth="";max-age=-1', "u=;max-age=0"]);
          staticFile(res, "/html/login.html", ".html");
        }
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
