class CustomHeader extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const logoImage = "/main/src/icons/Logo.png";
    const alterLogoImage = "Logo";

    this.alterLogoImage = alterLogoImage;
    this.logoImage = logoImage;

    this.shadowRoot.innerHTML = `
        <style>
            header {
                display: flex;
                justify-content: space-between;
                width: 100%;
                height: auto;
            }

            div {
            margin: 25px 0 25px 50px;
            }

            ul {
                display: flex;
                list-style: none;
                padding: 0;
                margin: 0;
            }

            li {
                margin: 26px 50px 26px 0;
            }

            a {
                font-size: 17px;
                text-decoration: none;
                color: black;
            }

        </style>

        <header>
            <div>
                <img src= ${this.logoImage} alt= ${alterLogoImage}>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Work</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    `;
  }
}

customElements.define('custom-header', CustomHeader);