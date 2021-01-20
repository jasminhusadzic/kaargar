/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(path)
    }

    waitElementForDisplayed(element){
        element.waitForDisplayed({
            timeout: 25000,
            timeoutMsg: "Nema ga medjede"
        });
    }

    waitElementIsEnabled(element){
        element.waitForEnabled({
            timeout: 25000,
            timeoutMsg: "Nema ga medjede"
        })
    }

    browserPause(duration){
        browser.pause(duration);
    }

}
