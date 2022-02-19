const IIFEDOM = (() => {

    function privateAttribute(url, id){
        id.setAttribute("src", url);
    }
    
    //clausuras
    return {
        publicAttribute(url, id){
            privateAttribute(url, id);
        }, 
    };
})();


class Multimedia{
    constructor(url){
        this.url = url;
    }

    get getterURL(){
        return this.url
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video"
    }
}

class Reproductor extends Multimedia{
    constructor(url, id){
        super(url)
        this._id = id
    }

    playMultimedia() {
        IIFEDOM.publicAttribute(this.getterURL, this._id)
    }
    setInicio(tiempo) {
        IIFEDOM.publicAttribute(`${this.getterURL}?start=${tiempo}`, this._id)
    }
}

const btnMusica = document.querySelector("#btnMusica")
const btnPeliculas = document.querySelector("#btnPeliculas")
const btnSeries = document.querySelector("#btnSeries")
const videoMusica = document.querySelector("#videoMusica")
const videoPelicula = document.querySelector("#videoPelicula")
const videoSeries = document.querySelector("#videoSeries")

btnMusica.addEventListener("click", () => {
    //Instancia objeto Reproductor
    const videoUno = new Reproductor("https://www.youtube.com/embed/OyyD0QKxTU4", videoMusica);
    
    videoMusica.setAttribute("src",videoUno.url)
    
    videoUno.playMultimedia();

    videoUno.setInicio(30);

});

btnPeliculas.addEventListener("click", () => {
    //Instancia objeto Reproductor
    const videoDos = new Reproductor("https://www.youtube.com/embed/-1Y9OqSJKCc", videoPelicula);
    
    videoPelicula.setAttribute("src",videoDos.url)


    videoDos.playMultimedia();

    videoDos.setInicio(50);
    
})

btnSeries.addEventListener("click", () => {
    //Instancia objeto Reproductor
    const videoTres = new Reproductor("https://www.youtube.com/embed/WM6TPcxOTqs", videoSeries);
   
    videoSeries.setAttribute("src",videoTres.url)
    
    videoTres.playMultimedia();
   
    videoTres.setInicio(100);
})


