class Cuenta{
    //asignacion de atributos
  tipo_cuenta
  tipo_moneda
  nombre
  numero_cuenta
  #saldo //asignando atributos privados
  #pin

  //metodo constructor => inicialisamos los atributos del objeto
  constructor(nombre, tipoCuenta, tipoMoneda, numeroCuenta) {
    this.nombre = nombre;
    this.tipo_cuenta = tipoCuenta;
    this.tipo_moneda = tipoMoneda;
    this.numero_cuenta = numeroCuenta;
  }


  //creando metodos get y set para el atributo saldo
  //capturamos el saldo
  set CapturarSaldo(cantidad) {
    //20
    //el this hace referencia a atributos y metodos
    this.saldo = cantidad;
  }
  get imprimirSaldo() {
    return "abirste tu cuenta con $" + this.#saldo;
  }
  set capturarPin(pin) {
    this.#pin = pin;
  }
  get imprimirPin() {
    return "tu Pin es" + this.#pin
  }
  //metodo para validar el doposito
  depositar(cantidad) {
    //depositar de 1.00 en adelante, maximo son 3000
    if(cantidad >= 1 && cantidad <= 3000){
      this.#saldo += cantidad;
      return "deposito $ " + cantidad + ", tu saldo actual es de $" + this.#saldo;
    } else {
      return "por favor depositar entre $1.00 a $3,000";
    }
  }
  //metodo para retornar toda la informacion de la cuenta
  resumen() {
    return "<b>Nombre de propietario</b> " + this.nombre + "<br><b>numero de cuenta<b> " + this.numero_cuenta + "<br><b>numero de moneda<b> " + this.tipo_moneda + "<br><b>tipo de cuenta<b> " + this.tipo_cuenta;
  }
}

//instancia: es el llamado de la clase
let cuenta1 = new Cuenta("fran", "cuenta de ahorro", "local");
console.log(cuenta1);
document.write(cuenta1.resumen());
document.write("<br>")
//llamando el metodo set de saldo
cuenta1.CapturarSaldo = 50;
//imprimiendo en html el metodo get
document.write(cuenta1.imprimirSaldo);
document.write("<br>");
document.write(cuenta1.depositar(230.50));

let cuenta2 = new Cuenta();
