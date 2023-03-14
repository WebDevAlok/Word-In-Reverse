// Write code to print words in a string in reverse order
// Sample input 'How are you?'
// Expected output 'you? are How'

function reverseStr(str) {
    var words = str.split(' ');
    var reverse = [];
    var length = words.length;
    for (let i = 0; i < length; i++) {
      reverse.push(words[length-i-1]);
    }
    return reverse.join(' ');
  }
  
  var inText = document.querySelector('#inputText');
  
  var outText = document.querySelector('#outputText');

  inText.addEventListener('input', () => {
    outText.value = reverseStr(inText.value);
  })
  
  