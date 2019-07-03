import { LitElement, property } from 'lit-element';
import render from "./my-element.tpl.js"


export default class MyElement extends LitElement {

  static get properties() {
    return {
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.foo = 'foo';
  }

}

customElements.define('my-element', MyElement);
