let lunches = [];

function addLunchToEnd(arr,str){
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr,str){
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr){
  
  if (arr != 0){
  let rmElement = arr.pop();
  console.log(`${rmElement} removed from the end of the lunch menu.`);
}
  else {
    console.log("No lunches to remove.");
  }
  return arr;
}


function removeFirstLunch(arr){
  
  if (arr != 0){
  let rmElement = arr.shift();
  console.log(`${rmElement} removed from the start of the lunch menu.`);
}
  else {
    console.log("No lunches to remove.");
  }
  return arr;
}


function getRandomLunch(arr){

if(arr != 0 ){
  let randomItem = arr[Math.floor(Math.random() * arr.length)];

  console.log(`Randomly selected lunch: ${randomItem}`);
}
else {
  console.log("No lunches available.");
}

}

function showLunchMenu(arr) {
  if (arr != 0) {
    console.log("Menu items: " + arr.join(", "));
  } else {
    console.log("The menu is empty.");
  }
}