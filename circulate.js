!function(glob) {

  var circulate = function(arr) {
    var len = arr.length, pos = -1;
    return !len ? void 0 : function() {
      return arr[pos = ++pos % len];
    }
  };

  // Node.js / browserify
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = circulate;
  }
  // <script>
  else {
    glob.circulate = circulate;
  }

}(this);
