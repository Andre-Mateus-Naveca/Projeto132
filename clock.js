function preload()
{
    img = loadImage("relogio.jpg");
}
function setup()
{
    canvas = createCanvas(640, 420)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}
function modelLoaded() {
    console.log("Modelo Carregado!")
    status1 = true;
    objectDetector.detect(img, gotResults)
}
function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function voltar()
{
    window.location = "index.html"
}