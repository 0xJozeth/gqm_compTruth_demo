class HeaderElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <link 
            rel="preload" 
            href="../src/style.css" 
            as="style"
        >
        <link rel="stylesheet" href="../src/style.css">

        <style>
            .searchAndDropdownWrapper {
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                gap: .25rem;
            }

            .searchbarWrapperNav {
                align-items: center;
                gap: 1rem;
                z-index: 2;
                transition: all 0.5s ease;
            }


            .searchbarContainerNav{
                display: none;
            }

            @media screen and (min-width: 768px) {
                .searchbarContainerNav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.25rem;
                    width: 100%;
                    height: 40px;
                    max-width: 326px;
                    margin: 0 auto;
                    width: auto;
                    gap: 1rem;
                    border-radius: 0.25rem;
                    background-color: #fff;
                    transition: all 0.5s ease;
                    overflow: hidden;
                }
            }

            .seachbarNavIconImg {
                width: 16px;
                height: 16px;
            }

            @media screen and (min-width: 768px) {
                .seachbarNavIconImg {
                    width: 1.25rem;
                }
            }

            .searchbarIconNav {
                line-height: 0;
                font-size: 1.5rem;
                color: #333;
                margin: 0;
                padding: 0;
            }

            .searchbarButtonNav {
                background-color: #EC7140;
                border: none;
                aspect-ratio: 1;
                border-radius: 0.25rem;
                padding: .25rem;
                color: #fff;
                font-size: 1rem;
                outline: none; 
                cursor: pointer;
                text-transform: uppercase;
            }

            .searchbarInputNav {
                border: none;
                padding: 0.625rem 0;
                color: #7D565F;
                width: 100%;
                max-height: 30px;
                font-size: 1.125rem;
            }

            .searchIconNav {
                    padding-left: 1rem;
            }

            .searchbarIconWrapperNav {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #EC7140;
                padding: .625rem;
                width: 36px;
                height: 36px;
                border-radius: .25rem;
                margin-inline-start: 1rem;
                cursor: pointer;
            }

            @media screen and (min-width: 768px) {
                .searchbarIconWrapperNav {
                    width: 36px;
                    height: 36px;
                    display: none;
                }
            }

            .darkenMenuButton {
                filter: contrast(1.15);
            }

            nav ul li img.menuFaith {
                margin-right: .475rem;
            }


            
        </style>
      
      <header class=${this.isOnHomePage() ? `siteHeaderHomeSection` : `siteHeaderNotHomeSection`}>
            <div class="siteHeaderContainer">
                <a href="/">
                    <img
                        loading="lazy" 
                        id="compTruthLogo" 
                        src="../src/assets/logos/compelling_truth_logo.svg" 
                        alt="CompTruth Logo"
                        class="compTruthLogo"
                    >
                </a>
                <nav>
                    <ul class="dropdownMenu">
                        <li> 
                            <a href="/" aria-label="Home">
                                <img
                                    loading="lazy" 
                                    id="menuHome" 
                                    src="../src/assets/images/menuIcons/menuHome.png" 
                                    alt="home"
                                    class="menuIcons GodIcon"
                                >
                                home
                            </a>
                        </li>
                        <li>
                            
                            <a href="/" aria-label="Most Recent">
                                <img
                                    loading="lazy" 
                                    id="menuMostRecent" 
                                    src="../src/assets/images/menuIcons/menuMostRecent.png" 
                                    alt="most recent"
                                    class="menuIcons"
                                > 
                                most recent</a>
                        </li>
                        <li>
                             
                            <a href="/" aria-label="Topics">
                                <img
                                    loading="lazy" 
                                    id="menuTopics" 
                                    src="../src/assets/images/menuIcons/menuTopics.png" 
                                    alt="topics"
                                    class="menuIcons"
                                >
                                topics</a>
                        </li>
                        <li>
                            
                            <a href="/" aria-label="Faith Icon">
                                <img
                                    loading="lazy" 
                                    id="menuFaith" 
                                    src="../src/assets/images/menuIcons/menuFaith.png" 
                                    alt="faith"
                                    class="menuIcons menuFaith"
                                >
                                faith</a>
                        </li>
                        <li>
                            
                            <a href="/" aria-label="About">
                                <img
                                    loading="lazy" 
                                    id="menuAbout" 
                                    src="../src/assets/images/menuIcons/menuAbout.png" 
                                    alt="about"
                                    class="menuIcons"
                                >
                                about</a>
                        </li>
                        <li>
                            <a href="/" aria-label="Donate">
                                <img
                                    loading="lazy" 
                                    id="menuDonate" 
                                    src="../src/assets/images/menuIcons/menuDonate.png" 
                                    alt="donate"
                                    class="menuIcons"
                                >
                                donate</a>
                        </li>
                    </ul>
                </nav>
                <div class="searchAndDropdownWrapper">
                    ${!this.isOnHomePage() ? `
                    <div class="searchbarWrapperNav">
                        <div id="searchbarContainerNav" class="searchbarContainerNav hide-mobile">
                            <div
                                id="searchbarIconNav"
                                class="searchbarIconNav"
                                aria-hidden="true"
                            >
                                <img
                                    loading="lazy"
                                    src="../src/assets/images/magnifying_glass_dark.webp"
                                    alt="search icon dark"
                                    class="searchIconNav"
                                >
                            </div>
                            <input
                                type="text"
                                id="searchbarInputNav"
                                class="searchbarInputNav"
                                placeholder="Search..."
                            >
                            <div id="searchbarButtonContainer">
                                <button class="searchbarButtonNav">go</button>
                            </div>
                        </div>
                    </div>
                    <div class="searchbarIconWrapperNav">
                        <img src="../src/assets/images/magnifying_glass_white.webp" alt="white" class="seachbarNavIconImg">
                    </div>
                    ` : ''}
                    <div class="hamburgerMenuWrapper">
                        <div class="burgerMenu ${!this.isOnHomePage() ? 'darkenMenuButton' : ''}">
                            <div class="burgerLine topAnimation"></div>
                            <div class="burgerLine middleAnimation"></div>
                            <div class="burgerLine bottomAnimation"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `;
  }

  // critical for conditional rendering
  isOnHomePage() {
    const path = window.location.pathname;
  return path === '/' || path === '/index.html';
  }
}

customElements.define('header-element', HeaderElement);