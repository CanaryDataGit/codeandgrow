class ArcadeFrame extends HTMLElement {
  constructor() {
    super();

    // Create a shadow DOM root
    const shadow = this.attachShadow({ mode: 'open' });

    // Create and style the container
    const container = document.createElement('div');
    Object.assign(container.style, {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    });

    // Create and style the iframe
    const iframe = document.createElement('iframe');
    Object.assign(iframe.style, {
      width: '100%',
      height: '100%',
      border: 'none',
    });
    iframe.allowFullscreen = true;

    // Get project URL from attribute and assign it to iframe
    const projectUrl = this.getAttribute('project-url');
    if (projectUrl) {
      iframe.src = projectUrl;
    } else {
      console.warn('ArcadeFrame: No project-url attribute found.');
    }

    // Build the shadow DOM structure
    container.appendChild(iframe);
    shadow.appendChild(container);
  }
}

// Register the custom element
customElements.define('arcade-frame', ArcadeFrame);
