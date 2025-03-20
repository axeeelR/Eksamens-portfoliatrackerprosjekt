function verifyPasswordRequirements(password){
  if(typeof password !== "string"){
    return false
  }
  
  const spesialtegn = ["'","§","!","#","$","€","%","&","/","(",")","=","?","+","´","`","^","¨","*","@",";",",",":",".","-","_","<",">"];

  return (
    password.length >= 8 && 
    password.length <= 20 &&
    spesialtegn.some(char => password.includes(char)) &&
    /[0-9]/.test(password)
  );
};
console.log(verifyPasswordRequirements("Tesest5++"))
module.exports = verifyPasswordRequirements;

