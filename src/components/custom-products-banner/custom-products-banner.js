class CustomProductsBanner extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {

    this.shadowRoot.innerHTML = `
        <style>
            section {
                width: 100;
                height: auto;
                justify-items: center;
                padding: 180px 140px 180px 140px
            }

            div {
                display: flex;
                gap: 125px;
            }
        
        </style>

        <section>
            <div>
                <custom-product-item data-src="/main/src/icons/product-item-image-first.png" data-text = "Product design"></custom-product-item>
                <custom-product-item data-src="/main/src/icons/product-item-image-second.png" data-text = "Art direction"></custom-product-item>
                <custom-product-item data-src="/main/src/icons/product-item-image-third.png" data-text = "Visual design"></custom-product-item>
            </div>
        </section>
    `;
  }
}

customElements.define('custom-products-banner', CustomProductsBanner);