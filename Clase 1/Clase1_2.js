function calcular_bono(monto, porc, x) {
    if (porc === void 0) { porc = 10; }
    if (x == undefined)
        x = false;
    if (monto > 1000)
        return monto += monto * porc / 100;
    else
        return monto;
}
var a;
var b;
var c;
a = calcular_bono(1500);
b = calcular_bono(1500, 20);
c = calcular_bono(1500, 25, true);
console.log("El valor de a es " + a);
console.log("El valor de b es " + b);
console.log("El valor de c es " + c);
