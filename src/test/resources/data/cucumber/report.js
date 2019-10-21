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
        "19.5"
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
  "duration": 17195624100,
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
  "duration": 1000411200,
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
  "duration": 1124470200,
  "status": "passed"
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
  "duration": 1105488500,
  "status": "passed"
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
  "duration": 7025892400,
  "status": "passed"
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
  "duration": 2036626700,
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
  "duration": 6181224200,
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
  "duration": 1000038300,
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
  "duration": 1144702100,
  "status": "passed"
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
  "duration": 1136058400,
  "status": "passed"
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
  "duration": 2365324200,
  "status": "passed"
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
  "duration": 2035425700,
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
  "duration": 4385011100,
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
  "duration": 999335700,
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
  "duration": 1108899700,
  "status": "passed"
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
  "duration": 1117350900,
  "status": "passed"
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
  "duration": 22783992000,
  "status": "passed"
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
  "duration": 2073305800,
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
  "duration": 26773964200,
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
  "name": "The value of BMI should be equals \"19.5\"#BMI",
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
  "duration": 1000505900,
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
  "duration": 1105720400,
  "status": "passed"
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
  "duration": 1090940500,
  "status": "passed"
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
  "duration": 8238500000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19.5",
      "offset": 35
    }
  ],
  "location": "CucumberTest.theValueOfBMIShouldBeEqualsBMI(String)"
});
formatter.result({
  "duration": 2032874800,
  "status": "passed"
});
});