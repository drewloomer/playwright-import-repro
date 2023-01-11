import type { PlaywrightTestConfig } from '@playwright/experimental-ct-react';
import { devices } from "@playwright/test";

const viewport = { width: 1280, height: 800 };
const deviceScaleFactor = 2;
const locale = "en-us";

const config: PlaywrightTestConfig = {
  testMatch: /\.(js|ts|mjs|tsx)/,
  projects: [
    {
      name: "chromium",
      use: {
        userAgent: devices["Desktop Chrome"].userAgent,
        viewport,
        deviceScaleFactor,
        isMobile: false,
        hasTouch: false,
        defaultBrowserType: devices["Desktop Chrome"].defaultBrowserType,
        locale,
      },
    },
    {
      name: "firefox",
      use: {
        userAgent: devices["Desktop Firefox"].userAgent,
        viewport,
        deviceScaleFactor,
        isMobile: false,
        hasTouch: false,
        defaultBrowserType: devices["Desktop Firefox"].defaultBrowserType,
        locale,
      },
    },
    {
      name: "webkit",
      use: {
        userAgent: devices["Desktop Safari"].userAgent,
        viewport,
        deviceScaleFactor,
        isMobile: false,
        hasTouch: false,
        defaultBrowserType: devices["Desktop Safari"].defaultBrowserType,
        locale,
      },
    },
  ],
};
export default config;
