function maskEmail(email) {
  let position = email.indexOf('@');
  let mask = email[0] + "*".repeat(position - 2) +  email.slice(position-1);
  return mask;
}


let email = "mahfujhussain@gmail.com"
console.log(maskEmail(email));