# RETROSPECTIVE.md

## Overview

This retrospective summarizes the key decisions made while building the Cypress automation framework, the trade-offs involved, and how the framework can be scaled further. The focus throughout the assignment was to balance **simplicity, clarity, and real-world practicality**.

---

## Key Trade-offs Made

### 1. Cypress over Selenium-based frameworks

I chose **Cypress (JavaScript)** instead of a Selenium + Java framework because:

* Cypress offers faster execution and built-in waiting mechanisms
* UI and API tests can be written within the same framework
* Easier setup and maintenance

**Trade-off:**
Cypress has limited support for multiple browser tabs and advanced browser-level controls. For highly complex browser interactions, Selenium may offer more flexibility.

---

### 2. Mochawesome instead of Allure

Mochawesome was selected for reporting due to:

* Simple setup and quick HTML report generation
* Clear visualization of test results with screenshots
* Easy integration

**Trade-off:**
Allure provides richer analytics and history trends, but requires additional setup and plugins. For this assignment, Mochawesome offered a cleaner and faster solution.

---

### 3. Lightweight Framework Design

The framework follows a **Page Object Model (POM)** with minimal abstraction:

* Page objects handle UI locators and actions
* API utilities encapsulate request logic
* Fixtures handle test data

**Trade-off:**
A more layered framework could offer better separation for very large projects, but would add unnecessary complexity at this stage.

---

## Handling Flaky Tests

To reduce flakiness:

* Cypress’s built-in retry mechanism is used
* Stable selectors are preferred over dynamic attributes
* Explicit waits are avoided in favor of Cypress auto-waiting
* API tests are isolated from UI tests

This approach keeps tests reliable while avoiding overengineering.

---

## Handling Sensitive Test Data

* No credentials or datas are hardcoded
* Sensitive values are stored in `cypress.env.json`
* Test data files contain only non-sensitive sample data

This ensures the framework is safe to share and aligns with basic security best practices.

---

## Next 3 Steps to Scale for a Banking Product

### 1. Security Enhancements

For a banking application:

* Sensitive information such as usernames, passwords, and tokens should be stored securely using GitHub Secrets or environment variables, instead of being hardcoded in tests.
* Basic security checks like dependency vulnerability scanning can be added to ensure third-party libraries are safe.

---

### 2. Performance & Reliability

To handle large-scale execution:

* Enable parallel test execution
* Separate smoke, regression, and API pipelines
* Add health checks before UI execution

---

### 3. Compliance & Traceability

Banking systems require strong compliance:

* Map test cases to requirements and user stories
* Integrate with test management tools (Jira / QMetry)
* Maintain execution history

---

## Final Thoughts

This framework focuses on real-world QA practices and is designed to be simple, maintainable, and CI-ready. With minor enhancements in security, performance, and compliance, it can scale to support larger applications.
