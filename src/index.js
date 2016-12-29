function min(arr) {
  if (!arr || arr.length == 0)
  { return }
  else
    arr = arr.filter(function (value) { return typeof value === 'number'; })
  return Math.min.apply(null, arr);
}


function max(arr) {
  if (!arr || arr.length == 0)
  { return }
  else
    arr = arr.filter(function (value) { return typeof value === 'number'; })
  return Math.max.apply(null, arr);
}



function sum() {
  if (arguments.length === 0) { return 0; }
  var len = arguments.length;
  var result = arguments[0];
  for (var i = 1; i < len; i++) {
    var num = typeof (arguments[i]);
    if (num != "number") { arguments[i] = 0; }
    result += arguments[i];
  }
  return result;
}

