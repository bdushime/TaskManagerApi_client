#  Task Manager CLI (ES6+)

A professional Command Line Interface (CLI) application designed to fetch, process, and manage task data from a remote REST API. Built with a focus on **Clean Code**, **Design Patterns**, and **Resilient Asynchronous Logic**.

---

##  Core Features

* ** Resilient Data Fetching**: Custom `APIClient` featuring **Recursive Retry Logic** and **Exponential Backoff** to handle network instability.
* **** Object-Oriented Architectur****:
    * **Inheritance**: Specialized `PriorityTask` extends the base `Task` class.
    * **Polymorphism**: Overridden methods for dynamic, priority-based status reporting.
    * **Encapsulation**: Dedicated `User` models that manage their own statistics and state.
* ** Data Analysis & Processing**: 
    * **Global Stats**: System-wide completion metrics calculated using `.reduce()`.
    * **User Dashboards**: Real-time performance metrics and completion rates per user.
    * **Smart Grouping**: High-efficiency `Map` structures for $O(1)$ task lookups.
* ** Interactive Interface**: A menu-driven system using Node.js `readline` for searching, A-Z sorting, and live status toggling.

## 🧪 Testing & Quality Assurance

This project implements a comprehensive automated testing suite using **Jest**, focusing on the three pillars of software verification: Unit, Integration, and Mocking.

### **Testing Highlights**
* **66 Automated Test Cases**: 100% pass rate across 9 dedicated test suites.
* **High Code Coverage**: Achieved **92.2% Statement Coverage** and **90% Branch Coverage**, ensuring all critical logic paths are verified.
* **Mocking & Isolation**: Utilized `jest.fn()` and `mockResolvedValue` to simulate the remote REST API, allowing for stable "offline" testing of the full data pipeline and retry logic.
* **Behavioral Spies**: Leveraged `jest.spyOn` to verify internal side effects, such as console logging, controller method triggers, and native Array method calls (`.filter`, `.map`, `.sort`).

### **Test Categories**
| Category | Scope |
| :--- | :--- |
| **Unit Testing** | Individual verification of `Task`, `PriorityTask`, `User`, and `TaskProcessor` logic. |
| **Integration Testing** | End-to-end data flow from the `APIClient` through the `TaskProcessor` into Model instances. |
| **Error Handling** | Boundary testing for `null`/`undefined` inputs, invalid IDs, and 404/500 API failure scenarios. |

### **Running the Tests**

To execute the test suite and generate the coverage report, ensure you have the dev dependencies installed and run:

```bash
# Run all tests
npm test

# Run tests with full coverage report
npm run test:coverage
---

##  Technical Stack & ES6 Concepts

* **Asynchronous JS**: `Async/Await`, `Promise.all`, and custom `Promise` timers.
* **Modern Syntax**: Destructuring, Spread Operator (`...`), Arrow Functions, and Template Literals.
* **Data Structures**: `Map` (for grouping), `Set` (for unique categories), and `Array.flatMap`.
* **Architecture**: **MVC (Model-View-Controller)** pattern for a clean Separation of Concerns.

