let url = "https://api.weather.gov/gridpoints/OKX/40,50/forecast";


function grabMyData (data) {
  
 let forecastDiv = document.getElementById("the-forecast")
  
  //  forecastDiv.innerText = data.properties.periods[0].detailedForecast;
   
 let shortForecastData = data.properties.periods[0].shortForecast;   
   console.log (shortForecastData)
   //   forecastDiv.innerText = shortForecast;
  let myGear= document.getElementById("gear");
  
     if (shortForecastData == "Cloudy"){
      myGear.src = "assets/hoodie.png";
      myGear.onclick = function() {
        window.location.href = 'https://www.mlsstore.com/new-york-red-bulls/youth-new-york-red-bulls-red-draft-pick-pullover-hoodie/t-25120388+p-6010308917548+z-9-2834743912?_ref=p-TLP:m-TS:pi-CAROUSEL_1:i-r0c2:po-2';
      forecastDiv.innerText = "The Weather is: ☁️";
     } 
    }
     else if (shortForecastData == "Sunny"){
        myGear.src = "assets/cap.png";
        myGear.onclick = function() {
          window.location.href = 'https://www.mlsstore.com/new-york-red-bulls/mens-new-york-red-bulls-new-era-red/black-two-tone-9fifty-snapback-hat/t-14457044+p-8207242842813+z-9-1720975990?_ref=p-TLP:m-TSC:pi-CAROUSEL_2:i-r0c1:po-1';
       };
        forecastDiv.innerText = "The Weather is: 🌞";
      } 
       else if (shortForecastData == "Rain"){
       myGear.src = "assets/umb.png";
       myGear.onclick = function() {
        window.location.href = 'https://www.wincraft.com/soccer/mls-gifts/new-york-red-bulls-auto-folding-umbrella-a2817519.html'
       forecastDiv.innerText = "The Weather is: 🌧️";
     }
    }
     else if (shortForecastData == "Snow"){
      myGear.src = "assets/scarf.png";
      myGear.onclick = function() {
        window.location.href = 'https://www.mlsstore.com/new-york-red-bulls/new-york-red-bulls-jersey-hook-reversible-scarf/t-47676922+p-606367735470+z-8-2488732133?_ref=p-DLP:m-GRID:i-r0c0:po-0'
      forecastDiv.innerText = "The Weather is: ❄️";
     }
    }
     else if (shortForecastData == "Clear"){
      myGear.src = "assets/long.png";
      myGear.onclick = function() {
        window.location.href ='https://www.mlsstore.com/new-york-red-bulls/mens-new-york-red-bulls-aaron-long-adidas-red-2022-1ritmo-authentic-player-jersey/t-36343655+p-5930462170800+z-9-3480366790?_ref=p-SRP:m-GRID:i-r4c2:po-14'
      forecastDiv.innerText = "The Weather is: 🌌 ";
     }
    }
     else if (shortForecastData == "Fog"){
      myGear.src = "assets/light.jpeg";
      myGear.onclick = function() {
        window.location.href = 'https://safespecial.com/new-york-red-bulls-led-neon-sign'
      forecastDiv.innerText = "The Weather is: 🌫️";
     }
    }
     else{
      myGear.src = "assets/shop.webp";  
      myGear.onclick = function() {
        window.location.href = 'https://www.mlsstore.com/new-york-red-bulls/t-36897088+z-838759-3928598836?_s=gppc&utm_campaign=MLS+-+New+York+Red+Bulls+-+GKs+-+US+-+EN|16093843593&utm_medium=ppc&ks_id=6248_kw49743249&utm_term=new%20york%20red%20bulls%20shop&matchtype=e&utm_source=g&target=kwd-319011943589&pcrid=580347590787&adposition=&gclid=Cj0KCQiAmaibBhCAARIsAKUlaKS3CqQtRO57YF_qKaqU_7kWaPcLtxBm8O0ALljHG4TGjs_bTik2YPwaAoO9EALw_wcB';
     };
     document.body.appendChild(img); 
     forecastDiv.innerText = "Be Ready for any Type of Weather"
    }
  

  
     
}

$.getJSON(url, grabMyData );


