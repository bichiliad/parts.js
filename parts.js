/*
 * UTILITIES 
 *************************************/
// This is here because I like jQuery syntax.
var $ = document.querySelectorAll


// Takes in a function and a delay, and returns a function that fires only 
// after it hasn't been called for @calm time. 
//
// Example: a function that's called on window.resize could be passed in, 
//    so that it is only called after the window is done resizing. 
//
// @fn   - the function to execute
// @calm - the delay, in milliseconds (optional, defaults to 200)
function calm_down(fn, calm) {
  if(typeof fn !== "function")
    console.log("You need to supply a valid function");

  var _calm = calm || 200;
  var _t;

  return function() {
    clearInterval(t); 

	  _t = setInterval(function(){
  		fn.apply(undefined, arguments);
  	}, _calm);
  };

}

// Given a url to a script tag, attempts to inject the script into the DOM.
// Good for loading things only when they're needed.
function load_script(url) { 
  var script=document.createElement('script');
  script.setAttribute("type","text/javascript");
  script.setAttribute("src", url);
  document.getElementsByTagName("head")[0].appendChild(script);
}

/*
 * EVENTING
 *************************************/

// Takes in a function, an event, and an element to bind it to, and returns
// a function that unbinds said function. elem defaults to window.
//
// Example: To bind fn to window.resize,
//    parts_create_listener(fn, "resize", window);
function create_listener = function(fn, event, elem) {
  if(typeof fn !== "function" || typeof event !== "string")
    console.log("You need to supply a valid function");

  _e = elem || window;

  _e.addEventListener(event, fn, false);

  // Return function that detatches function
  return function() {
    _e.removeEventListener(event, fn, false);
  }
};

