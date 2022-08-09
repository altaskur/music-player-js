
# Inicio

Para el inicio del programa, este deberá de ver si existe alguna canción cargada en la lista de reproducción, en el caso de no a ver ninguna lista cargada, este deberá cambiar la información del la canción en la interfaz del usuario por la información de espera, si hay alguna canción cargada, deberá comprobar si en la propiedad src de la etiqueta audio hay alguna canción de la lista de reproducción y cambiar la información de la canción en la interfaz de usuario en el caso de que sea cierto sino volver a poner la información de espera.

por lo que tenemos las primeras funciones:

## checkPlaylist()

Devolverá true o false dependiendo de si hay o no canciones cargadas en la playlist.

## checkAudioSrc()

Devolverá true o false si existe alguna canción cargada en la propiedad src de la etiqueta audio de html5 `audio.src`.

## changeUIInfo(info == false)

Cambiará la información de la canción en la interfaz de usuario,

si el valor de info es falso, es decir que no se le ha pasado ninguna información mostraremos la información de espera, que esta constará de imagen del avatar del canal, como nombre de la canción y nombre del album pasaremos el texto de ninguna canción cargada en el reproductor.

pero si el valor de info es true, obtendremos la información de la función `getCurrentSongInfo()`, mostrando imagen de canción cargada y el nombre y album de la canción cargada.

## getCurrentSongInfo()

Devolverá un array con la información del archivo cargado en el DOM correspondiente al nombre del archivo cargado en el DOM alojado en el array currentPlaylist = [].

la información se obtendrá del nombre del archivo el cual deberá estar formateado de la siguiente manera `album - nombre_de_la_canción.mp3` separando esta con el carácter '-'.

en el caso de dar error devolverá un false como respuesta.

# Botón play

Comprobaremos si hay alguna canción cargada en el array playList[] con la función `checkPlaylist();` si hay canciones cargadas, ejecutaremos la función `playSong();`

si no hay ninguna canción en la lista de reproducción lanzaremos la función `addSongsToPlaylist();`

## addSongsToPlaylist()

Al ejecutarse lanzará la propiedad click del input tipo file del DOM `input.click();` con esta propiedad ejecutaremos la ventana emergente para seleccionar los archivos de audio que serán añadidos al DOM del reproductor.

## Evento de escucha en el input type file

Para detectar cuando se han subido los archivos al DOM usaremos la propiedad `addEventListener("change", ...`, una vez dentro este evento capturará en la variable files la propiedad del input 'file' obteniendo los archivos que se han subido, que nos devuelve un objeto FileList, con las propiedades name, lastModified, size y type por cada elemento.

ahora ejecutaremos la función createBlob(files); pasándole la variable files, esta función nos devolverá un listado con las urls de los archivos, que añadiremos al array `playlist = []` y estableceremos la variable ``currentSong`` en 0;

## createBlob(files)

Comprobara el tamaño de files si es mayor que 0, recorrerá cada uno de los elementos, usando el metido URL.createObjetcURL(file) y añadiendo el resultado a un array que devolverá. creando una url válida de los elementos del DOM pasados, para poder trabajar con ellos desde la etiqueta audio.

## playSong()

Al ejecutar esta función deberá comprobar si hay una canción en la propiedad de `audio.src` con la función `checkAudioSrc();`

si devuelve false, comprobamos la variable `currenSong` y cargamos en el audio src la canción del array `currentPlaylist` con la posición de currentSong y establecemos la variable `currentSong` en 0.

ahora comprobaremos si la canción cargada esta en pausa con la función ``isPaused()``;

si está parada cambiaremos el icono de play a pause, llamaremos a la función ``changeUIInfo(info == false)`` y usaremos la propiedad `audio.play();`

sino cambiaremos el icono de pause a play y usaremos la propiedad `audio.pause`

## isPaused()

Comprobamos audio.paused devuelve true si esta parada.

# Botón siguiente

Al pulsar el botón siguiente canción, se debe consultar la variable `currentSong` le sumamos uno y ejecutamos la función playSong().

# Botón anterior

Al pulsar el botón siguiente canción, se debe consultar la variable `currentSong` le quitamos uno y ejecutamos la función playSong().

# Botón aleatorio

Al pulsar el botón de aleatorio, lanzaremos `isShuffling()` esta en true, esconderemos el icono de debajo el botón aleatorio, y de lo contrario si está en false mostraremos el circulo debajo del icono aleatorio, después lanzamos la función ``shuffling()``.

## isShuffling()

comprobaremos la variable ``shuffle`` y devolveremos si esta en true o en false.

## shuffling()

Lanzamos la función isShuffling() si está en true, volcaremos los datos del array ``playlist`` en ``currentPlaylist`` de lo contrario copiaremos los datos del array ``playlist`` en ``shuffleList`` y en el array ``currentPlaylist``, pero desordenados aleatoriamente.

# Botón repetir

El botón repetir tendrá tres estados, repetir, repetir una y no repetir, asociado a la variable repeat, con los estados 0, 1 y 2,
de forma predeterminada está en 2.

comprobamos la variable repeat si esta 0 la ponemos en 1 y cambiamos el icono de repetir una, si esta en 1 la pasamos a dos y ponemos el icono de no repetir y si esta en 2 la ponemos en 0 y ponemos el icono de repetir.

# Botones de control

## Botón añadir canciones

Al hacer clic llamará a la función ``addSongsToPlaylist()``.

## Botón playList

Lanzará un modal, mostrando el contenido del array ``currentPlaylist``.
para ello le pasaremos los datos a la función showModal();

## Botón volume Min

Al pulsar sobre el botón mute comprobaremos si esta muted con la función ``isMuted()`` en caso de ser cierta
establecemos ``audio.muted= true``y habilitaremos el slider o ser falsa ``audio.muted = false`` y deshabilitar el slider.

## Botón volume Max

Al pulsar sobre el botón el volumen de la etiqueta audio se pondrá al 100 usando la función ``changeAudioVolume()``.

## Barra volumen

Al cambiar su posición deberá capturar su valor y pasarlo a la función ``changeAudioVolume()``.

## changeAudioVolume(volume = 50)

al ejecutarse deberá dividirse el valor entre 100 ya que audio.volume solo acepta valores de 0.0 a 1.0 y a su vez cambiar la barra de audio de posición.
