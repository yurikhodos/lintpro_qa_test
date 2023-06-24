# lintpro_qa_test

This script opens Instagram homepage in Chrome and verifies that the homepage is in the expected initial state

The script is written using Playwright framework.
  For more information about Playwright visit https://playwright.dev/docs/intro

To run the script type the following command 

        >npx playwright test --headed --project=chromium --workers=1 /tests/instagram-login-page.spec.js

To view the resport type the following command

        >npx playwright show-report
