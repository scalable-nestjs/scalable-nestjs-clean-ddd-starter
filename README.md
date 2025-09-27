# Scalable NestJS Clean DDD Starter

[![GitHub stars](https://img.shields.io/github/stars/scalable-nestjs/scalable-nestjs-clean-ddd-starter?style=social)](https://github.com/scalable-nestjs/scalable-nestjs-clean-ddd-starter/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/Node.js-%3E%3D18-brightgreen)](https://nodejs.org/)

A **scalable NestJS starter template** implementing **Clean Architecture** and **Domain-Driven Design (DDD)** principles. Perfect as a starting point for building robust, maintainable, and testable backend applications.

---

## Features

* Modular **Clean Architecture** setup (Domain, Application, Infrastructure layers)
* Example **Domain entity**, use case, and repository interface
* TypeScript + NestJS best practices
* Unit tests ready with **Jest**
* Preconfigured **ESLint** and **Prettier**
* Ready for CI/CD integration
* Extensible to **microservices** or **event-driven architecture**

---

## Installation

```bash
git clone git@github.com:scalable-nestjs/scalable-nestjs-clean-ddd-starter.git
cd scalable-nestjs-clean-ddd-starter
npm install
npm run start:dev
```

The application should be running at [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
src/
├─ domain/          # Entities, Value Objects, Domain Services
├─ application/     # Use Cases, Application Services
├─ infrastructure/  # Repositories, DB, External Integrations
├─ main.ts          # Entry point
```

---

## Usage

Add your own modules under `application` and `domain`. Use the provided repository and service patterns to extend functionality quickly.

---

## Contributing

Contributions are welcome! Please follow the **Clean Architecture** and **DDD principles** when adding new features.

1. Fork the repo
2. Create a branch (`feature/your-feature`)
3. Commit your changes
4. Push to the branch
5. Create a pull request

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
