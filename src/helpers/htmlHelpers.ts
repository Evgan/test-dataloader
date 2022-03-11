
let scrollbarWidth:any = null;

// eslint-disable-next-line import/prefer-default-export
export const getScrollbarWidth = () => {
    if (scrollbarWidth) {
        return scrollbarWidth;
    }
    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    //outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);

    const inner = document.createElement('div');
    outer.appendChild(inner);

    scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
}
