class ArcadeFrame extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const container = document.createElement('div');
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.overflow = 'hidden';

    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('allowtransparency', 'true');
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('frameborder', '0');

    const projectUrl = this.getAttribute('project-url') || '';
    iframe.src = projectUrl;

    container.appendChild(iframe);
    shadow.appendChild(container);
  }
}

customElements.define('arcade-frame', ArcadeFrame);
