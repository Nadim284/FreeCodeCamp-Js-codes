function truncateString(str,number){
  
  if( str.length > number){

    let truncate = str.slice(0,number+1) +  ".".repeat(str.length-number);
    
    return truncate;
  }
  else {
    return str;
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


console.log(truncateString("Absolutely Longer", 2));