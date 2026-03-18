
Task Manager CLI (ES6+)
A robust, object-oriented Command Line Interface (CLI) application built with modern JavaScript to manage and analyze tasks from a remote API.

Key Features

Resilient API Client: Fetches data from JSONPlaceholder with built-in Retry Logic and Exponential Backoff.

Object-Oriented Design: Utilizes Class Inheritance (Task → PriorityTask) and Encapsulation.

Data Analysis: Real-time Global Statistics, User Dashboards, and Completion Rate calculations.

Advanced Filtering: Search by title, filter by status, and extract unique categories using Set.

High-Efficiency Grouping: Uses Map data structures for $O(1)$ task-to-user lookups.

Interactive CLI: A recursive menu-driven interface using Node.js readline.

Tech Stack & Concepts

Runtime: Node.js

Language: ES6+ JavaScript

Patterns: Model-View-Controller (MVC), Dependency Injection, Functional Programming (reduce, map, filter).
