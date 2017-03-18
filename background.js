chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    'outerBounds': {
      'width': 375,
      'height': 385,
      'maxWidth': 375,
      'maxHeight': 385,
      'minWidth': 375,
      'minHeight': 385
    },
    'resizable': false,
  })
})