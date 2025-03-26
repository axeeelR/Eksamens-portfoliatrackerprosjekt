function verifyPasswordRequirements(password){
  let spesialtegn = ["'","§","!","#","$","€","%","&","/","(",")","=","?","+","´","`","^","¨","*","@",";",",",":",".","-","_","<",">"];

    if(password.length >= 8 && 
      password.length <= 20 &&
      spesialtegn.some(char => password.includes(char)) &&
      /[0-9]/.test(password)
    ){
      return true
      
    } else{
      return false
    }
  }

console.log(verifyPasswordRequirements("Tesest5++"))

module.exports = verifyPasswordRequirements;

//sdjfns