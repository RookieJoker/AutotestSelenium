package com.cucumber;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;


/**
 * Created by : Rookie Joker
 * Created on : 16 - 10 - 2019 : 16:20
 */

public class CucumberTest {

    private static WebDriver driver;


    private static final Thread CLOSE_THREAD = new Thread() {
        /** If this program is started by executing junit class, the value of directory should be null.
         * When the program is started by executing junit class, whether the execution succeeds or fails,
         * the browser will be closed in the end. When the program is started by executing feature files,
         * if the execution fails, the browser will not be closed in the end.
         */
        @Override
        public void run() {driver.quit();}
    };

    public void setDriver () throws Throwable{
        //配置浏览器
        Runtime.getRuntime().addShutdownHook(CLOSE_THREAD);
        System.setProperty("Webdriver.chrome.driver", "src/main/resources/driver/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        Thread.sleep(2000);
    }

    @After
    public void embedScreenshot(Scenario scenario) {
        if(scenario.isFailed()){
            try {
                byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshot, "/image/png");
            } catch (WebDriverException somePlatformsDontSupportScreenshots) {
                System.err.println(somePlatformsDontSupportScreenshots.getMessage());
            }
        }
    }


    @Given("^I am at \"([^\"]*)\" #BMI$")
    public void iAmAtBMI(String arg0) throws Throwable{
        if(driver == null ) {setDriver();}
        //输入网址"http://cn.onlinebmicalculator.com/"
        driver.get(arg0);
        Thread.sleep(2000);
    }

    @When("^I am in \"([^\"]*)\" page#BMI$")
    public void iAmInPageBMI(String arg0) throws Throwable {
        Thread.sleep(1000);
    }

    @And("^I key in \"([^\"]*)\" height#BMI$")
    public void iKeyInHeightBMI(String arg0) throws Throwable {
        driver.findElement(By.name("f_height")).clear();
        driver.findElement(By.name("f_height")).sendKeys(arg0);
        Thread.sleep(1000);
    }

    @And("^I key in \"([^\"]*)\" weight#BMI$")
    public void iKeyInWeightBMI(String arg0) throws Throwable {

        driver.findElement(By.name("f_weight")).clear();
        driver.findElement(By.name("f_weight")).sendKeys(arg0);
        Thread.sleep(1000);
    }

    @And("^I click \"([^\"]*)\" button#BMI$")
    public void iClickButtonBMI(String arg0) throws Throwable {
        driver.findElement(By.name("f_submit")).click();
        Thread.sleep(1000);
    }

    @Then("^The value of BMI should be equals \"([^\"]*)\"#BMI$")
    public void theValueOfBMIShouldBeEqualsBMI(String arg0) throws Throwable {
        Assert.assertEquals(driver.findElement(By.xpath("//*[@id=\"bt\"]/div[3]/div[1]/div[2]/p/span")).getText(),arg0);
        Thread.sleep(2000);
    }
}
