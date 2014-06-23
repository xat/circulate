var circulate = function(arr) {
  var len = arr.length, pos = -1;
  return !len ? void 0 : function() {
    return arr[pos = ++pos % len];
  }
};