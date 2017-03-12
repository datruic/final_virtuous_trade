var utag_resize,
    breakpoint = getBreakpoint(getWindowWidth());

function getWindowWidth() {
    if(typeof(window.innerWidth) == "number") {
        return window.innerWidth;
    } else if(document.documentElement && document.documentElement.clientWidth) {
        return document.documentElement.clientWidth;
    }
}

function getDisplay(width){

    if(width > 1024) return 'desktop';
    if(width > 768 && width <= 1024) return 'tablet';

    return 'smartphone';
}

function getBreakpoint(width){

    if(width > 480 && width <= 768) return 'm';
    if(width > 768 && width <= 1024) return 'l';
    if(width > 1024) return 'xl';

    return 's';
}

function getDevice(){
    var md = new MobileDetect(window.navigator.userAgent);

    if(md.mobile()==null) return 'desktop';
    if(md.tablet()!=null) return 'tablet';
    if(md.phone()!=null) return 'smartphone';

    return 'other';
}

function doneResizing(){
    var display = getDisplay(getWindowWidth()),
        current_breakpoint = getBreakpoint(getWindowWidth());

    if(typeof(utag_data)!="undefined"){
        if(current_breakpoint != breakpoint) {
            utag.view({displaytype: display});
            breakpoint = current_breakpoint;
        }
    }
}

window.onresize = function() {

    clearTimeout(utag_resize);
    utag_resize = setTimeout(doneResizing, 300);

}
