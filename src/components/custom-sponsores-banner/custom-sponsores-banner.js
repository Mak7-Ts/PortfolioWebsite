class CustomSponsoresBanner extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const behanceIcon = "/src/icons/Behance-icon.png"
    const googleIcon = "/src/icons/Google-icon.png"
    const appleIcon = "/src/icons/Apple-icon.png"
    const dribbbleIcon = "/src/icons/Dribbble-icon.png"
    const awwwardsIcon = "/src/icons/Awwwards-icon.png"

    const altBehanceIcon = "behance-Icon";
    const altGoogleIcon = "Google-icon"
    const altAppleIcon = "Apple-icon"
    const altDribbbleIcon = "Dribbble-icon"
    const altAwwwardsIcon = "Awwwards-icon"

    this.behanceIcon = behanceIcon;
    this.googleIcon = googleIcon;
    this.appleIcon = appleIcon;
    this.dribbbleIcon = dribbbleIcon;
    this.awwwardsIcon = awwwardsIcon;

    this.altBehanceIcon = altBehanceIcon;
    this.altGoogleIcon = altGoogleIcon;
    this.altAppleIcon = altAppleIcon;
    this.altDribbbleIcon = altDribbbleIcon;
    this.altAwwwardsIcon = altAwwwardsIcon;
    
    this.shadowRoot.innerHTML = `
        <style>
            section{
                width: 100;
                height: 167px;
                justify-items: center;
                align-content: center;
            }

            div {
                width: 80%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-top: 1px solid #1a1a1aff;  
                border-bottom: 1px solid #1a1a1aff;  
            }

            img {
                height: 100;
            }
        </style>

        <section>
            <div>
                <img src=${this.behanceIcon} alt=${this.altBehanceIcon}>
                <img src=${this.googleIcon} alt=${this.altGoogleIcon}>
                <img src=${this.appleIcon} alt=${this.altAppleIcon}>
                <img src=${this.dribbbleIcon} alt=${this.altDribbbleIcon}>
                <img src=${this.awwwardsIcon} alt=${this.altAwwwardsIcon}>
            </div>
        </section>
    `;
  }
}

customElements.define('custom-sponsores-banner', CustomSponsoresBanner);