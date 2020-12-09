function hello() {
  chrome.tabs.executeScript({
    file: 'content.js'
  }); 
}


var readyStateCheckIntervalLocal = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckIntervalLocal);
        document.getElementById('clickme').addEventListener('click', hello);
    }
}, 10);