const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const TasksPage = require('../pageobjects/tasks.page');
const Credentials = require('../../data/credentials');
const TaskInfo = require('../../data/task-info');

describe('Creating new tasts in Electrical and Wiring Repair Category', () => {

    beforeEach(()=>{
        HomePage.open("/");
        HomePage.navigateToLogIn();
        LoginPage.login(Credentials.email,Credentials.password);
    })

    afterEach(()=>{
        HomePage.logout();
    })
       

    it('login then create new task and verify task is added ', () => {
        TasksPage.clickOnPostTask();
        expect(TasksPage.getPostTaskHeading()).toContain("Post Task");
        TasksPage.createNewTask(TaskInfo.title, TaskInfo.category, TaskInfo.description);
        expect(TasksPage.getSucessMessage()).toContain("Task Posted Successfully!");
        TasksPage.closeSuccessModal();
    });
});