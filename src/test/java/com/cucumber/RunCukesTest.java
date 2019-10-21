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
        format = {"pretty", "html:src/test/resources/data/cucumber", "json:src/test/resources/data/cucumber/cucumber.json"},
        glue = {"com.cucumber"}
)

public class RunCukesTest {
}