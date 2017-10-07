//Create a function called pow which takes two arguments, base and n.  
//It should than return the result of multiplying the base times itself n time (that is to say, return base to the power of n).  



const pow = function(base, n) {


	 if(n===0) {

	 	return 1;
	 }

	 return base * pow(base, n-1); 
	 
 };


 

 


//Create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height.


const stars = function(s) {

if (s === 0) {

return "";

};

return "*" + stars(s-1);

};


const spaces = function(p) {

if (p === 0) {

return "";

};

return " " + spaces(p-1)

};


const drawstars = function(n) {


	const starsO = function(n, numSpaces, numStars) {

if (n === 0) {

return "";

};

console.log(spaces(numSpaces) + stars(numStars));
starsO(n-1, numSpaces+1, numStars-2);

	};

	starsO(n, 0, n*2-1);

};






//Write a function that reverses a string with recursion.

const revString = function(str) {   

	const f = function(str, index) {

		if (index < 0) {

			return "";
		}

		return str[index] + f(str, index-1);
	};

	return f(str, str.length-1);

};

revString("please work");






// Create a function called checkerboard which, given a size argument, will draw an n by n checkerboard on the screen.  

const lineOne=function(l) {


	 if(l===0) {

	 	return "";
	}
	 

	 return "* "+lineOne(l-1);


 };
  

  const lineTwo=function(n) {


	  if(n===0) {

	  	return "";

	  }
  
  return " *" + lineTwo(n-1);


  };
  
  
  const mix = function(x, y) {

	if(y===0) {

		return "";

	}

	console.log(lineOne(x));

	console.log(lineTwo(x));

	return mix(x, y-1);
  };
  

  
  const checkerboard = function (n) {
    
    if(n%2 === 0) {           //because, for some reason, when the number was not divisible by two, the checkerboard was endless
 		
    
    return mix(n, n/2);     
    
   
    } 
    
    mix(n, (n-1)/2);
    console.log(lineOne(n));

  };

 
  
 
  
  
 
