function shout(string) {
    
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}

function logShout (hello) {
    console.log("hello".toUpperCase());
}
function logWhisper (hello) {
    console.log("hello".toLowerCase());
}
function sayHiToHeadphonedRoommate(hello) { 

  var cantHear = "I can't hear you!";
  var yesInd = "YES INDEED!";
  var loveTo = "I would love to!";
  if (hello.toLowerCase(hello) === hello) {
    return cantHear;
  }
  else if (hello.toUpperCase(hello) === hello) {
    return yesInd;
  }
  else if ("Let's have dinner together!" === hello) {
    return loveTo;}
  }