class CustomWorksBanner extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {

    this.shadowRoot.innerHTML = `
        <style>
            section {
                width: 100;
                justify-items: center;
            }

            section > div div{
                display: flex;
                gap: 68px;
                margin-top: 60px;
            }

        </style>

        <section>
            <h1>My latest work</h1>
            <div>
                <div>
                    <custom-work-card data-tittle = "Free Bird" data-src = "/src/images/works-image-first.png" data-descr = "Lynyrd Skynyrd"></custom-work-card>
                    <custom-work-card data-tittle = "Purpule Haze" data-src = "/src/images/works-image-second.png" data-descr = "Jimi Hendrix"></custom-work-card>
                    <custom-work-card data-tittle = "You Really Got Me" data-src = "/src/images/works-image-third.png" data-descr = "The Kinks"></custom-work-card>
                </div>
                <div>
                    <custom-work-card data-tittle = "American Girl" data-src = "/src/images/works-image-fourth.png" data-descr = "Tom Petty"></custom-work-card>
                    <custom-work-card data-tittle = "Whole Lotta Love" data-src = "/src/images/works-image-fifth.png" data-descr = "Led Zeppelin"></custom-work-card>
                    <custom-work-card data-tittle = "Under Pressure " data-src = "/src/images/works-image-sixth.png" data-descr = "Queen"></custom-work-card>
                </div>
            </div>
        </section>
    `;
  }
}

customElements.define('custom-works-banner', CustomWorksBanner);