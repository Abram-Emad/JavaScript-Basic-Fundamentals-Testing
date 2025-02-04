markdown
# JavaScript Basics Testing Project
[![GitHub stars](https://img.shields.io/github/stars/Abram-Emad/JavaScript-Basic-Fundamentals-Testing)](https://github.com/Abram-Emad/JavaScript-Basic-Fundamentals-Testing/stargazers)

A hands-on project to practice and test core JavaScript fundamentals through practical exercises and automated testing.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Problem Categories](#problem-categories)
  - [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

## Project Overview

This repository contains a collection of JavaScript exercises designed to reinforce core programming concepts. Each problem is accompanied by test cases (powered by [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/)) to validate solutions and provide immediate feedback.

Key Objectives:
- Strengthen understanding of JavaScript syntax and core concepts
- Practice problem-solving with real test-driven development (TDD)
- Prepare for technical interviews through practical challenges
- Learn modern JavaScript (ES6+) features

## Features

- **Modular Problem Sets**: Organized into logical categories (Variables, Functions, Arrays, etc.)
- **Automated Testing**: Pre-built test cases for immediate feedback
- **CI/CD Integration**: GitHub Actions configured for continuous integration
- **ES6+ Focus**: Encourages use of modern JavaScript features
- **Progressive Difficulty**: Problems range from basic to intermediate complexity

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v7.x or higher)
- Basic understanding of JavaScript syntax

### Installation

1. **Clone the repository**:
   bash
   git clone https://github.com/Abram-Emad/JavaScript-Basic-Fundamentals-Testing.git
   cd JavaScript-Basic-Fundamentals-Testing
   

2. **Install dependencies**:
   bash
   npm install
   

3. **Verify setup**:
   bash
   npm test
   
   You should see initial test results (mostly failing until you implement solutions).

## Usage

### Problem Structure
Each category contains:
- `solution.js`: File where you implement your solutions
- `solution.test.js`: Corresponding test file (do not modify)
- `README.md`: Problem descriptions and requirements

### Solving Problems
1. Navigate to the desired problem category
2. Open `solution.js` in your editor
3. Implement functions according to the specifications in the comments
4. Save your changes
5. Run tests to verify your solution

### Running Tests
- **Run all tests**:
  bash
  npm test
  
  
- **Test specific category**:
  bash
  npm test -- ./path/to/category.test.js
  
  Example:
  bash
  npm test -- ./1-Variables/variables.test.js
  

### Problem Categories
1. **Variables & Data Types**
   - Primitive types
   - Variable declaration (let/const)
   - Type conversions

2. **Functions**
   - Function declarations vs expressions
   - Parameters/arguments
   - Return values

3. **Arrays**
   - Array methods (push, pop, slice, etc.)
   - Iteration (forEach, map, filter)
   - Multi-dimensional arrays

4. **Objects**
   - Object literals
   - Property access
   - Methods

5. **Control Flow**
   - Conditional statements
   - Loops (for, while)
   - Error handling

6. **ES6+ Features**
   - Arrow functions
   - Template literals
   - Destructuring
   - Spread/Rest operators

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes with descriptive messages
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Guidelines:
- Ensure all tests pass before submitting
- Follow existing code style
- Add tests for new features
- Update documentation as needed

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## Acknowledgments

- Test framework powered by [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/)
- Inspired by freeCodeCamp's JavaScript curriculum
- Problem ideas from various coding interview resources
- Documentation templates from [MDN Web Docs](https://developer.mozilla.org/)

## Contact

Created by [Abram Emad](https://github.com/Abram-Emad)

- GitHub: [@Abram-Emad](https://github.com/Abram-Emad)
