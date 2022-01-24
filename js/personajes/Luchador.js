import Personaje from "./Personaje";

export default class Luchador extends Personaje {
  arma;
  destreza;

  constructor(
    nombreLuchador,
    familiaLuchador,
    edadLuchador,
    armaLuchador,
    valorDestreza
  ) {
    super(nombreLuchador, familiaLuchador, edadLuchador);
    this.arma = armaLuchador;
    this.destreza = this.filtraDestreza(valorDestreza);
  }

  // eslint-disable-next-line class-methods-use-this
  filtraDestreza(valorDestreza) {
    if (valorDestreza < 0) {
      return 0;
    }
    if (valorDestreza > 10) {
      return 10;
    }
    return valorDestreza;
  }

  comunicar() {
    return `${super.comunicar()}Primero pego y luego pregunto`;
  }
}
