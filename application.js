// working on camera module
navigator.webkitGetUserMedia({video: true},
  function(stream) {
    document.getElementById('video').src = URL.createObjectURL(stream);
  },
  function(error) {
    // error code 
  }
);