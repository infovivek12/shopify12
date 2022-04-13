var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
setTimeout(function() {
  // Add the rest of your code here, as we have to wait a moment before the document has jQuery as a part of it.
  $("body").html("<h1>It Works!</h1>");
  console.log("cccc");
}, 100);