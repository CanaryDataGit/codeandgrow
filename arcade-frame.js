class ArcadeFrame extends HTMLElement {
  connectedCallback() {
    const code = this.getAttribute("data-code");
    this.innerHTML = code;
  }
}
customElements.define('arcade-frame', ArcadeFrame);
