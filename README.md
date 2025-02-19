# Graphql-AWS

Simple Template with Apollo Server **_(v4)_** and AWS Lambda

## Prerequisites 👨‍💻

- [Node.js v18 or superior](https://nodejs.org/en/download/)
- [Npm](https://docs.npmjs.com/cli/v8/commands/npm-install)
- [Docker and Docker Compose](https://docs.docker.com/compose/install/)
- [Create an AWS account](https://aws.amazon.com/free)
- [Install the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [Create an IAM user](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html#cli-configure-quickstart-creds-create)
- [Configure the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html#cli-configure-quickstart-config)

---

### Installation 🗃️

1. Clone the repository:

```bash
git clone https://github.com/anopszetex/Graphql-AWS.git
```

2. Install dependencies:

```bash
npm ci --silent
```

---

### Configuration of LocalStack 🐳

This project uses [LocalStack](https://localstack.cloud/) to simulate AWS services locally. To run LocalStack, follow these steps:

1. Ensure you have Docker and Docker Compose installed.
2. Navigate to the root directory of the project and run:

```bash
docker-compose up -d
```

---

### Running the Project 🚀

1. Start the server:
   > In the root directory, run:

```bash
yarn dev
```

2. Access the API:<br>
   The server will be running at `http://0.0.0.0:3000`

---

### Example GraphQL Query ⚛️

```gql
query Hello {
  getHero
  ping
}
```

---

### Project Structure 🧱

```bash
├── src/
│   ├─ handler.js         # Main lambda function
│   ├── mocks/
│   │    ├── query.json   # Mock http request locally
│   ├── graphql/
│           ├── hero/               # Hero-related GraphQL files
│           │     ├── index.js      # Merges schemas and resolvers for Hero
│           │     ├── resolvers.js  # Resolvers for Hero queries/mutations
│           │     └── schema.js     # GraphQL schema definition for Hero
│           ├── index.js            # Merges all schemas and resolvers
├── docker-compose.yml    # LocalStack configuration
├── serverless.yml        # Serverless Framework configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```
