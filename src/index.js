
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
