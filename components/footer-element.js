class FooterElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
    <link 
            rel="preload" 
            href="../src/style.css" 
            as="style"
        >
        <link rel="stylesheet" href="../src/style.css" defer>
        
      <footer class="footerSection">
            <div class="footerBlurElement"></div>
            <div class="footerContainer">
                <div class="footerLogo">

                    <a href="/" rel="noreferrer">
                        <img
                            loading="lazy"
                            src="../src/assets/logos/compelling_truth_logo.svg"
                            alt=""
                            class="compTruthLogo"
                        >
                    </a>
                </div>
                <div class="footerLinks">
                    <ul>
                        <li>
                            <a href="url_for_topics">topics</a>
                        </li>
                        <li>
                            <a href="url_for_faith">faith</a>
                        </li>
                        <li>
                            <a href="url_for_new">new</a>
                        </li>
                    </ul>
                    <ul>    
                        <li>
                            <a href="url_for_guides">guides</a>
                        </li>
                        <li>
                            <a href="url_for_about">about</a>
                        </li>
                        <li>
                            <a href="url_for_donate">donate</a>
                        </li>
                    </ul>
                </div>
                <div class="footerImageWrapper">
                    <img
                        loading="lazy" 
                        src="../src/assets/images/placeholder_img.png" 
                        alt="footer image"
                    >
                </div>
            </div>
            </div>
        </footer>
    `;
  }


}

customElements.define('footer-element', FooterElement);