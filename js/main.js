



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
				$('#go_back_to_tracks').hide(0);
    });
		
    $('#go_back_to_tracks').click(function(){
				$('#menu-account').removeClass('current');
				$('#menu-jobs').removeClass('current');
				$('.secondary').animate({"right":"-100vw"}, 50);
        $('#tracks').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#btn-track-control').hide(0);
				$('#go_back_to_tracks').hide(0);
    });
				
    $('#menu-account').click(function(){
				$('#menu-tracks').removeClass('current');
				$('#menu-jobs').removeClass('current');
				$('.secondary').animate({"right":"-100vw"}, 50);
        $('#account').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#btn-track-control').hide(0);
				$('#go_back_to_tracks').hide(0);
    });

    $('#menu-jobs').click(function(){
				$('#menu-tracks').removeClass('current');
				$('#menu-account').removeClass('current');
				$('.secondary').animate({"right":"-100vw"}, 50);
        $('#jobs').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#btn-track-control').hide(0);
				$('#go_back_to_tracks').hide(0);
    });

    $('#btn-photo').click(function(){
				$('#menu-tracks').removeClass('current');
				$('#menu-account').removeClass('current');
				$('.secondary').animate({"right":"-100vw"}, 50);
        $('#photo').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#btn-track-control').hide(0);
				$('#go_back_to_tracks').hide(0);
    });

});




$(document).ready(function(){
    $('#tracksCurrentBtn').click(function(){
				$('#menu-tracks').addClass('current');
				$('#tracks').animate({"right":"-100vw"}, 50);
        $('#tracksCurrent').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#btn-track-control').delay(300).fadeIn(500);
				$('#go_back_to_tracks').delay(300).fadeIn(500);
    });
});

$(document).ready(function(){
    $('#tracksLogBtn').click(function(){
				$('#menu-tracks').addClass('current');
				$('#tracks').animate({"right":"-100vw"}, 50);
        $('#tracksLog').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#btn-track-control').delay(300).fadeIn(500);
				$('#go_back_to_tracks').delay(300).fadeIn(500);
    });
});





$(document).ready(function(){
		
		
		
	// Get Updated Total Distance Travelled
	var totalDistance;
	// Retrieve currently saved total distance
	if (localStorage["totalDistance"]) {
	var totalDistance = JSON.parse(localStorage.getItem("totalDistance"));
	} else {
	var totalDistance = 0;
	}
	document.getElementById("totalDistance").innerHTML = totalDistance + "km";




	// Get Updated Total Time Travelled	
	
	var storedElapsedTime;
	// Retrieve currently saved elapsed time
	var totalTime = JSON.parse(localStorage.getItem("elapsedTime"));
	
	
	


var startBtn = document.getElementById('btn-start'),
    stopBtn = document.getElementById('btn-pause'),
    seconds = 0, minutes = 0, hours = 0,
    t;
		







// Start timer if track is already active


// Retrieve currently saved elapsed time
var trackActivity = JSON.parse(localStorage.getItem("trackActivity"));

if (trackActivity == 1) {	
	
	startTimer();
	//change pause/start button classes
	$('.btn-start').fadeOut(0);
	$('.btn-pause').fadeIn(50);
	$('.status').fadeIn(10);
	
} else {
	
	stopAfterStart(); //<-- ensures elapsed time is displayed when track is inactive
	//change pause/start button classes
	$('.btn-pause').fadeOut(0);
	$('.btn-start').fadeIn(50);
	$('.status').fadeOut(0);

}



function stopAfterStart() {
  startTimer();
  setTimeout(stopTimer,1001);
}
		

function startTimer() {
		
var el = '#elapsedTime';
var start = 1490860330,
cDisplay = $(el);
var format = function (t) {
    var hours = Math.floor(t / 3600),
        minutes = Math.floor(t / 60 % 60),
        seconds = Math.floor(t % 60),
        arr = [];
    if (hours > 0) {
        arr.push(hours == 1 ? '1:' : hours + ':');
    }
    if (minutes >= 10) {
        arr.push(minutes > 1 ? minutes + ':' : minutes + ':');
    }
    if (minutes < 10) {
        arr.push(minutes > 1 ? '0' + minutes + ':' : '0' + minutes + ':');
    }
    if (minutes > 0 || hours > 0) {
			if (seconds >= 10) {
        arr.push(seconds > 1 ? seconds + '' : seconds + '');
    	} else {
        arr.push(seconds > 1 ? '0' + seconds + '' : '0' + seconds + '');
			}
		}
    cDisplay.html(arr.join(''));
};
interval = setInterval(function () {
    format(new Date().getTime() / 1000 - start);
}, 1000);	
		
}





function stopTimer() {
    clearInterval(interval);
}





/* Start button */
startBtn.onclick = startTimer;

/* Stop button */
stopBtn.onclick = stopTimer;


	
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
				var locationData = dist + "km " + direction  + " of Melb";

						
						var timeStamp = Math.floor(Date.now() / 1000);
						
						
						
						// Retrieve from Local Storage
						var storedNames = JSON.parse(localStorage.getItem("savedData"));

						
						if (storedNames === "") {
							var geoDataArray01 = [];
						} else {
							//storedNames = [];
							var geoDataArray01 = storedNames;
						}
						
						var elapsedTime = 845119;


						
						var test = [timeStamp,locationData,lat1,lon1,elapsedTime];
						geoDataArray01.unshift(test); //reverse order to have most recent entry showing first						
						
						//Save to Local Storage
						localStorage.setItem("savedData", JSON.stringify(geoDataArray01));
						
						
						
						
						var watchCount = 1;
						//if(watchCount>=2) {	 // the 2nd time we use watchPosition is supposed to be more accurate than the 1st, so ignore 1st
							
							
							document.getElementById("current_location").innerHTML = locationData;
							
							
							//appendToTable(geoDataArray01);
							//watchCount++;
						//}
						
						
						
						
						
						
						
						prevlat = geoDataArray01[1][2];
						prevlon = geoDataArray01[1][3];


						
						//Calculate distance between 2 most recent points
						var newlat1 = Math.PI * lat1/180;
						var newlat2 = Math.PI * prevlat/180;
						var newlon1 = Math.PI * lon1/180;
						var newlon2 = Math.PI * prevlon/180;
						var theta = newlon1-newlon2;
						var radtheta = Math.PI * theta/180;
						var currentdist = Math.sin(newlat1) * Math.sin(newlat2) + Math.cos(newlat1) * Math.cos(newlat2) * Math.cos(radtheta);
						currentdist = Math.acos(currentdist);
						currentdist = currentdist * 180/Math.PI;
						currentdist = currentdist * 60 * 1.1515;
						currentdist = currentdist * 1.609344; // convert to kms
						currentdist = (Math.round(currentdist*10))/10;
						
						
						
					  // Retrieve currently saved total distance
						if (localStorage["totalDistance"]) {
							var storedDistance = JSON.parse(localStorage.getItem("totalDistance"));
							var totalDistance = (storedDistance + currentdist);
						} else {
							var totalDistance = currentdist;
						}
						
						

						document.getElementById("totalDistance").innerHTML = totalDistance + "km";
						//Save to Local Storage
						localStorage.setItem("totalDistance", totalDistance);
						
						
						
	
	
					  // Retrieve currently saved elapsed time
						var storedElapsedTime = geoDataArray01[1][4];
												
						
						
						
						elapsedHours = storedElapsedTime.getHours();
						if (elapsedHours < 10) {
							elapsedHours = "0" + elapsedHours;
						}
						elapsedMinutes = storedElapsedTime.getMinutes();
						if (elapsedMinutes < 10) {
							elapsedMinutes = "0" + elapsedMinutes;
						}
						elapsedSeconds = storedElapsedTime.getSeconds();
						if (elapsedSeconds < 10) {
							elapsedSeconds = "0" + elapsedSeconds;
						}
						
						
						document.getElementById("elapsedTime").innerHTML = elapsedHours + ":" + elapsedMinutes + ":" + elapsedSeconds;

						//Save to Local Storage
						localStorage.setItem("elapsedTime", elapsedTime);
	
							
							
						
											
         }

         function errorHandler(err) {
            if(err.code == 1) {
               alert("Error: Access is denied!");
            }
            
            else if( err.code == 2) {
               alert("Error: Position is unavailable!");
            }
						
						
						
}
			

			







	







	
$("#btn-start").click(function(){
	
	//change pause/start button classes
	$('.btn-start').fadeOut(0);
	$('.btn-pause').fadeIn(50);
	$('.status').fadeIn(10);
	
	//Save active track to Local Storage
	localStorage.setItem("trackActivity", JSON.stringify(1));
						
							
							var watchID;
							
							if(navigator.geolocation){
								 // timeout at 60000 milliseconds (60 seconds)
								 //var options = {
									 
								 var options = {

									 
									 
									 //timeout:60000,
									 //desiredAccuracy: 10,
									 //stationaryRadius: 10,
									 //distanceFilter: 10,
									 interval: 30000, // <!-- poll for position every 30 secs 
									 //locationService: backgroundGeoLocation.service.ANDROID_FUSED_LOCATION,
									 //debug: false, // <-- enable this hear sounds for background-geolocation life-cycle.
									 //stopOnTerminate: true // <-- enable this to clear background location settings when the app terminates							 
									 
									 };
									 
									
									 
									 //for(count = 0; count < 1; count++){
									 	 //navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
									 //}
								
									 //setInterval(function() {
									 	//navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
										navigator.geolocation.watchPosition(showLocation, errorHandler, options);
										
									 	//var test11 = navigator.geolocation.watchPosition(showLocation, errorHandler, options);
										//alert(test11);
										
									 //}, 5000);

											 
											
							} else {
								 alert("Sorry, browser does not support geolocation!");
							}
							
	
});






$("#btn-pause").click(function(){
	
	//change pause/start button classes
	$('.btn-pause').fadeOut(0);
	$('.btn-start').fadeIn(50);
	$('.status').fadeOut(0);
	
	//Save active track to Local Storage
	localStorage.setItem("trackActivity", JSON.stringify(0));
											
	navigator.geolocation.clearWatch(watchID);

});







//test connectivity

var connectivity = require('connectivity')
 
connectivity(function (online) {
  if (online) {
		$('#no-connectivity').hide();
		$('#yes-connectivity').show();
  } else {
		$('#yes-connectivity').hide();
		$('#no-connectivity').show();
  }
})
