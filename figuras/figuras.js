//clase padre
class figura{
    calcularArea() {
        return "calcular el area de las figuras geometricas";
    }
}
//clases hijas => palabras reservadas extends
class Cuadrado extends figura{
  //lado * lado
  //constructor => inicializando el objeto
  capturandoLado(lado) {
    this.lado = lado;
  }
  //sobreescribir el metodo
  calcularArea(){
    this.lado *= this.lado;
    return "el area del cuadro es " + this.lado;
    }
}
class Triangulo extends figura {
  base
  altura

  capturarValores(base, altura) {
    this.base = base;
    this.altura = altura;
  }
  //sobre escribiendo el metodo
  calcularArea() {
    let area = (this.base * this.altura) / 2;
    return "el area del triangulo es " + area;
  }
}
class Circulo extends figura {

}
//instanciando(llamando clase) una clase hija.
document.write("<h1>comportamiento del padre</h1>");
let circulo = new Circulo();
document.write(circulo.calcularArea());
document.write("<h1> cambiando el comprotamiento del padre</h1>");
let cuadro = new Cuadrado();
cuadro.capturandoLado(6);
document.write(cuadro.calcularArea());
document.write("<h1>cambiando comportamiento del padre</h1>");
let triangulo = new Triangulo();
triangulo.capturarValores(8, 23);
document.write(triangulo.calcularArea());