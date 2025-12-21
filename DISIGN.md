# DESIGN.md

## 1. Architecture Overview

                 +---------------------+
                 |  Cypress Tests      |
                 |  UI / API           |
                 +---------+-----------+
                           |
                 +---------v-----------+
                 | Page Objects /      |
                 | API Utilities       |
                 +---------+-----------+
                           |
                 +---------v-----------+
                 | Config & Env Vars   |
                 | (Sensitive Data)    |
                 +---------+-----------+
                           |
                 +---------v-----------+
                 | Reporting Layer     |
                 | Mochawesome HTML    |
                 +---------+-----------+
                           |
                 +---------v-----------+
                 | CI/CD Pipeline      |
                 | GitHub Actions      |
                 +---------------------+

This simple diagram shows the flow of the framework: writing tests, executing them, generating reports, and integrating everything into CI/CD for automation.

---

## 2. Why We Chose These Tools

| Component      | Why We Chose It
| -------------- | ---------------------------------------------------------------------------------------
| Test Framework | **Cypress (JavaScript)**: Quick to set up, supports UI & API testing, easy to maintain.
| Reporting      | **Mochawesome**: Provides clear, visually rich HTML reports with screenshots.
| Test Data      | **JSON/CSV**: Makes tests flexible and data-driven without hardcoding values.
| Test Filtering | **@cypress/grep**: Run only relevant tests, like Smoke or Regression.
| CI/CD          | **GitHub Actions**: Automatically generates and publishes test execution reports as part of the CI pipeline.
| Sensitive Data | **cypress.env.json or Environment Variables**: Keeps credentials safe and out of code.

---

## 3. Project Structure

```
project-root/
├── .github/
│   └── workflows/
│       ├── smokeBuild.yml       # Runs only Smoke tests in CI
│       └── regressionBuild.yml  # Runs Regression tests in CI
├── cypress/
│   ├── e2e/
│   │   ├── apiTest/             # API test cases
│   │   └── uiTests/             # UI test cases
│   ├── fixtures/                # External test data (JSON/CSV)
│   ├── pages/                   # Page Objects for UI tests
│   ├── reports/                 # Mochawesome HTML reports
│   ├── support/                 # Support files & custom commands
│   └── video/                   # Video recordings of test runs
├── node_modules/
├── cypress.config.js            # Cypress configuration
├── cypress.env.json             # Environment variables / sensitive data
├── DESIGN.md                    # This document
├── package-lock.json
└── package.json
```

A clear structure keeps the framework organized, easy to maintain, and scalable as more tests are added.

---

## 4. Framework Highlights

* **Reusable Components:** Page Objects and utilities make tests simpler and reduce repetition.
* **Handling Flaky Tests:** Cypress retries actions and uses stable selectors to reduce failures from minor UI changes.
* **Data-Driven Testing:** JSON/CSV files allow running tests with multiple data sets without changing the code.
* **Sensitive Data Management:** All credentials and keys are in environment files, never in the code.
* **Test Tagging:** Use `@smoke` and `@regression` tags to run specific tests when needed.

---

## 5. Reporting & Logging

* **Mochawesome HTML Reports:** Shows passed/failed tests with screenshots for any failures.
* **Console Logging:** Logs key steps, API requests, and responses for easier debugging.
* **CI Integration:** Reports are automatically generated and stored during GitHub Actions runs.

---

## 6. CI/CD Setup

* **GitHub Actions Workflows:**

  * Smoke Build: Runs only `@smoke` tests when code is pushed.
  * Regression Build: Runs `@regression` tests when code is pushed or scheduled runs.

* **CI Steps:**

  1. Checkout repository.
  2. Install dependencies (`npm ci`).
  3. Run Cypress tests with selected tags.
  4. Merge Mochawesome JSON reports.
  5. Generate final HTML report in `reports/`.



