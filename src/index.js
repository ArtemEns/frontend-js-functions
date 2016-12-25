///////////MIN/////////////

var arr = [7, 8, 9, 5, 'cca', 1];

function min(arr) 
{
  arr = arr.filter(function (value) { return typeof value === 'number'; })
  var i = 0;
  if (arr.length == i) return (undefined)
  else
    return Math.min.apply(null, arr);
}
console.log(min([null, false, "4", undefined, true, 99, 6]));


//-------------------------------------------------------------------------------
///////MAX/////////(same)

var arr = [7, 8, 9, 5, 'cca', 1];

function max(arr)
 {
  arr = arr.filter(function (value) { return typeof value === 'number'; })
  var i = 0;
  if (arr.length == i) return (undefined)
  else
    return Math.max.apply(null, arr);
}
console.log(max([null, false, "4", undefined, true, 99, 6]));


//-------------------------------------------------------------------------------
////////SUM////////////////

var arr = [7, 8, 9, 5, 'cca', 1];
function sum() 
{
      if (arguments.length === 0) { return undefined; }
      var len = arguments.length;
      var result = arguments[0];
      for (var i = 1; i < len; i++)
     {
      var num = typeof (arguments[i]);
      if (num != "number") { arguments[i] = 0; }
      result += arguments[i];
     }
  return result;
}
console.log(sum(null, false, "4", undefined, true, 99, 6)); 