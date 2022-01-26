import Component from "./Component.js";

export default class Card extends Component {
  img;
  talkButton;
  deathButton;

  constructor(parentElement, className, img, talkButton, deathButton) {
    super(parentElement, className, "div");
    this.parentElement = parentElement;
    this.className = className;

    this.img = img;
    this.talkButton = talkButton;
    this.deathButton = deathButton;
  }
}
