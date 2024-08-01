import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.Select;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.File;

public class SeleniumTest {
    private WebDriver webDriver;
   // private WebDriverWait wait;
    private String path;
    
    @BeforeEach
    public void setUp() {
     
        
        System.setProperty("webdriver.chrome.driver", "driver/chromedriver");//linux_64
       
        // Get file
        File file = new File("src/main/java/com/revature/index.html");
        path = "file://" + file.getAbsolutePath();

        // Create a new ChromeDriver instance
        ChromeOptions options = new ChromeOptions();
        options.addArguments("headless");
        webDriver = new ChromeDriver(options);
        
        // EdgeOptions options = new EdgeOptions();
        // options.addArguments("headless");
        // webDriver = new EdgeDriver(options);

        // Open the HTML file
        webDriver.get(path);
    }
    
    @AfterEach
    public void tearDown() {
        webDriver.quit();
    }

    //  @Test
    // public void testDefaultValues() {
    //     webDriver.get(path);
    //     submitForm();
    //     String results = webDriver.findElement(By.id("results")).getText();
    //     assertTrue(results.contains("num == false: true"));
    //     assertTrue(results.contains("num === 0: true"));
    //     assertTrue(results.contains("str != \"\": false"));
    //     assertTrue(results.contains("obj !== null: true"));
    //     assertTrue(results.contains("arr.length > 0 && obj: false"));
    //     assertTrue(results.contains("bool || !bool: true"));
    //     assertTrue(results.contains("!!num: false"));
    //     assertTrue(results.contains("!!str: false"));
    //     assertTrue(results.contains("!!obj: true"));
    //     assertTrue(results.contains("!!arr: true"));
    //     assertTrue(results.contains("!!bool: true"));
    //     assertTrue(results.contains("!!nullUndef: false"));
    // }

    // @Test
    // public void testNonEmptyValues() {
    //     webDriver.get(path);
    //     webDriver.findElement(By.id("number")).clear();
    //     webDriver.findElement(By.id("number")).sendKeys("5");
    //     webDriver.findElement(By.id("string")).sendKeys("test");
    //     new Select(webDriver.findElement(By.id("object"))).selectByValue("nonempty");
    //     new Select(webDriver.findElement(By.id("array"))).selectByValue("nonempty");
    //     submitForm();
    //     String results = webDriver.findElement(By.id("results")).getText();
    //     assertTrue(results.contains("num == false: false"));
    //     assertTrue(results.contains("num === 0: false"));
    //     assertTrue(results.contains("str != \"\": true"));
    //     assertTrue(results.contains("obj !== null: true"));
    //     assertTrue(results.contains("arr.length > 0 && obj: true"));
    //     assertTrue(results.contains("!!num: true"));
    //     assertTrue(results.contains("!!str: true"));
    // }

    // @Test
    // public void testNullAndUndefined() {
    //     webDriver.get(path);
    //     new Select(webDriver.findElement(By.id("nullUndefined"))).selectByValue("null");
    //     submitForm();
    //     String results = webDriver.findElement(By.id("results")).getText();
    //     assertTrue(results.contains("!!nullUndef: false"));

    //     webDriver.get(path);
    //     new Select(webDriver.findElement(By.id("nullUndefined"))).selectByValue("undefined");
    //     submitForm();
    //     results = webDriver.findElement(By.id("results")).getText();
    //     assertTrue(results.contains("!!nullUndef: false"));
    // }

    // private void submitForm() {
    //     webDriver.findElement(By.cssSelector("button[type='submit']")).click();
    // }

     @Test
    public void testEqualityCheck() {
        setInputValues(0, "", "empty", "empty", "false", "null");
        clickCheckButton();
        String result = getResultText();
        Assertions.assertTrue(result.contains("num is falsy (coercion)"));
    }
    
    @Test
    public void testStrictEqualityCheck() {
        setInputValues(0, "", "empty", "empty", "false", "null");
        clickCheckButton();
        String result = getResultText();
        Assertions.assertTrue(result.contains("num is strictly equal to 0"));
    }
    
    @Test
    public void testInequalityCheck() {
        setInputValues(0, "", "empty", "empty", "false", "null");
        clickCheckButton();
        String result = getResultText();
        Assertions.assertTrue(result.contains("str is falsy (coercion)"));
    }
    
    @Test
    public void testStrictInequalityCheck() {
        setInputValues(0, "", "empty", "empty", "false", "null");
        clickCheckButton();
        String result = getResultText();
        Assertions.assertTrue(result.contains("obj is not null"));
    }
    
    @Test
    public void testLogicalANDCheck() {
        setInputValues(0, "", "empty", "empty", "false", "null");
        clickCheckButton();
        String result = getResultText();
        Assertions.assertTrue(result.contains("At least one is falsy"));
    }
    
    @Test
    public void testLogicalORCheck() {
        setInputValues(0, "", "empty", "empty", "true", "null");
        clickCheckButton();
        String result = getResultText();
        Assertions.assertTrue(result.contains("At least one boolean is true"));
    }
    
    @Test
    public void testNullTruthinessCheck() {
        setInputValues(0, "", "empty", "empty", "false", "null");
        clickCheckButton();
        String result = getResultText();
        Assertions.assertTrue(result.contains("nullUndef is falsy"));
    }
    
    @Test
    public void testUndefinedTruthinessCheck() {
        setInputValues(0, "", "empty", "empty", "false", "undefined");
        clickCheckButton();
        String result = getResultText();
        Assertions.assertTrue(result.contains("nullUndef is falsy (negation)"));
    }
    
    private void setInputValues(int number, String string, String object, String array, String bool, String nullUndef) {
        webDriver.findElement(By.id("number")).clear();
        webDriver.findElement(By.id("number")).sendKeys(String.valueOf(number));
        webDriver.findElement(By.id("string")).clear();
        webDriver.findElement(By.id("string")).sendKeys(string);
        new Select(webDriver.findElement(By.id("object"))).selectByValue(object);
        new Select(webDriver.findElement(By.id("array"))).selectByValue(array);
        new Select(webDriver.findElement(By.id("boolean"))).selectByValue(bool);
        new Select(webDriver.findElement(By.id("nullUndefined"))).selectByValue(nullUndef);
    }
    
    private void clickCheckButton() {
        webDriver.findElement(By.cssSelector("button[type='submit']")).click();
    }
    
    private String getResultText() {
        return webDriver.findElement(By.id("results")).getText();
    }
}

