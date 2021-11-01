function runAnimation() {
    document.body.className = ''; // remove preload
    var arrowFacingDown = document.querySelectorAll('.facing-down')[0];
    const hiddenElements = document.querySelectorAll('.row-hidden');
    const displayedElements = document.querySelectorAll('.row-displayed');
    hiddenElements.forEach((e) => {
        e.classList.add('row-displayed');
        e.classList.remove('row-hidden');
    });
    displayedElements.forEach((e) => {
        e.classList.add('row-hidden');
        e.classList.remove('row-displayed');
    });
    var arrowFacingDown = document.querySelectorAll('.facing-down');
    var arrowFacingUp = document.querySelectorAll('.facing-up');
    if (arrowFacingDown.length) {
        arrowFacingDown[0].classList.add('facing-up');
        arrowFacingDown[0].classList.remove('facing-down');
    } else {
        arrowFacingUp[0].classList.add('facing-down');
        arrowFacingUp[0].classList.remove('facing-up');
    }
}

function hideDisplayedRows() {
    const displayedElements = document.querySelectorAll('.row-displayed');
    displayedElements.forEach((e) => {
        e.classList.add('row-hidden');
        e.classList.remove('row-displayed');
    });
}

function tabSelected(event) {
    const displayedElements = document.querySelectorAll('.row-displayed');
    if (displayedElements.length) {
        runAnimation();
    }
    document.body.className = 'preload'; // avoid triggering animations
    var selectedTab = event.currentTarget;
    var selectedTabName = selectedTab.classList[1].split('-')[0];
    window.location.hash = selectedTabName;
    // Update border
    selectedTab.style.borderColor = '#ffffff70';
    const tabs = Array.from(selectedTab.parentNode.children);
    tabs.forEach((tab) => {
        if (tab !== selectedTab) {
            tab.style.borderColor = 'transparent';
        }
    });
    // Update content
    const sections = Array.from(document.querySelectorAll('.terminal')[0].children).slice(1);
    sections.forEach((s) => {
         if (s.classList[0] !== selectedTabName) {
            s.classList.add('section-hidden');
            s.classList.remove('section-displayed');
         } else {
            s.classList.add('section-displayed');
            s.classList.remove('section-hidden');
         }
    });
}

let terminal = document.querySelectorAll('.terminal > .terminal-row:last-child')[0];
terminal.addEventListener('click', runAnimation);

document.querySelectorAll('.terminal-tab').forEach(e => e.addEventListener('click', tabSelected));

// Allows to copy-paste the URL and go to the right section
if (window.location.hash !== '') {
    document.getElementsByClassName(window.location.hash.slice(1) + '-tab')[0].click();
}

// let educationTab = document.querySelectorAll('.terminal-tab:nth-child(1)')[0];
// educationTab.addEventListener('click', tabSelected);
