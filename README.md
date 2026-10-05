<details>
<summary><strong>🇧🇷 Ver documentação em Português (Brasil)</strong></summary>

# Graphql-AWS

Template GraphQL serverless com Apollo Server v4, AWS Lambda, Serverless Framework e LocalStack. Demonstra composição de schema, reutilização do handler em invocações quentes, execução local e configuração de deploy.

## Requisitos

- Node.js 18+
- Docker e Docker Compose
- Credenciais AWS para um deploy real

```sh
npm ci
docker-compose up -d
npm run dev
```

A API local fica disponível em `http://0.0.0.0:3000`.

## Testes

```sh
npm test
```

O teste automatizado executa uma query contra o schema montado. Para invocar o handler Lambda completo com `src/mocks/query.json`:

```sh
npm run test:local
```

## Deploy

Revise o nome do serviço, a região e as credenciais antes de executar:

```sh
npx sls deploy
```

## Licença

[MIT](LICENSE)

</details>

# Graphql-AWS

---

A serverless GraphQL template built with Apollo Server v4, AWS Lambda, Serverless Framework, and LocalStack. It demonstrates schema composition, Lambda handler reuse across warm invocations, local execution, and AWS deployment configuration.

## Requirements

- Node.js 18+
- Docker and Docker Compose
- AWS credentials for a real deployment

```sh
npm ci
docker-compose up -d
npm run dev
```

The local API is exposed at `http://0.0.0.0:3000`.

## Tests

```sh
npm test
```

The automated test executes a query against the assembled schema. To invoke the complete Lambda handler locally with `src/mocks/query.json`, run:

```sh
npm run test:local
```

## Deploy

Review the service name, region, and credentials before running:

```sh
npx sls deploy
```

## License

[MIT](LICENSE)
