$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BMI.feature");
formatter.feature({
  "line": 2,
  "name": "BMI #BMI",
  "description": "",
  "id": "bmi-#bmi",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BMI"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "BMI Test",
  "description": "",
  "id": "bmi-#bmi;bmi-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am in \"http://cn.onlinebmicalculator.com/\" page#BMI",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I key in \"\u003cheight\u003e\" height#BMI",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I key in \"\u003cweight\u003e\" weight#BMI",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click \"计算BMI\" button#BMI",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "The value of BMI should be equals \"\u003cbmiValues\u003e\"#BMI",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "bmi-#bmi;bmi-test;",
  "rows": [
    {
      "cells": [
        "height",
        "weight",
        "bmiValues"
      ],
      "line": 13,
      "id": "bmi-#bmi;bmi-test;;1"
    },
    {
      "cells": [
        "180",
        "60",
        "18.5"
      ],
      "line": 14,
      "id": "bmi-#bmi;bmi-test;;2"
    },
    {
      "cells": [
        "180",
        "70",
        "21.6"
      ],
      "line": 15,
      "id": "bmi-#bmi;bmi-test;;3"
    },
    {
      "cells": [
        "170",
        "65",
        "22.5"
      ],
      "line": 16,
      "id": "bmi-#bmi;bmi-test;;4"
    },
    {
      "cells": [
        "160",
        "50",
        "19.6"
      ],
      "line": 17,
      "id": "bmi-#bmi;bmi-test;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am at \"http://cn.onlinebmicalculator.com/\" #BMI",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cn.onlinebmicalculator.com/",
      "offset": 9
    }
  ],
  "location": "CucumberTest.iAmAtBMI(String)"
});
formatter.result({
  "duration": 14121236400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "BMI Test",
  "description": "",
  "id": "bmi-#bmi;bmi-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@BMI"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am in \"http://cn.onlinebmicalculator.com/\" page#BMI",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I key in \"180\" height#BMI",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I key in \"60\" weight#BMI",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click \"计算BMI\" button#BMI",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "The value of BMI should be equals \"18.5\"#BMI",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cn.onlinebmicalculator.com/",
      "offset": 9
    }
  ],
  "location": "CucumberTest.iAmInPageBMI(String)"
});
formatter.result({
  "duration": 1000511800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "180",
      "offset": 10
    }
  ],
  "location": "CucumberTest.iKeyInHeightBMI(String)"
});
formatter.result({
  "duration": 66063200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027f_height\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.120)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027GZCDC101292\u0027, ip: \u002710.202.163.235\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.120, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\HAITAO~1.XU\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:54830}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 99194cd8d7a37cb96fd77794a2871eb6\n*** Element info: {Using\u003dname, value\u003df_height}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.cucumber.CucumberTest.iKeyInHeightBMI(CucumberTest.java:76)\r\n\tat ✽.And I key in \"180\" height#BMI(BMI.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 10
    }
  ],
  "location": "CucumberTest.iKeyInWeightBMI(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "计算BMI",
      "offset": 9
    }
  ],
  "location": "CucumberTest.iClickButtonBMI(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "18.5",
      "offset": 35
    }
  ],
  "location": "CucumberTest.theValueOfBMIShouldBeEqualsBMI(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 395681000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am at \"http://cn.onlinebmicalculator.com/\" #BMI",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cn.onlinebmicalculator.com/",
      "offset": 9
    }
  ],
  "location": "CucumberTest.iAmAtBMI(String)"
});
formatter.result({
  "duration": 2466097700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "BMI Test",
  "description": "",
  "id": "bmi-#bmi;bmi-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@BMI"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am in \"http://cn.onlinebmicalculator.com/\" page#BMI",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I key in \"180\" height#BMI",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I key in \"70\" weight#BMI",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click \"计算BMI\" button#BMI",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "The value of BMI should be equals \"21.6\"#BMI",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cn.onlinebmicalculator.com/",
      "offset": 9
    }
  ],
  "location": "CucumberTest.iAmInPageBMI(String)"
});
formatter.result({
  "duration": 999547900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "180",
      "offset": 10
    }
  ],
  "location": "CucumberTest.iKeyInHeightBMI(String)"
});
formatter.result({
  "duration": 20337800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027f_height\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.120)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027GZCDC101292\u0027, ip: \u002710.202.163.235\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.120, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\HAITAO~1.XU\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:54830}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 99194cd8d7a37cb96fd77794a2871eb6\n*** Element info: {Using\u003dname, value\u003df_height}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.cucumber.CucumberTest.iKeyInHeightBMI(CucumberTest.java:76)\r\n\tat ✽.And I key in \"180\" height#BMI(BMI.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 10
    }
  ],
  "location": "CucumberTest.iKeyInWeightBMI(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "计算BMI",
      "offset": 9
    }
  ],
  "location": "CucumberTest.iClickButtonBMI(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "21.6",
      "offset": 35
    }
  ],
  "location": "CucumberTest.theValueOfBMIShouldBeEqualsBMI(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 369361200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am at \"http://cn.onlinebmicalculator.com/\" #BMI",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cn.onlinebmicalculator.com/",
      "offset": 9
    }
  ],
  "location": "CucumberTest.iAmAtBMI(String)"
});
formatter.result({
  "duration": 2710247200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "BMI Test",
  "description": "",
  "id": "bmi-#bmi;bmi-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@BMI"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am in \"http://cn.onlinebmicalculator.com/\" page#BMI",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I key in \"170\" height#BMI",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I key in \"65\" weight#BMI",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click \"计算BMI\" button#BMI",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "The value of BMI should be equals \"22.5\"#BMI",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cn.onlinebmicalculator.com/",
      "offset": 9
    }
  ],
  "location": "CucumberTest.iAmInPageBMI(String)"
});
formatter.result({
  "duration": 999702700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "170",
      "offset": 10
    }
  ],
  "location": "CucumberTest.iKeyInHeightBMI(String)"
});
formatter.result({
  "duration": 39133300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027f_height\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.120)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027GZCDC101292\u0027, ip: \u002710.202.163.235\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.120, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\HAITAO~1.XU\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:54830}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 99194cd8d7a37cb96fd77794a2871eb6\n*** Element info: {Using\u003dname, value\u003df_height}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.cucumber.CucumberTest.iKeyInHeightBMI(CucumberTest.java:76)\r\n\tat ✽.And I key in \"170\" height#BMI(BMI.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "65",
      "offset": 10
    }
  ],
  "location": "CucumberTest.iKeyInWeightBMI(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "计算BMI",
      "offset": 9
    }
  ],
  "location": "CucumberTest.iClickButtonBMI(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "22.5",
      "offset": 35
    }
  ],
  "location": "CucumberTest.theValueOfBMIShouldBeEqualsBMI(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 364142700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am at \"http://cn.onlinebmicalculator.com/\" #BMI",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cn.onlinebmicalculator.com/",
      "offset": 9
    }
  ],
  "location": "CucumberTest.iAmAtBMI(String)"
});
formatter.result({
  "duration": 2285645600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "BMI Test",
  "description": "",
  "id": "bmi-#bmi;bmi-test;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@BMI"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am in \"http://cn.onlinebmicalculator.com/\" page#BMI",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I key in \"160\" height#BMI",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I key in \"50\" weight#BMI",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click \"计算BMI\" button#BMI",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "The value of BMI should be equals \"19.6\"#BMI",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cn.onlinebmicalculator.com/",
      "offset": 9
    }
  ],
  "location": "CucumberTest.iAmInPageBMI(String)"
});
formatter.result({
  "duration": 1001003300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "160",
      "offset": 10
    }
  ],
  "location": "CucumberTest.iKeyInHeightBMI(String)"
});
formatter.result({
  "duration": 34999300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027f_height\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.120)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027GZCDC101292\u0027, ip: \u002710.202.163.235\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.120, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\HAITAO~1.XU\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:54830}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 99194cd8d7a37cb96fd77794a2871eb6\n*** Element info: {Using\u003dname, value\u003df_height}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.cucumber.CucumberTest.iKeyInHeightBMI(CucumberTest.java:76)\r\n\tat ✽.And I key in \"160\" height#BMI(BMI.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 10
    }
  ],
  "location": "CucumberTest.iKeyInWeightBMI(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "计算BMI",
      "offset": 9
    }
  ],
  "location": "CucumberTest.iClickButtonBMI(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "19.6",
      "offset": 35
    }
  ],
  "location": "CucumberTest.theValueOfBMIShouldBeEqualsBMI(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 387290500,
  "status": "passed"
});
});