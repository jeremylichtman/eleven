(function () {

  var eleven = function() { return 11; };

  eleven.valueOf = eleven;

  eleven.louder = function() { return 'These go up to 11'; };

  if(typeof module !== 'undefined' && module.exports) {
    module.exports = eleven;
  } else if (window) {
    window.eleven = eleven;
  }
}());
