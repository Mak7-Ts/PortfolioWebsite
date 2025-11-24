class CustomFaceBanner extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const logoImage = "/main/src/images/face-banner-image.png";
    const alterLogoImage = "face-banner-image";

    this.alterLogoImage = alterLogoImage;
    this.logoImage = logoImage;


    this.shadowRoot.innerHTML = `
        <style>
            section {
                width: 100;
                height: auto;
                padding: 100px
            }

            section > div {
                display: flex;
                justify-content: center;
                gap:100px;
                width: auto;
                height: auto;
            }
                
            .inside {

            }

            h2 {
                font-size:20px;
            }

            h1 {
                font-size: 80px;
            }

        </style>

        <section>
            <div>
                <div class = "inside">
                    <h2>Branding | Image making </h2>
                    <h1>My awesome <br> portfolio</h1>
                    <p>And I made it myself! Yes. In Figma with Anima</p>
                </div>
                <img src=${this.logoImage} alt=${this.alterLogoImage}>
            </div>
        </section>
    `;
  }
}

customElements.define('custom-face-banner', CustomFaceBanner);