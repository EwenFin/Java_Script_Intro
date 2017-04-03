var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
}

printName();

// should print out the variable name as that variale is global

score = 5;

var result = function() {
  var score = 3;
  return score;
}

console.log(result());

// should print out 3 as the the local score 3 overwrites the global score 5

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects();
// prints out a list of the suspects
console.log( 'Suspect three is:' + suspectThree )
// identifies suspect 3

var detective = {
    name : 'Ace Ventura',
    pet : 'monkey'
  }

var printName = function(detective) {
  return detective.name
}

var detectiveInfo = function() {
  detective['name'] = 'Poirot' // no var!
  return printName(detective);
}

console.log(detectiveInfo());
//the lack of the var on line 47 resets the detectives name at the global level, so this will return Poirot.  He'll still have a monkey.

var murderer = 'rick';

var outerFunction = function(){
  var murderer = 'marc';

  var innerFunction = function(){
    murderer = 'valerie'; //again no var
  }

  innerFunction(); 
}

outerFunction();
console.log('the murderer is ', murderer);
//I expected the lack of var to affect the murderer globally, but upon at runtime discovered it had not.  it encounters the var murderer on line 57 and overwrites there so never reaches line 54 and Rick doesn't get away with it.
