function goBack() {
    window.location.hash = window.location.lasthash[window.location.lasthash.length-1];
    //blah blah blah
    window.location.lasthash.pop();
}

window.onhashchange = function() {
    if (window.innerDocClick) {
        window.innerDocClick = false;
    } else {
        if (window.location.hash != '#undefined') {
            goBack();
        } else {
            history.pushState("", document.title, window.location.pathname);
            location.reload();
        }
    }
}