var c:any = document.getElementById("canvas");
if (c!==undefined && c.getContext){
    console.log("El ancho del canvas es "+c.with)
    console.log("El alto del canvas es "+c.height)
    var context:CanvasRenderingContext2D=c.getContext("2d");
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(500,500);
    context.lineTo(0,500);
    context.closePath();
    context.fill();
    context.stroke();
}else
    console.log("No se pudo acceder al canvas")