class CustomResponseBanner extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {


    this.shadowRoot.innerHTML = `
        <style>
            section {
                justify-items: center;
                padding: 100px;
            }

            .comments {
              display: flex;
              gap: 70px;
            }

            div:first-child {
              justify-items: center;
            }
        </style>

        <section>
            <div>
                <h1>Clients</h1>
                <div class = "comments">
                    <custom-client-response data-comment = "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com" data-src = "/main/src/images/client-first.png" data-name = "Gemma Nolen, Google"></custom-client-response>
                    <custom-client-response data-comment = "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com" data-src = "/main/src/images/client-second.png" data-name = "Gemma Nolen, Google"></custom-client-response>
                    <custom-client-response data-comment = "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com" data-src = "/main/src/images/client-third.png" data-name = "Gemma Nolen, Google"></custom-client-response>
                </div>
            </div>
        </section>
    `;
  }
}

customElements.define('custom-response-banner', CustomResponseBanner);