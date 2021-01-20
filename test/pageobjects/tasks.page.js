const { waitElementForDisplayed } = require('./home.page');
const Page = require('./page');


class TasksPage extends Page {

    get postTaskButton() { return $("a*= Post task")};
    get postTaskHeading() { return $("//div[@role='complementary']//h1")};
    get taskTitleInput() { return $("#contract")};
    get taskCategoryInput() { return $("#mat-chip-list-input-0")};
    get taskDescriptionInput() { return $("(//textarea[contains(@placeholder, 'Describe your ')])[1]")};
    get categoryProposal() { return $("//span[contains(text(), 'Electrical and Wiring Repair')]")};
    get nextButton() { return $("//button[contains(text(), ' Next ')]")};
    get nextButtonLocation() { return $("(//button[contains(text(), ' Next ')])[2]")};
    get nextButtonBudget() { return $("(//button[contains(text(), ' Next ')])[3]")};
    get remotelyRadioButton() { return $("//label[@for='stepWork1']")};
    get createTaskButton() { return $("//button[contains(text(), 'Post Task')]")};
    get successModal() { return $("//section[@id='acceptModal']//p")};
    get confirmButtonSuccessModal() { return $("//button[contains(text(), 'Ok')]")};


    clickOnPostTask() {
        this.waitElementForDisplayed(this.postTaskButton);
        this.postTaskButton.click();
    }

    getPostTaskHeading(){
        this.browserPause(1000)
        this.waitElementForDisplayed(this.postTaskHeading);
        return this.postTaskHeading.getText();
    }



    populateTaskBasicInfo(title, category, description) {
        this.waitElementForDisplayed(this.taskTitleInput);
        this.taskTitleInput.setValue(title);
        this.taskCategoryInput.setValue(category);
        this.waitElementForDisplayed(this.categoryProposal);
        this.categoryProposal.click();
        this.taskDescriptionInput.setValue(description);
        this.waitElementIsEnabled(this.nextButton);
        this.nextButton.click();
    }

    selectTaskLocation() {
        waitElementForDisplayed(this.remotelyRadioButton);
        this.remotelyRadioButton.scrollIntoView(false);
        this.remotelyRadioButton.click();
        this.waitElementIsEnabled(this.nextButtonLocation);
        this.nextButtonLocation.click();
    }

    clikOnBudgetNextButton() {
        waitElementForDisplayed(this.nextButtonBudget);
        this.nextButtonBudget.scrollIntoView(false);
        this.nextButtonBudget.click();
    }

    createNewTask(title, category, description) {
        this.populateTaskBasicInfo(title, category, description);
        this.selectTaskLocation();
        this.clikOnBudgetNextButton();
        this.createTaskButton.scrollIntoView();
        this.waitElementIsEnabled(this.createTaskButton);
        this.createTaskButton.click();
    }

    getSucessMessage(){
        this.browserPause(1000);
        waitElementForDisplayed(this.successModal);
        return this.successModal.getText();
    }

    closeSuccessModal(){
        this.browserPause(1000);
        this.confirmButtonSuccessModal.click();
    }

}

module.exports = new TasksPage();