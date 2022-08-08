Aquí esta detallada la lógica del proyecto

# Inicio
Para el inicio del programa, este deberá de ver si existe alguna canción cargada en la lista de reproducción, en el caso de no a ver ninguna lista cargada, este deberá cambiar la información del la canción en la interfaz del usuario por la información de espera, si hay alguna canción cargada, deberá comprobar si en la propiedad src de la etiqueta audio hay alguna canción de la lista de reproducción y cambiar la información de la canción en la interfaz de usuario en el caso de que sea cierto sino volver a poner la información de espera.

por lo que tenemos las primeras funciones:


## checkPlaylist(); 
Devolverá true o false dependiendo de si hay o no canciones cargadas en la playlist.


## checkAudioSrc();
Devolverá true o false si existe alguna canción cargada en la propiedad src de la etiqueta audio de html5 `audio.src`.


## changeUIInfo(info == false);
Cambiará la información de la canción en la interfaz de usuario,

si el valor de info es falso, es decir que no se le ha pasado ninguna información mostraremos la información de espera, que esta constará de imagen del avatar del canal, 
como nombre de la canción y nombre del album pasaremos el texto de ninguna canción cargada en el reproductor.

pero si el valor de info es true, obtendremos la información de la función `getCurrentSongInfo()`, mostrando imagen de canción cargada y el nombre y album de la canción cargada.


## getCurrentSongInfo()
devolverá un array con la información del archivo cargado en el DOM correspondiente al nombre del archivo cargado en el DOM alojado en el array currentPlaylist = [].

la información se obtendrá del nombre del archivo el cual deberá estar formateado de la siguiente manera `album - nombre_de_la_canción.mp3` separando esta con el carácter '-'.

en el caso de dar error devolverá un false como respuesta.


# Botón play
Al hacer click en el botón de play, se tiene que comprobar que hallan canciones en la lista de reproducción con la función `checkPlaylist();`
en el caso de verdadera pasaremos a comprobar si hay cargada en la propiedad src de la etiqueta audio con al función `checkAudioSrc();` si no hay ninguna canción cargada, ejecutaremos la función `playSong();`
si no hay ninguna canción en la lista de reproducción lanzaremos la función `addSongsToPlaylist();`


## addSongsToPlaylist();
Al ejecutarse lanzará la propiedad click del input tipo file del DOM `input.click();` con esta propiedad ejecutaremos la ventana emergente para seleccionar los archivos de audio que serán añadidos al DOM del reproductor.


## Evento de escucha en el input type file
Para detectar cuando se han subido los archivos al DOM usaremos la propiedad `addEventListener("change", ...`, una vez dentro este evento capturara en la variable files la propiedad del input 'file' obteniendo los archivos que se han subido, que nos devuelve un objeto FileList, con las propiedades name, lastModified, size y type por cada elemento.

ahora ejecutaremos la función createBlob(files); pasándole la variable files, esta función nos devolverá un listado con las urls de los archivos, que añadiremos al array playlist = [];


## createBlob(files);
comprobara el tamaño de files si es mayor que 0, recorrerá cada uno de los elementos, usando el metido URL.createObjetcURL(file) y añadiendo el resultado a un array que devolverá. creando una url válida de los elementos del DOM pasados, para poder trabajar con ellos desde la etiqueta audio.

## playSong();
