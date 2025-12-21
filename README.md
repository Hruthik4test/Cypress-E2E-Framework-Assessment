# Cypress Automation Framework

## Project Overview

This repository contains a **Cypress (JavaScript) automation framework** built as part of a QA automation assignment. The framework covers **UI testing, API testing, data-driven testing, reporting, and CI/CD integration** using GitHub Actions.

---

## Tech Stack

* **Test Framework:** Cypress (JavaScript)
* **Design Pattern:** Page Object Model (POM)
* **API Testing:** Cypress `cy.request`
* **Test Data:** JSON / CSV fixtures
* **Reporting:** Mochawesome HTML Reports
* **CI/CD:** GitHub Actions
* **Version Control:** GitHub

---

## Folder Structure

.github/
  └── workflows/
      ├── smokeBuild.yml        # CI pipeline for Smoke tests
      └── regressionBuild.yml   # CI pipeline for Regression tests

cypress/
  ├── e2e/
  │   ├── uiTests/              # UI test cases
  │   └── apiTest/              # API test cases
  ├── fixtures/                 # Test data (JSON / CSV)
  ├── pages/                    # Page Object classes
  ├── support/                  # Custom commands & hooks
  ├── reports/                  # Mochawesome HTML reports
  └── videos/                   # Cypress execution videos

cypress.config.js               # Cypress configuration
cypress.env.json                # Environment-specific & sensitive data
DESIGN.md                       # Framework design & architecture
README.md                       # Project documentation
package.json                    # Dependencies & scripts
---

## Test Coverage

### UI Tests (Public Demo Site)

* Successful login scenario
* Successful login and logout scenario
* Login failure scenario (invalid credentials)

### API Tests (Public API)

* Happy path API validation (GET request)
* Happy path API validation (POST request)
* Negative API validation (404 / invalid request)

### Data-Driven Testing

* Test data is externalized using **fixtures (JSON)**
* Same test can be executed with multiple datasets

---

## Test Tagging Strategy

Tests are tagged to support selective execution:

* `@smoke` – Critical tests executed on every commit
* `@regression` – Full regression test suite

---

## How to Run Tests Locally

### 1️⃣ Install Dependencies
npm init and npm install cypress --save-dev

### 2️⃣ Open Cypress Test Runner
npx cypress open

### 3️⃣ Run All Tests in Headless Mode
npx cypress run

### 4️⃣ Run Smoke Tests Only
npx cypress run --env grepTags=@smoke

### 5️⃣ Run Regression Tests Only
npx cypress run --env grepTags=@regression

---

## Configuration & Environment Variables

* **UI Base URL** is configured in `cypress.config.js`
* **API Base URL** is stored in `env.apiUrl`
* Sensitive data such as credentials are stored in `cypress.env.json`

---

## Reporting

* **Mochawesome HTML reports** are generated after every test run
* Reports include:

  * Test summary
  * Failed test screenshots
  * Execution details

Reports are available under:

cypress/reports/


In CI, reports are generated automatically after test execution.

---

## CI/CD – GitHub Actions

Two GitHub Actions workflows are configured:

### Smoke Pipeline

* Triggered on every push
* Runs `@smoke` tagged tests

### Regression Pipeline

* Triggered on every push or scheduled
* Runs `@regression` tagged tests

CI Flow:

1. Checkout repository
2. Install dependencies (`npm ci`)
3. Run Cypress tests
4. Generate Mochawesome report

---

## How to Run Tests in CI

CI runs automatically when code is pushed to the repository.

---



