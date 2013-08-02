package org.uiautomation.ios.e2e.crash;

import junit.framework.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.RemoteWebElement;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import org.uiautomation.ios.IOSCapabilities;
import org.uiautomation.ios.SampleApps;
import org.uiautomation.ios.server.IOSServer;
import org.uiautomation.ios.server.IOSServerConfiguration;

import java.net.MalformedURLException;
import java.net.URL;

public class AppCrashHandling {

  private IOSServer server;
  private IOSServerConfiguration config;
  private RemoteWebDriver driver;

  @BeforeClass
  public void startServer() throws Exception {
    String[] args = {"-port", "4444", "-host", "localhost",
        "-app", SampleApps.getPPNQASampleApp(), "-simulators" };
    config = IOSServerConfiguration.create(args);

    server = new IOSServer(config);
    server.start();
  }

  @AfterClass
  public void stopServer() throws Exception {
    if (server != null) {
      server.stop();
      server = null;
    }
  }

  @AfterMethod
  public void closeDriver() {
    if (driver != null) {
      driver.quit();
      driver = null;
    }
  }

  private URL getRemoteURL() {
    try {
      URL remote = new URL("http://" + config.getHost() + ":" + config.getPort() + "/wd/hub");
      return remote;
    } catch (MalformedURLException e) {
      throw new RuntimeException(e);
    }
  }

  @Test
  public void isCrashDetected() throws InterruptedException {
    IOSCapabilities cap = SampleApps.ppNQASampleAppCap();
    cap.setCapability(IOSCapabilities.SIMULATOR, true);

    RemoteWebDriver driver = new RemoteWebDriver(getRemoteURL(), cap);
    WebElement crashButton = driver.findElement(By.name("Crash me!"));
    crashButton.click();
    Thread.sleep(2000);
    Assert.assertTrue("App crash detected.", false);

  }

}
