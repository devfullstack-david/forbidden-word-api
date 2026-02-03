# 🚀 Forbidden Word API

> The robust and high-performance API aimed at the **Forbidden Word** game experience.

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

## 🛠️ Tech Stack

Engineered with modern technologies for scalability and type safety:

- **Core Framework**: [Fastify](https://www.fastify.io/)
- **Database Layer**: [Knex.js](https://knexjs.org/) & [MySQL2](https://github.com/sidorares/node-mysql2)
- **Validation**: [Zod](https://zod.dev/) & `fastify-type-provider-zod`
- **Environment**: `@fastify/env`
- **Logging**: `pino-pretty`

## ⚡ Getting Started

### Prerequisites

Ensure you have **Node.js** installed on your machine.

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### ⚙️ Configuration

Create a `.env` file in the root directory of the project. You can copy the structure below:

```ini
HOST=
PORT=
USER=
PASSWORD=
DATABASE=
```

> **Note**: These variables are essential for the database connection and server configuration.

## 📜 Scripts

| Script          | Description                                  |
| :-------------- | :------------------------------------------- |
| `npm run dev`   | Starts the server in watch mode using `tsx`. |
| `npm run build` | Compiles the TypeScript source code.         |
| `npm start`     | Runs the optimized production server.        |

## 👨‍💻 Author

**David Santos**
_Full-stack Developer specializing in TypeScript and Python._

---

_Generated for Forbidden Word Game._
