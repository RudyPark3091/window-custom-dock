document.addEventListener("onkeydown", (e) => {
    if (e.altKey && e.keyCode === 115) {
        e.stopPropatagion();
        return false;
    } else if (e.ctrlKey && e.keyCode === 87) {
        e.stopPropatagion();
        return false;
    }
});
