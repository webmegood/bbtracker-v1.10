
$("#takePicBtn").click(function(){
		capturePhoto();
});




$(document).ready(function() {
$("#imageLoading").addClass("imageRotateHorizontal").fadeIn(1000).delay(6000).fadeOut(500).delay(250).queue(function(){
    $(this).removeClass("imageRotateHorizontal").dequeue().fadeIn(750);
});	
});


$(document).ready(function() {
(function blink() { 
  $('.blink_me').fadeOut(400).fadeIn(300, blink); 
})();
});





$(document).ready(function(){
	
    $('#menu-tracks').click(function(){
				$('#menu-account').removeClass('current');
				$('#menu-jobs').removeClass('current');
				$('.secondary').animate({"right":"-100vw"}, 50);
        $('#tracks').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#btn-track-control').hide(0);
    });
		
    $('#menu-account').click(function(){
				$('#menu-tracks').removeClass('current');
				$('#menu-jobs').removeClass('current');
				$('.secondary').animate({"right":"-100vw"}, 50);
        $('#account').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#btn-track-control').hide(0);
    });

    $('#menu-jobs').click(function(){
				$('#menu-tracks').removeClass('current');
				$('#menu-account').removeClass('current');
				$('.secondary').animate({"right":"-100vw"}, 50);
        $('#jobs').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#btn-track-control').hide(0);
    });

});




$(document).ready(function(){
    $('#tracksCurrentBtn').click(function(){
				$('#menu-tracks').addClass('current');
				$('#tracks').animate({"right":"-100vw"}, 50);
        $('#tracksCurrent').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#btn-track-control').delay(300).fadeIn(500);
    });
});








function showLocation(position) {
            
						
						
						var lat1 = position.coords.latitude;
            var lon1 = position.coords.longitude;
						
						
						
						
						//get location name
						//var locationData = latitude;
						
						//compare with Melbourne
						var lat2 = -37.8136;
						var lon2 = 144.9631;
						
						
						
				//get distance from Melbourne		
				var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var radlon1 = Math.PI * lon1/180;
        var radlon2 = Math.PI * lon2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344; // convert to kms
				dist = (Math.round(dist*10))/10;




				
				//get bearing of location in relation to Melbourne
				function radians(n) {
					return n * (Math.PI / 180);
				}
				function degrees(n) {
					return n * (180 / Math.PI);
				}
				
					startLat = radians(lat1);
					startLong = radians(lon1);
					endLat = radians(lat2);
					endLong = radians(lon2);
				
					var dLong = endLong - startLong;
				
					var dPhi = Math.log(Math.tan(endLat/2.0+Math.PI/4.0)/Math.tan(startLat/2.0+Math.PI/4.0));
					if (Math.abs(dLong) > Math.PI){
						if (dLong > 0.0)
							 dLong = -(2.0 * Math.PI - dLong);
						else
							 dLong = (2.0 * Math.PI + dLong);
					}
				
					bearing = (degrees(Math.atan2(dLong, dPhi)) + 360.0) % 360.0;
					if (bearing < 11.25) {				
					direction = "S";
					} else if (bearing	< 33.75) {	
					direction = "SSW";
					} else if (bearing	< 56.25) {	
					direction = "SW";
					} else if (bearing	< 78.75) {	
					direction = "WSW";
					} else if (bearing	< 101.25) {	
					direction = "W";
					} else if (bearing	< 123.75) {	
					direction = "WNW";
					} else if (bearing	< 146.25) {	
					direction = "NW";
					} else if (bearing	< 168.75) {	
					direction = "NNW";
					} else if (bearing	< 191.25) {	
					direction = "N";
					} else if (bearing	< 213.75) {	
					direction = "NNE";
					} else if (bearing	< 236.25) {	
					direction = "NE";
					} else if (bearing	< 258.75) {	
					direction = "ENE";
					} else if (bearing	< 281.25) {	
					direction = "E";
					} else if (bearing	< 303.75) {	
					direction = "ESE";
					} else if (bearing	< 326.25) {	
					direction = "SE";
					} else if (bearing	< 348.75) {	
					direction = "SSE";
					} else if (bearing	< 360) {	
					direction = "S";
					} 
				
					
				//put distance and bearing together	
				var locationData = dist + "k " + direction  + " of Melb";


					
					
						
						var timeStamp = Math.floor(Date.now() / 1000);
						
						
						
						// Retrieve from Local Storage
						var storedNames = JSON.parse(localStorage.getItem("savedData"));

						
						if (storedNames === "") {
							var geoDataArray01 = [];
						} else {
							//storedNames = [];
							var geoDataArray01 = storedNames;
						}
						



						
						
						
						var test = [timeStamp,locationData,lat1,lon1];
						geoDataArray01.unshift(test); //reverse order to have most recent entry showing first						
						
						//Save to Local Storage
						localStorage.setItem("savedData", JSON.stringify(geoDataArray01));
						
						//alert(geoDataArray01);
						
						
						
						
						prevlat = geoDataArray01[1][2];
						prevlon = geoDataArray01[1][3];
						
						//Calculate distance between 2 most recent points
						var newlat1 = Math.PI * lat1/180;
						var newlat2 = Math.PI * prevlat/180;
						var newlon1 = Math.PI * lon1/180;
						var newlon2 = Math.PI * prevlon/180;
						var theta = currentlon1-currentlon2;
						var radtheta = Math.PI * theta/180;
						var currentdist = Math.sin(newlat1) * Math.sin(newlat2) + Math.cos(newlat1) * Math.cos(newlat2) * Math.cos(radtheta);
						currentdist = Math.acos(currentdist);
						currentdist = currentdist * 180/Math.PI;
						currentdist = currentdist * 60 * 1.1515;
						currentdist = currentdist * 1.609344; // convert to kms
						currentdist = (Math.round(currentdist*10))/10;
						
						
					  // Retrieve currently saved total distance
						var storedDistance = JSON.parse(localStorage.getItem("totalDistance"));
						var totalDistance = (storedDistance + currentdist);

						document.getElementById("totalDistance").innerHTML = currentdist;
						//Save to Local Storage
						localStorage.setItem("totalDistance", totalDistance);
						
						
						
						
						var watchCount = 1;
						//if(watchCount>=2) {	 // the 2nd time we use watchPosition is supposed to be more accurate than the 1st, so ignore 1st
							appendToTable(geoDataArray01);
							watchCount++;
						//}
							
						
											
         }

         function errorHandler(err) {
            if(err.code == 1) {
               alert("Error: Access is denied!");
            }
            
            else if( err.code == 2) {
               alert("Error: Position is unavailable!");
            }
						
						
						
}
			

			






function appendToTable(geoData) {			

				//remove current rows from table (except header row)
				$("#current-tracks tbody tr").remove(); 

				var tr;
        for (var i = 0; i < geoData.length; i++) {
										
						date = new Date(geoData[i][0] * 1000)
						day = date.getDate();
						month = date.getMonth()+1;
						year = date.getFullYear().toString().substr(2,2);
						hours = date.getHours();
						if (hours < 10) {
							hours = "0" + hours;
						}
						minutes = date.getMinutes();
						if (minutes < 10) {
							minutes = "0" + minutes;
						}
						seconds = date.getSeconds();
						if (seconds < 10) {
							seconds = "0" + seconds;
						}
						address = geoData[i][1];

						tr = $('<tr/>');
            tr.append("<td>" + day + "/" + month + "/" + year + "</td>");
            tr.append("<td>" + hours + ":" + minutes + ":" + seconds + "</td>");
            tr.append("<td>" + address + "</td>");
            $('#current-tracks').append(tr);
        }
				
				
				// no longer need to watch location
				navigator.geolocation.clearWatch(watchID);
				
}

	







	
$("#btn-track-control").click(function(){
	
	
						//change pause/start button classes
						if ($("#play-icon").hasClass("fa-play") ) {
						$("#btn-track-control").removeClass('start-track');
						$("#play-icon").removeClass('fa-play');
						$("#btn-track-control").addClass('pause-track');
						$("#play-icon").addClass('fa-pause');
						$('.status').fadeIn(10);
						} else {
						$("#btn-track-control").removeClass('pause-track');
						$("#play-icon").removeClass('fa-pause');
						$("#btn-track-control").addClass('start-track');
						$("#play-icon").addClass('fa-play');
						$('.status').fadeOut(10);
						}
						
						
						if ($("#play-icon").hasClass("fa-pause") ) {
							
							var watchID;
							
							if(navigator.geolocation){
								 // timeout at 60000 milliseconds (60 seconds)
								 var options = {
									 //timeout:60000,
									 desiredAccuracy: 10,
									 stationaryRadius: 10,
									 distanceFilter: 10,
									 //interval: 30000, // <!-- poll for position every 30 secs 
									 //locationService: backgroundGeoLocation.service.ANDROID_FUSED_LOCATION,
									 debug: false, // <-- enable this hear sounds for background-geolocation life-cycle.
									 stopOnTerminate: true // <-- enable this to clear background location settings when the app terminates							 
									 };
									 
									 //check location every 60 seconds
										 //setInterval(function() {
									 //}, 10000);
											 
											navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
											//watchID = navigator.geolocation.watchPosition(showLocation, errorHandler, options);
											//navigator.geolocation.watchPosition(showLocation, errorHandler, options);
											
											
											
															 
							}
							
							else {
								 alert("Sorry, browser does not support geolocation!");
							}
							
					} else {
						navigator.geolocation.clearWatch(watchID);
					}

    });


