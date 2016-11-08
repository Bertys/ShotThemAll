function cameraGetPicture() {
    navigator.camera.getPicture(imageReceived, cameraFail, {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      allowEdit: false,
      correctOrientation: true,
      targetWidth: 600,
      saveToPhotoAlbum: false
    });
  }

 function imageReceived(imageURI) {
     //Cambiar la imagen de la pantalla
    alert(imageURI);
    var path="file:///storage/emulated/0/Android/data/com.example.shotThemAll/cache/";
     var nombre=imageURI-path;
    var out;

     
     
function cortaNombre() {
    var path0="file:///storage/emulated/0/Android/data/com.example.shotThemAll/cache/";
    var path1=imageURI;
    var i;
    var pat="";
    for(i = path0.length; i < path1.length; i++) {
        pat += path1[i];
    }
    return pat;
}
    out = '<li><img src="'+imageURI+'"><h2>Nombre: '+cortaNombre()+'</h2></li>';
    document.getElementById("listPhotos").innerHTML += out;
    $("#listPhotos").listview("refresh"); //Para refrescar el css; Importante llamar dsp de la inicializacion
  }

  function cameraFail(message) {
    alert("Camera error: " + message);
  }