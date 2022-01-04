const db = require("../db-models/db-models");

const appControllers = {};

//CONTROLLERS HERE

appControllers.login = async (req, res, next) => {
  const { username, password } = req.body;
  console.log("this is username from controllers:", username);
  const q = "SELECT * FROM users WHERE username=($1) AND password=($2)";
  await db.query(q, [username, password], (err, data) => {
    if (err) {
      return next(err);
    }
    if (data.rows.length > 0) {
      console.log("user exist");
      res.cookie("user", JSON.stringify(data.rows[0]), {
        maxAge: 900000,
        httpOnly: false,
      });
      res.locals.message = "successfully logged in";
      return next();
    } else {
      res.locals.error = "wrong username or password";
      return next();
    }
  });
};

appControllers.signup = async (req, res, next) => {
  const { fullName, username, password, email } = req.body;
  console.log("here is the username: ", username);
  console.log("type of username: ", typeof username);

  //create an empty object
  const validationErrors = {};
  // conditionals to check if entries are formatted correctly, if incorrect, add message to validationErrors object
  // if username is empty/less than x characters
  if (username.length === 0) {
    validationErrors.username = "username is required";
  } else if (username.length < 6) {
    validationErrors.username = "Username must be min 6 characters";
  } else if (username.length > 20) {
    validationErrors.username = "Username must be max 20 characters";
  }

  // if fullName is empty

  if (fullName.length === 0) {
    validationErrors.fullName = "Please enter your full name.";
  }
  // if password is empty/less than x characters
  if (password.length === 0) {
    validationErrors.password = "Please enter your password.";
  } else if (password.length < 6) {
    validationErrors.password = "Password must be min 6 characters";
  }

  if (email.length === 0) {
    validationErrors.email = "Please enter an email address";
  } else {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (regex.test(email) === false) {
      validationErrors.email = "Please enter a valid email address";
    }
  }
  // if email is not correctly formatted as email address

  if (Object.keys(validationErrors).length !== 0) {
    res.locals.validationErrors = validationErrors;
    return next();
  }

  const q = "SELECT * FROM users WHERE username=($1) OR email=($2)";

  await db.query(q, [username, email], async (err, data) => {
    if (err) {
      return next(err);
    }
    console.log(err);
    const result = await data;
    console.log("here is the response: ", result.rows.length);
    if (result.rows.length > 0) {
      res.locals.error =
        "Account with this username/email already exists. Please try with different username/email";
      next();
    } else {
      await db.query(
        "INSERT INTO users (username, fullName, password, email) VALUES (($1), ($2), ($3), ($4))",
        [username, fullName, password, email],
        async (err, data) => {
          if (err) {
            return next(err);
          }
          console.log("hey i inserted the user");

          await db.query(
            "SELECT * FROM users WHERE username=($1)",
            [username],
            (err, data) => {
              // console.log(data.rows[0]);

              res.cookie("user", JSON.stringify(data.rows[0]), {
                maxAge: 90000,
                httpOnly: false,
              });
              res.locals.message = "Successfully Signed Up!";
              return next();
            }
          );
        }
      );
    }
  });
};

module.exports = appControllers;

// pool.query(text, params, callback);
// INSERT INTO users(fullName,username,password,email) VALUES ('Alex Smith','alex','123','alex@gmail.com');
