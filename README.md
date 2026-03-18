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

---

##  Technical Stack & ES6 Concepts

* **Asynchronous JS**: `Async/Await`, `Promise.all`, and custom `Promise` timers.
* **Modern Syntax**: Destructuring, Spread Operator (`...`), Arrow Functions, and Template Literals.
* **Data Structures**: `Map` (for grouping), `Set` (for unique categories), and `Array.flatMap`.
* **Architecture**: **MVC (Model-View-Controller)** pattern for a clean Separation of Concerns.

