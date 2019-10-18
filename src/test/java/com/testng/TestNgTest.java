package com.testng;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;


/**
 * Created by : Rookie Joker
 * Created on : 15 - 10 - 2019 : 10:59
 */

public class TestNgTest {

    private static WebDriver driver;

    @BeforeClass
    public void setDriver() throws InterruptedException{
        //设置并打开浏览器
        System.setProperty("Webdriver.chrome.driver", "src/main/resources/driver/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        Thread.sleep(2000);
    }


    private Object[][] excelReader(String filePath) throws IOException {

        File file = new File(filePath);
        FileInputStream fileInputStream = new FileInputStream(file);
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);
        XSSFSheet sheet = workbook.getSheet("Sheet1");

        int rowNum = sheet.getPhysicalNumberOfRows();
        int columNum = sheet.getRow(0).getPhysicalNumberOfCells();

        Object[][] dataObj = new Object[rowNum][columNum];
        for(int i=0;i<rowNum;i++) {
            for (int h = 0; h < columNum; h++) {
                sheet.getRow(i).getCell(h).setCellType(Cell.CELL_TYPE_STRING);
                dataObj[i][h] = sheet.getRow(i).getCell(h).getStringCellValue();
            }
        }
        workbook.close();
        return dataObj;
    }


    @AfterClass
    public void closeDriver() throws InterruptedException{
        //关闭浏览器
        Thread.sleep(2000);
        driver.quit();
    }

    @Test(dataProvider = "data-provider")
    public void bmiTest(String height, String weight, String bmiValue) throws InterruptedException{

        //输入网址"http://cn.onlinebmicalculator.com/"
        driver.get("http://cn.onlinebmicalculator.com/");
        Thread.sleep(2000);

        //输入查询内容“banana”,点击搜索
        driver.findElement(By.name("f_height")).clear();
        driver.findElement(By.name("f_height")).sendKeys(height);
        Thread.sleep(1000);

        driver.findElement(By.name("f_weight")).clear();
        driver.findElement(By.name("f_weight")).sendKeys(weight);
        Thread.sleep(1000);

        driver.findElement(By.name("f_submit")).click();
        Thread.sleep(1000);

        Assert.assertEquals(driver.findElement(By.xpath("//*[@id=\"bt\"]/div[3]/div[1]/div[2]/p/span")).getText(),bmiValue);
        Thread.sleep(1000);
    }

    //测试方法的数据源
    @DataProvider(name="data-provider")
    public Object[][] rangeData() throws IOException {
        return excelReader("C:\\Jason_Xu\\Autotest\\AutotestSelenium\\src\\test\\resources\\data\\MBITest.xlsx");
//        return new Object[][]
//        {
//            {"180", "60", "18.5"},
//            {"180", "70", "21.6"},
//            {"170", "65", "22.5"},
//            {"160", "50", "19.5"}
//        };
    }
}
