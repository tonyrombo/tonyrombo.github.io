var MyModule = ( function( window, undefined ) {  
  
  function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', "js/items.json", true);
    // console.log(weatherURL);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        // .open will NOT return a value but simply returns undefined in async mode so use a callback
        var data = JSON.parse(xobj.responseText);
        callback(data);
      }
    };
    xobj.send(null);
  }
  return {
    loading : loadJSON
  };
  
} )( window );

MyModule.loading(function(data){
	console.log(data);
});