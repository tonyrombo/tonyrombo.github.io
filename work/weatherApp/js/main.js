var MyModule = ( function( window, undefined ) {
  var cityInput = document.getElementById("searchCity");
  var countryInput = document.getElementById("searchCountry");
  var jsonURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
  
  
  function loadJSON(callback) {
    var weatherURL = jsonURL + cityInput.value + "," + countryInput.value;
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', weatherURL, true);
    console.log(weatherURL);
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

// document.getElementById('startSearch').onclick = function(){
//   MyModule.loading(function(data){
//     console.log(data.name,"\n",data.main.temp);
//   });
// }


//------------------Factory Pattern-----------------//

var pageContent = '';

document.getElementById('startSearch').onclick = function(){
  MyModule.loading(function(data){

    function getWeather( options ) {
      this.city = options.city;
      this.country = options.country;
      this.icon = options.icon;
      this.currentWeather = options.currentWeather;
      this.weatherDescription = options.weatherDescription;
    }
     
    function drawWeather() {}
    drawWeather.prototype.createItem = function createWeather( options ){
      var parentClass = getWeather;
      if( parentClass === null ) {
        return false;
      }
      return new parentClass( options );
    }

    var weatherFactory = new drawWeather();
    var weatherItem = weatherFactory.createItem( {
      city : data.name,
      country : data.sys.country,
      icon : data.weather[0].icon,
      currentWeather : data.weather[0].main,
      weatherDescription : data.weather[0].description
    } );

    console.log(weatherItem);

    document.getElementById('showInfo').innerHTML +=

      '<div class="weatherItem"> <h3 class="weatherTitle">'+weatherItem.city+", "+weatherItem.country+'</h3>'+
        '<img src="http://openweathermap.org/img/w/'+weatherItem.icon+'.png" class="weatherIcon">'+
        '<p class="currentWeather">'+weatherItem.currentWeather+'</p>'+
        '<p class="weatherDescription">'+weatherItem.weatherDescription+'</p>';
  })
}


