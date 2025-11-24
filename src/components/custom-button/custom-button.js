class CustomButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const text = this.getAttribute('data-text');

    this.shadowRoot.innerHTML = `
      <div>
        <p>${text}<p>
      </div>
    `;
  }
}

customElements.define('custom-button', CustomButton);