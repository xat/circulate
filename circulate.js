var circulate = function(arr) {
  var len = arr.length, pos = 0;
  return !len ? void 0 : function() {
    return arr[pos++ % len];
  }
};