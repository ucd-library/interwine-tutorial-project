// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

//import { LitElement, html } from './lit-element/lit-element';

// Extend the LitElement base class
class MyElement extends LitElement {

    /*
        Implement `render` to define a template for your element.

        You must provide an implementation of `render` for any element 
        taht uses LitElement as a base class
    */
    render() {
        /*
            `render` must return a lit-html `TemplateResult`.

            To create a `TemplateResult`, tag a Javascript template literal
            with the `html` helper function:
        */
       return html`<p>A paragraph</p>`;
    }

}

// Register new element with the browser
customElements.define('my-element', MyElement);