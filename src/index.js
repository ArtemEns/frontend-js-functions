var arr=[7,8,9,5,'cca',1];

function min(arr)
{
arr = arr.filter(Number);
 
var i=0;
  
   if (arr.length==i) return ('its clear bro')

else

return Math.min.apply(null, arr); 
}

console.log(min([3,12,4,'t'])); 