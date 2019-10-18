@BMI
Feature: BMI #BMI
  Background:
    Given I am at "http://cn.onlinebmicalculator.com/" #BMI

  Scenario Outline: BMI Test
    When I am in "http://cn.onlinebmicalculator.com/" page#BMI
    And I key in "<height>" height#BMI
    And I key in "<weight>" weight#BMI
    And I click "计算BMI" button#BMI
    Then The value of BMI should be equals "<bmiValues>"#BMI
   Examples:
    | height | weight | bmiValues |
    |180|60|18.5|
    |180|70|21.6|
    |170|65|22.5|
    |160|50|19.5|