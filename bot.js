//@author Tomas Petricek
//@edited by Louis Carter & Caleb Scotson Pike
//@last modified 2020.12.17

scrollToBottom();

function answerQuery(query) {
  query = query.toLowerCase();
  if (query == '') return "You didn't say anything."
  else if (query.indexOf('rain') != -1 || query.indexOf('sun') != -1 || query.indexOf('weather') != -1)
    return "I do not care too much about weather, I'm locked inside a data center.";
  else if (query.indexOf('tea') != -1 || query.indexOf('coffee') != -1 || query.indexOf('drink') != -1)
    return 'I would love something to drink, but they have not created one for silicon-based life forms yet.';
  return "Sorry Dave, I'm afraid cannot do that.";
}

function handleSayClick() {
  // We first get the 'message' that the user entered and 'conversation' element
  // which we are using for showing all the conversation history
  var message = document.getElementById('message').value.toLowerCase();
  var message2 = document.getElementById('message').value;
  var conversation = document.getElementById('conversation');

  // Get answer for the given query and show the query & answer
  var answer = answerQuery(message);
  conversation.innerHTML += '<p><strong>You:</strong> ' + message2 + '</p>';
  conversation.innerHTML += '<p><strong>Useless bot:</strong> ' + answer + '</p>';
  scrollToBottom();
  document.getElementById('message').value = '';
}

function scrollToBottom() {
  var chatWindow = document.getElementById('chat-window');
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

document.getElementById('sayit').onclick = handleSayClick;

var enterClick = document.getElementById('message');
enterClick.addEventListener('keyup', function (event) {
  if (event.code === 'Enter') {
    event.preventDefault();
    document.getElementById('sayit').click();
  }
});
