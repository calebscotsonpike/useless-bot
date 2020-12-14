//@author Tomas Petricek
//@edited by Louis Carter & Caleb Scotson Pike
//@last modified 2020.12.09

function answerQuery(query) {
  query = query.toLowerCase();
  if (query.indexOf("rain") != -1 || query.indexOf("sun") != -1 || query.indexOf("weather") != -1)
    return "I do not care too much about weather, I'm locked inside a data center.";
  return "Sorry Dave, I'm afraid cannot do that.";
}


function handleSayClick() {
  // We first get the 'message' that the user entered and 'conversation' element
  // which we are using for showing all the conversation history
  var message = document.getElementById('message').value.toLowerCase();
  var message2 = document.getElementById('message').value;
  var conversation = document.getElementById('conversation');

  // Get answer for the given query and show the query & answer
  var answer = answerQuery(message)
  conversation.innerHTML += "<p><strong>You:</strong> " + message2 + "</p>";
  conversation.innerHTML += "<p><strong>Useless bot:</strong> " + answer + "</p>";
}

document.getElementById("sayit").onclick = handleSayClick;

var enterClick = document.getElementById("message");
enterClick.addEventListener("keyup", function (event) {
  if (event.code === 'Enter') {
    event.preventDefault();
    document.getElementById("sayit").click();
  }
});