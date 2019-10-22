package com.cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
/**
 * Created by : Rookie Joker
 * Created on : 16 - 10 - 2019 : 16:25
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources/feature/"},
        format = {"pretty", "html:target/cucumber", "json:target/cucumber/cucumber.json"},
        glue = {"com.cucumber"}
)

public class RunCukesTest {
}
