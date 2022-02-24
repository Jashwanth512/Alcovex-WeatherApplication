export function getUserLocation() {
    if (navigator.geolocation) {
      let res=navigator.geolocation.watchPosition(showPosition);
      console.log(res)
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
export function showPosition(position) {
  var lattitude,longiture;
    lattitude=position.coords.latitude;
    return(position.coords.longitude,position.coords.latitude);

  }