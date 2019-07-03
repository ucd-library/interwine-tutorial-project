import { LitElement } from 'lit-element';
import render from "./my-new-element.tpl.js"


export default class MyNewElement extends LitElement {

  static get properties() {
    return {
      
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('my-new-element', MyNewElement);
