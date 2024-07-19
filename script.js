// Select the header
document.addEventListener('DOMContentLoaded', () => {
    const headerElement = document.querySelector('header-element').shadowRoot;

    const hamburgerMenu = headerElement.querySelector('.burgerMenu');
    const dropdownMenu = headerElement.querySelector('.dropdownMenu');

    function toggleMenu() {
        dropdownMenu.classList.toggle('showMenu');
        hamburgerMenu.classList.toggle('animate');
    }

    hamburgerMenu.addEventListener('click', (event) => {
        event.preventDefault();
        toggleMenu();
    });

    document.addEventListener('click', (event) => {
        if (!event.composedPath().includes(headerElement) && dropdownMenu.classList.contains('showMenu')) {
            dropdownMenu.classList.remove('showMenu');
        }
    });
});
/* END OF DROPDOWN MENU */


///////////////
///////////////

/* this piece of code changes the class of the clicked item to 'selected' so that the 'the truth about' options has the background color updated. It also defines and updates the categoryName dynamically */
document.addEventListener('DOMContentLoaded', function() {
    // we only want this code to run on the homepage so first check if the current URL is the homepage
    const isHomepage = window.location.pathname === '/' || window.location.pathname === '/index.html';

    if (isHomepage) {
    const items = document.querySelectorAll('.theTruthAboutSelectionsMobile li, .theTruthAboutSelectionsDesktopButtons');
    const categoryLinks = document.querySelectorAll('.theTruthAboutCategoriesWrapper a');
    const categoryNameElement = document.querySelector('.theTruthAboutCategoriesHeading h2');
    const categoryIcon = document.querySelector('.theTruthAboutCategoriesHeader img');
    const defaultCategoryName = "Select a category";
    const categoryIcons = {
        'God': '../src/assets/images/truthAboutIcons/truthAboutGod.png',
        'Creation': '../src/assets/images/truthAboutIcons/truthAboutCreation.png',
        'Fall': '../src/assets/images/truthAboutIcons/truthAboutFall.png',
        'Redemption': '../src/assets/images/truthAboutIcons/truthAboutRedemption.png',
        'Restoration': '../src/assets/images/truthAboutIcons/truthAboutRestoration.png',    
    };

     /* Function to update the category name and icon */
    function updateCategory(categoryName) {
        categoryNameElement.textContent = categoryName;
        const iconPath = categoryIcons[categoryName] || categoryIcons['God'];
        categoryIcon.src = iconPath;
    }

    items.forEach(item => {
        item.addEventListener('click', function() {
            items.forEach(item => item.classList.remove('selected'));
            this.classList.add('selected');
            /* this updates the categoryName based on the selected item's text */
            const categoryName = this.textContent.trim(); 
            updateCategory(categoryName);
        });
    });

    /* we needed a default here or it'll render the template literal for categoryName as plain text */
    categoryNameElement.textContent = defaultCategoryName;

    /* making sure the category selected changes color */
    categoryLinks.forEach(link => {
            link.addEventListener('click', function() {
                categoryLinks.forEach(link => link.classList.remove('selected'));
                this.classList.add('selected');
            });
    });
}});
/* End of the Truth About section mapping */
///////////////

/* Start of recent articles mapping */
document.addEventListener('DOMContentLoaded', function() {
    // again, we only want this code to run on the homepage so first check if the current URL is the homepage
    const isHomepage = window.location.pathname === '/' || window.location.pathname === '/index.html';


    const recentArticlesContentWrapper = document.getElementById('recentArticlesContentWrapper');

    const articles = [
        {
            title: "Which parts of the Bible apply to us today?",
            description: "Every part of the Bible is still as valid as it was when it was written, revealing who He is, what His plan is, and how we are to follow.",
            image: "" 
        },
        {
            title: "Who was Esther in the Bible?",
            description: "Esther was a Jewish young woman who became Queen of Persia. Her bravery and wisdom saved the Jews from annihilation.",
            image: ""
        },
        {
            title: "Why did Jesus ask the rich young ruler about obeying the commandments?",
            description: "The rich young ruler challenges us to prioritize a relationship with Christ over material possessions.",
            image: ""
        },
        // Add more articles here
    ];

    if (isHomepage) {
    articles.forEach((article, index) => {
    const articleContentInnerWrapperDiv = document.createElement('div');
    articleContentInnerWrapperDiv.classList.add('articleContentInnerWrapper');
    
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('recentArticle');



    const articleImageDiv = document.createElement('div');
    articleImageDiv.classList.add('recentArticleImage');
    articleImageDiv.style.backgroundImage = `url(${article.image})`;

    const articleTitleDiv = document.createElement('div');
    articleTitleDiv.classList.add('recentArticleTitle');
    const articleTitle = document.createElement('h3');
    articleTitle.textContent = article.title;
    articleTitleDiv.appendChild(articleTitle);

    const articleDescriptionDiv = document.createElement('div');
    articleDescriptionDiv.classList.add('recentArticleDescription');
    const articleDescription = document.createElement('p');
    articleDescription.textContent = article.description;
    articleDescriptionDiv.appendChild(articleDescription);

    articleDiv.appendChild(articleContentInnerWrapperDiv);
    articleDiv.appendChild(articleTitleDiv);
    articleDiv.appendChild(articleDescriptionDiv);
    
    
    articleContentInnerWrapperDiv.appendChild(articleImageDiv);
    
    // add the articleDiv to the wrapper in each iteration using appendChild
    recentArticlesContentWrapper.appendChild(articleContentInnerWrapperDiv);
    articleContentInnerWrapperDiv.appendChild(articleDiv);
    
    });
}});
/* End of article mapping */

///////////////
///////////////

/* Start of recent guides mapping */
// this is just some sample data for recent guides, we can pull this from a db or CMS
const recentGuides = [
    {
        image: "../src/assets/images/Guide_img_1.webp",
        marquee: "the guide to",
        marqueeHeading: "women in the new testament",
        links: [
            { text: "Who was Mary Magdalene in the Bible?", url: "#" },
            { text: "Who were Lois & Eunice in the Bible?", url: "#" },
            { text: "Who was Lydia in the Bible?", url: "#" },
            { text: "Who was Joanna in the Bible?", url: "#" },
            { text: "Who was Mary of Bethany in the Bible?", url: "#" }
        ]
    },
    // can either add guide objects here or pull from a db
    {
        image: "../src/assets/images/Guide_img_2.webp",
        marquee: "the guide to",
        marqueeHeading: "Consequences of Sin",
        links: [
            { text: "If we are born in sin, how is it fair for God to judge us?", url: "#" },
            { text: "The consequences of sin- what are they?", url: "#" },
            { text: "All have sinned- what does that mean?", url: "#" },
            { text: "Are all sins equal?", url: "#" },
            { text: "Does God punish sin?", url: "#" }
        ]
    },
    {
        image: "../src/assets/images/Guide_img_3.webp",
        marquee: "the guide to",
        marqueeHeading: "Apologetics of the Bible",
        links: [
            { text: "Has the Bible been corrupted, changed, or tampered with?", url: "#" },
            { text: "Are there errors in the Bible?", url: "#" },
            { text: "What does it mean for the Bible to be infallible?", url: "#" },
            { text: "How is the Bible inspired?", url: "#" },
            { text: "Is the Bible reliable?", url: "#" }
        ]
    },
];

// HTML structure first
function createGuideHtml(guide) {
    const guideHtml = `
        <div id="recentGuide" class="recentGuide">
            <div id="recentGuideImageWrapper" class="recentGuideImageWrapper">
                <div id="recentGuideImageMarquee" class="recentGuideImageMarquee">
                    <h2>${guide.marquee}</h2>
                </div>
                <div id="recentGuideImageMarqueeHeading" class="recentGuideImageMarqueeHeading">
                    <h2>${guide.marqueeHeading}</h2>
                </div>
                <img 
                    src="${guide.image}" 
                    id="recentGuideImage" 
                    class="recentGuideImage" 
                    alt="${guide.marqueeHeading}"
                >
            </div>
            <div id="recentGuideLinks" class="recentGuideLinks">
                <ul>
                    ${guide.links.map(link => `<li><a href="${link.url}">${link.text}</a></li>`).join('')}
                </ul>
            </div>
            <div id="recentGuideButtons" class="recentGuideButtons">
                <a href="/content/article.html" rel="noreferrer noopener" class="recentGuideReadButton">read guide</a>
                <a href="/content/article.html" rel="noreferrer noopener" class="recentGuideShareButton">share</a>
            </div>
        </div>
    `;
    return guideHtml;
}

// locate the container element
const recentGuidesContentWrapper = document.getElementById('recentGuidesContentWrapper');

// we only want this code to run on the homepage so first check if the current URL is the homepage
const isHomepage = window.location.pathname === '/' || window.location.pathname === '/index.html';

if (isHomepage) {
recentGuidesContentWrapper.innerHTML = recentGuides.map(createGuideHtml).join('');
}
/* End of recent guides mapping */

///////////////
///////////////

/* Start of the compelling truth section mapping */
function createCompellingTruthCard(card) {
    return `
        <div class="useCompellingTruthCard">
            <div class="useCompellingTruthCardImage">
                <img src="${card.image}" alt="">
                <div class="useCompellingTruthCardTitle">
                    <h2>${card.title}</h2>
                </div>
            </div>
        </div>
    `;
}

// sample data
const compellingTruthCards = [
    {
        image: 'src/assets/images/comp_truth_1.webp',
        title: 'for personal <br><span>bible study</span>',
    },
    {
        image: 'src/assets/images/comp_truth_2.webp',
        title: 'with your <br><span>small group</span>',
    },
    {
        image: 'src/assets/images/comp_truth_3.webp',
        title: 'bringing others <br><span>to christ</span>',
    }
];

// get the container element
const useCompellingTruthCardsWrapper = document.querySelector('.useCompellingTruthCardsWrapper');

if (isHomepage) {
useCompellingTruthCardsWrapper.innerHTML = compellingTruthCards.map(createCompellingTruthCard).join('');
}