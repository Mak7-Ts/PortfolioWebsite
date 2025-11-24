class CustomWorkCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const cardTittle = this.getAttribute('data-tittle');
    const cardImgPath = this.getAttribute('data-src');
    const cardDescr = this.getAttribute('data-descr')


    this.shadowRoot.innerHTML = `
        <style>
            div {
                display: flex;
                flex-direction: column;
                width: 315px;
                height: 407px;
                justify-content: center;
            }

            h1 {
                font-size: 20px;
            }
        </style>

        <div>
            <img src=${cardImgPath} alt="work-card">
            <h1>${cardTittle}</h1>
            <p>${cardDescr}</p>
        </div>
    `;
  }
}

customElements.define('custom-work-card', CustomWorkCard);