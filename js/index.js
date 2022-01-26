/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import ButtonComponent from "./Componentes/Button.js";
import Card from "./Componentes/Card.js";
import Component from "./Componentes/Component.js";

const mainPage = new Component(document.body, "main-page", "div");
const main = document.querySelector(".main-page");
const mainUl = new Component(main, "characters-list", "ul");
const ulList = document.querySelector("character-list");
const listCard1 = new Component(mainUl, "character col", "li");
const listCard2 = new Component(ulList, "character col", "li");
const listCard3 = new Component(ulList, "character col", "li");
const listCard4 = new Component(ulList, "character col", "li");

const card1 = new Card(listCard1, "character__card", img);
const card2 = new Card(listCard2, "character__card", img);
const card3 = new Card(listCard3, "character__card", img);
const card4 = new Card(listCard4, "character__card", img);

const talkButton = ButtonComponent(card, "character__action", "Habla", action);
const deathButton = ButtonComponent(card, "character__action", "Muere", action);
