function cameraGetPicture() {
    navigator.camera.getPicture(imageReceived, cameraFail, {
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    allowEdit: false,
    correctOrientation: false,
    targetWidth: 150,
    targetHeight: 150,
    saveToPhotoAlbum: false
    });
  }

 function imageReceived(imageURI) {
     //Cambiar la imagen de la pantalla
    var path="file:///storage/emulated/0/Android/data/com.example.shotThemAll/cache/";
    //var nombre=imageURI-path;
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
    out = '<li><img src="'+imageURI+'"><h2>'+cortaNombre()+'</h2></li>';
    document.getElementById("listPhotos1").innerHTML += out;
    $("#listPhotos1").listview("refresh"); //Para refrescar el css; Importante llamar dsp de la inicializacion
  }

  function cameraFail(message) {
    alert("Camera error: " + message);
  } 
     
     

function loadFiles(){
    document.getElementById("listPhotos2").innerHTML = "";
    $("#listPhotos2").listview("refresh"); //Para refrescar el css; Importante llamar dsp de la inicializacion
    var path0="file:///storage/emulated/0/Android/data/com.example.shotThemAll/cache/";
     listDir(path0); 
}

function listDir(path){
  window.resolveLocalFileSystemURL(path,
    function (fileSystem) {
      var reader = fileSystem.createReader();
      reader.readEntries(
        function (entries) {
            //alert(cordova.file.applicationDirectory); // file:///android_asset/
            for(i=0;i<entries.length;i++){
                //alert(JSON.stringify(entries[i])); //json con todos los objetos
                var myName = JSON.stringify(entries[i].name);
                var myURL = JSON.stringify(entries[i].nativeURL);
                myFunction(myName,myURL);
            }
        },
        function (err) {
        console.log(err);
        }
      );
    }
    );
}

function myFunction(name,url) {
        
        var out1;
        var i;
        if(name!=null){
            out1 = '<li><img src='+ url +' class="imagenes"><h2 class="conlis">'+ name +'</h2></li>';  
            document.getElementById("listPhotos2").innerHTML += out1;
            $("#listPhotos2").listview("refresh"); //Para refrescar el css; Importante llamar dsp de la inicializacion
        }else{
            document.getElementById("listPhotos2").innerHTML = "No hay resultados para la busqueda en esa carpeta;";
            $("#listPhotos2").listview("refresh"); //Para refrescar el css; Importante llamar dsp de la inicializacion
        }  
}