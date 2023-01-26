navigator.geolocation.getCurrentPosition(
  //suceess callback
  (pos) => {
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
    window.open(
      `http://maps.google.com/maps?q=${pos.coords.latitude}${pos.coords.longitude}`,
      `_self` //open in the same page
    );
  },
  //failuar callback
  (err) => {
    switch (err.code) {
      case err.PERMISSION_DENIED:
        alert("permission denied");
        break;
      case err.TIMEOUT:
        alert("it tooke alonge time");
        break;
      case err.UNKNOWN_ERROR:
        alert("unknown error occured");
        break;
    }
  }
);
