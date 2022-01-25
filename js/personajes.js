import Asesor from "./personajes/Asesor";
import Escudero from "./personajes/Escudero";
import Luchador from "./personajes/Luchador";
import Rey from "./personajes/Rey";

const joffrey = new Rey("Joffrey", "Baratheon", 16, 2);
const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", 7);
const daenerys = new Luchador("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
const bronn = new Escudero("Bronn", "AguasNegras", 54, 0, jaime);

// eslint-disable-next-line no-unused-vars
const gotPersonajes = [joffrey, jaime, daenerys, tyrion, bronn];
