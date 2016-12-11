
var arr=[7,8,9,5,'cca',1];

function min(arr)
{
arr = arr.filter(function(value){return typeof value==='number';})

var i=0;
  
   if (arr.length==i) return ('its clear bro')

else

return Math.min.apply(null, arr);
}

console.log(min([45,67,78,0,'tv',true])); 



///////MAX/////////(same)




var arr=[7,8,9,5,'cca',1];

function max(arr)
{
arr = arr.filter(function(value){return typeof value==='number';})

var i=0;
  
   if (arr.length==i) return ('its clear bro')

else

return Math.max.apply(null, arr);
}

console.log(max([45,67,78,0,'tv',true])); 





////////SUM////////////////







var arr=[7,8,9,5,'cca',1];
function sum(arr)
{
  arr = arr.filter(function(value){return typeof value==='number';})
  
  var i=0;
  
   if (arr.length==i) return ('its clear bro')

else

return arr.reduce(function(sum,current){
  return sum+current;},0);
  

}
console.log(sum([10, 45, 55, 100, 66, 4, 99])); 
















