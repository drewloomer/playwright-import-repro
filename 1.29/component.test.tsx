import React from 'react';
import { test } from '@playwright/experimental-ct-react';

// Uncomment this and things blow up with "Cannot find module"
import { TestComponent } from "./Component.jsx";

test("imports work", ({ mount }) => {
  mount(<TestComponent />);
});
