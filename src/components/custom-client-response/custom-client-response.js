class CustomClientResponse extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const userComment = this.getAttribute('data-comment');
    const userImgPath = this.getAttribute('data-src');
    const userName = this.getAttribute('data-name')


    this.shadowRoot.innerHTML = `
        <style>
            .card {
                width: 315px;
                height: 344px;
                border: 1px solid #FFD285;
                background-color: #FFFCF5;
            }

            .comment {
                padding: 30px;
            }

            .bottom {
                display: flex;
                margin-top: 80px;
            }

            .user-image {
                height: 50px;
            }
            
            .name {
                margin-left: 20px;
            }

            p:first-child {
                font-size: 20px;
                font-weight: bold;
            }

        </style>

        <div class = "card">
            <div class = "comment">
                <p>${userComment}</p>
                <div class = "bottom">
                    <img class = "user-image"src=${userImgPath} alt="client">
                    <div class = "name">
                        <img src="/main/src/icons/Rate stars.png" alt="Rate">
                        <p>${userName}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
  }
}

customElements.define('custom-client-response', CustomClientResponse);