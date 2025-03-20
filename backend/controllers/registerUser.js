const checkPassword = require("./utils");

function registrerUser(username, password){
  if(checkPassword(password)){
    console.log("User:", username, "registered");
  }else {
    console.log("Login failed");
  }
}
registrerUser("axelovesen", "Hei1234?")