class CustomProductItem extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const productItemTittle = this.getAttribute('data-text');
    const productItemImage = this.getAttribute('data-src');

    this.shadowRoot.innerHTML = `
        <style>
            div {
                display: flex;
                flex-direction: column;
                width: 250px;
                height: 328px;
                justify-content: center;
                align-items: center;
            }

            img {
                width: 130px;
                height: 130px;
            }
        </style>

        <div>
            <img src="${productItemImage}" alt="card-image">
            <h1>${productItemTittle}</h1>
            <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        </div>
    `;
  }
}

customElements.define('custom-product-item', CustomProductItem);