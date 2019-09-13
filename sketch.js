var veryHungry = false;

function setup() {

  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="Goldilocks & the Three Bears"; // title

  document.getElementById('author').innerHTML="xander"; // author


  
  // All of your code goes under here
  

  var story = 'Goldilocks went on a walk for ' + many() + ' hours and she was lost. eventually she found a cave that had a carpet that said home sweet home. she was ' + wondering()+' is she was going  to go in the cave. she dose enter the cave and sees that there arre some bowles on the tabe. she is very hungry and she dose '+eat()+' eat the porridge.the bears get home and she runs away but the bears start chasing her down. she find the bridge that has a river that leads to her houe she thinks of' +thinking()+' and gets home to her family . the end.' // Create the text

  printToPage(story); // Print the text to the webpage
}



// Put your functions below here:

function many() {
  let hours = Math.floor(random(1, 6)); // Random number rounded down
  if(hours > 3) {
    veryHungry = true;
  }
  return hours
}

function wondering() {
  if(veryHungry == true) {
    return "gose inside the cave. she enters the cave and sees that there are some bowls on the table. she is very hungry and " +eat();
  } else {
  return " dose not go inside the story ends";
  }
}

function eat() {
  let insp = random(1, 6);
  if(insp > 3) {
    return " she dose not eat the porriged and falls asleep in the little bears bed. "
  } else {
    return " she eat the porriged. the bear gets home and she runs away but the bears start chasing her down. she find the bridge that lead to her house. she   "
    +thinking();
  }
}


function thinking() {
  let insp = random(1, 6);
  if(insp > 3) {
  return " dose not jump she gets turned into the bears maid and never returns homr"
  } else { 
    return" jumps and gets home with her family. THE END "
  }
}


//Don't delete this!
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}    