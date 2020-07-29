const User = require("../user/model");

const { toData } = require("./jwt");

async function auth(request, response, next) {
  const auth =
    request.headers.authorization && request.headers.authorization.split(" ");
  // console.log("Auth test:", auth);
  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      const data = toData(auth[1]);
      // console.log("Data test:", data);
      const user = await User.findByPk(data.id);
      if (!user) return next("User does not exist");
      request.user = user;
      next();
    } catch (error) {
      response.status(400).json({
        message: `Error ${error.name}: ${error.message}`,
      });
    }
  } else {
    response.status(401).json({
      message: "Please supply some valid credentials",
    });
  }
}

module.exports = auth;
