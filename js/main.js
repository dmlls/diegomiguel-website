function runAnimation() {
    document.body.className = ""; // remove preload
    var hiddenElements = document.querySelectorAll('.hidden');
    var displayedElements = document.querySelectorAll('.displayed');
    if (hiddenElements.length) {
        for(var i = 0; i < hiddenElements.length; i++) {
            hiddenElements[i].classList.add('displayed');
            hiddenElements[i].classList.remove('hidden');
        }
    } else {
        for(var i = 0; i < displayedElements.length; i++) {
            displayedElements[i].classList.add('hidden');
            displayedElements[i].classList.remove('displayed');
        }

    }
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

var arrowFacingDown = document.querySelectorAll('.facing-down')[0];
var terminal = document.querySelectorAll('.terminal')[0];
terminal.addEventListener("click", runAnimation);
