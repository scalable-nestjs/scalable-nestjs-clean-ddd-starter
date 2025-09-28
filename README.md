# Scalable NestJS Clean DDD Starter

A starter template for building scalable applications with **NestJS**, following **Clean Architecture** and **Domain-Driven Design (DDD)** principles.

This project provides a well-structured foundation to kickstart complex applications, ensuring clear separation of concerns, modularity, and maintainability.

---

## 📂 Project Structure

```
scalable-nestjs-clean-ddd-starter/
├─ src/
│  ├─ apps/                    # Applications (entry points)
│  │  ├─ api/                  # API REST or GraphQL
│  │  │   ├─ main.ts
│  │  │   └─ api.module.ts
│  │  ├─ worker/               # Background workers
│  │  │   ├─ main.ts
│  │  │   └─ worker.module.ts
│  │  └─ event-handler/        # Event-driven handlers
│  │      ├─ main.ts
│  │      └─ event-handler.module.ts
│  │
│  ├─ modules/                 # Bounded Contexts
│  │  ├─ user/                 # Example bounded context
│  │  │   ├─ domain/           # Entities, Value Objects, Domain Services
│  │  │   │   ├─ entities/
│  │  │   │   └─ value-objects/
│  │  │   ├─ application/      # Use cases, DTOs, services
│  │  │   │   ├─ dtos/
│  │  │   │   └─ use-cases/
│  │  │   └─ infrastructure/   # Repositories, providers specific to this BC
│  │  └─ order/                # Another bounded context
│  │      ├─ domain/
│  │      ├─ application/
│  │      └─ infrastructure/
│  │
│  └─ shared/                  # Shared infrastructure & utilities
│      ├─ infrastructure/      # DB, cache, logger, etc.
│      └─ utils/               # Helpers, mappers, constants
│
├─ test/                       # Unit and integration tests
├─ .gitignore
├─ README.md
├─ package.json
├─ tsconfig.json
└─ LICENSE
```

---

## 🚀 Features

- NestJS modular architecture.
- Clean Architecture layering (Domain, Application, Infrastructure).
- Domain-Driven Design patterns.
- Ready for multiple apps (API, workers, event handlers).
- Shared utilities and infrastructure to avoid duplication.

---

## 🛠 Getting Started

```bash
# Install dependencies
npm install

# Run the API app
tsx src/apps/api/main.ts

# Run worker
tsx src/apps/worker/main.ts

# Run event handler
tsx src/apps/event-handler/main.ts
```

---

## 📜 License

This project is licensed under the MIT License.
