class BreadcrumbElement extends HTMLElement {
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

        <section class="breadcrumbSection">
            <div class="breadcrumbContainer">
                <div class="breadcrumbWrapper">
                    <div class="breadcrumbIcon">
                        <img 
                            src="../src/assets/images/breadcrumb_home_icon.webp" 
                            alt="icon" 
                            class="breadcrumbHomeIcon"
                        >
                    </div>
                    <ul class="breadcrumbList"></ul>
                </div>
            </div>
        </section>
    `;}

 connectedCallback() {
    this.renderBreadcrumbs();
  }

  renderBreadcrumbs() {
    const breadcrumbList = this.shadowRoot.querySelector('.breadcrumbList');
    const pathArray = window.location.pathname.split('/').filter(part => part);
    

    let path = '';

    const breadcrumbItems = pathArray.map((part, index) => {
      path += `/${part}`;
      const legiblePart = this.capitalizeAndReplace(part);
      if (index === pathArray.length - 1) {
        return `<li>${legiblePart}</li>`;
      } else {
        return `<li><a href="${path}">${legiblePart}</a></li>`;
      }
    });

    breadcrumbList.innerHTML = breadcrumbItems.join('<span> <img src="../src/assets/images/breadcrumb_seperator.webp" alt="breadcrumb seperator" class="breadcrumbSeperatorIcon"> </span>');
  }

  capitalizeAndReplace(part) {
    // Replace hyphens with spaces and capitalize each word
    return part
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}

customElements.define('breadcrumb-element', BreadcrumbElement);