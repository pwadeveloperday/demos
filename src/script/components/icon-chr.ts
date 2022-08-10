import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

@customElement('icon-chr')
export class IconChr extends LitElement {

  @property({ type: Boolean}) enableBack: boolean = false;
  @property({ type: String }) svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
    <path d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"/>
  </svg>
  `

  static get styles() {
    return css`
     svg {
      max-height: 18px; 
      display: inline-block;
      margin-bottom: -3px;
     }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
    ${unsafeHTML(this.svg)}
    `;
  }
}