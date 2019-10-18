//package config;
//
//import com.sun.org.slf4j.internal.Logger;
//import com.sun.org.slf4j.internal.LoggerFactory;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//
///**
// * Created by : Rookie Joker
// * Created on : 17 - 10 - 2019 : 11:05
// */
//
//public class WebDriverConfig {
//
//    private static Logger logger = LoggerFactory.getLogger(WebDriverConfig.class);
//    private static WebDriverConfig instance = new WebDriverConfig();
//    private static WebDriver driver;
//    public static boolean isFailed = false;
//    private static final Thread CLOSE_THREAD = new Thread() {
//        /** If this program is started by executing junit class, the value of directory should be null.
//         * When the program is started by executing junit class, whether the execution succeeds or fails,
//         * the browser will be closed in the end. When the program is started by executing feature files,
//         * if the execution fails, the browser will not be closed in the end.
//         */
//        @Override
//        public void run() {
//            String directory = System.getProperty("org.jetbrains.run.directory");
//            System.out.println("directory: " + directory);
//            if(directory == null || !isFailed){
//                driver.quit();
//            }
//        }
//    };
//
//    private WebDriverConfig() {
//    }
//
//    public static WebDriverConfig getInstance() {
//        return instance;
//    }
//
//    private void setDriver(){
//        Runtime.getRuntime().addShutdownHook(CLOSE_THREAD);
//        System.setProperty("webdriver.chrome.driver",  "src/main/resources/driver/chromedriver.exe");
//        driver = new ChromeDriver();
//        driver.manage().window().maximize();
////        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
////        MyRemoteWebDriver.writeSessionAndUrl((RemoteWebDriver) driver);
//    }
//
//    public WebDriver getDriver() {
////        if(driver == null && TestConfig.isOpenBrowser()){
////            if(TestConfig.isDebug()){
////                driver = MyRemoteWebDriver.getDriver();
////            }else {
////                instance.setDriver();
////            }
////        }
//
//        if(driver == null ){
////            if(TestConfig.isDebug()){
////                driver = MyRemoteWebDriver.getDriver();
////            }else {
//                instance.setDriver();
////            }
//        }
//        return driver;
//    }
//}
