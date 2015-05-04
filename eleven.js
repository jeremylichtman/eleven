(function () {

  var eleven = function() { return 11; };

  eleven.valueOf = eleven;

  if(typeof module !== 'undefined' && module.exports) {
    module.exports = eleven;
  } else if (window) {
    window.eleven = eleven;
  }
}());
