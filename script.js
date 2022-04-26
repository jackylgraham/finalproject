var first =["You"];

var second =["are"];

var third =["awesome", "superb", "the best", "Jacky's favorite", "excellent", "just gorgeous", "kind!", "a loving person", "very loved", "appreciated", "intriguing", "intelligent", "capable of anything", "enjoyable", "beautiful", "wise"];

var buttonClick = document.getElementById("generator");

var buttonResetClick = document.getElementById("resetall");

buttonClick.onclick = function() {
   document.getElementById("compliment1").innerHTML = " ";
  var firstWord = first[Math.floor(Math.random() * first.length)];

  var secondWord = second[Math.floor(Math.random() * second.length)];

  var thirdPhrase= third[Math.floor(Math.random() * third.length)];
  
 
  
  var addCompliment = document.getElementById("compliment1");
 
  var newMessage = "\n" + firstWord + " " + secondWord + " " + thirdPhrase + "!\n" + "";
  
  compliment1.innerHTML = compliment1.innerHTML + newMessage;
  
    buttonClick.innerHTML = "Click for another compliment!";

};

buttonResetClick.onclick = function resetAll() {
    document.getElementById("compliment1").innerHTML = " ";  
};
 
