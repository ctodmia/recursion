// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

  // your code goes here
  	//JSON.stringify({});                  // '{}'
	//JSON.stringify(true);                // 'true'
	//JSON.stringify('foo');               // '"foo"'
	//JSON.stringify([1, 'false', false]); // '[1,"false",false]'
	//JSON.stringify({ x: 5 });            // '{"x":5}'

	//i have no idea what this has to do with recursion.
	//so basically we want that whatever we pass as an argument to stringifyJSON  
	//it should wrap quotes around that parameter. 
	//so stringifyJSON([1,2,3]) ==> '[1,2,3]'

	//we got a wonderful clue. look at your fixtures.js file. you will notice that there i an variable 
	//called stringifiableObjects and this is an ARRAY! this array is what our spec is using to inspect
	//our code. with that being said we know we need to iterate over this array and make sure 
	//that each one get stringified to pass all all test. 

	//strategy: for example make 9 ==> '9' think about how to iterate over the array stringifiableObjects.
	//lets also try refactoring the code by making a separate function that adds quotes around obj. 
	//(or is that what this stringifyJSON is suppose to do?)



var stringifyJSON = function(obj) {


//lets start of by writing some of our base cases. We know that there are some unstringifiable and they are
// functions and undefined. 

 if(typeof obj === 'string') {
          return '"' + obj + '"';
    }


// now lets see if we can iterate through our array. 
if(Array.isArray(obj)) {
    var stringArrays = [];
//this is where the recursion happens. 
    for(var i = 0; i < obj.length; i++) {
        if(obj[i] === undefined && typeof obj[i] === 'function' ){
            stringArrays.push(stringifyJSON(null));
        } else {
            stringArrays.push(stringifyJSON(obj[i]));
        }
    }

   return '[' + stringArrays.join(',') + ']';
}
    if(obj && typeof obj === 'object'){
      var stringObj = [];
          for(var key in obj){
            if (obj[key] !== undefined && typeof obj[key] !== 'function') { 
               stringObj.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
            }
         }  
         return '{' + stringObj.join(',') + '}';
    } 
return obj + "";
};