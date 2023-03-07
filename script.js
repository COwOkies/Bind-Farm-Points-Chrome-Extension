function openRandomPage() {
	var textInput = document.getElementById("input");
	var number = Math.ceil(textInput.value / 3);
    console.log(number)
    for (var i = 0; i < number; i++) {
      var randomQuery = getRandomQuery();
      var randomUrl = 'https://www.bing.com/search?q=' + encodeURIComponent(randomQuery);
      
      chrome.tabs.create({url: randomUrl});
    }
  }
  
  function getRandomQuery() {
    var chars = 'abcdefghijklmnopqrstuvwxyz';
    var randomChars = '';
    for (var i = 0; i < 4; i++) {
      randomChars += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return randomChars;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('randomPageButton').addEventListener('click', openRandomPage);
  });