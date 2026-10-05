# Graphql-AWS

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

## Local invocation

```sh
npm test
```

This invokes the `graphql` function with `src/mocks/query.json`.

## Deploy

Review the service name, region, and credentials before running:

```sh
npx sls deploy
```

## License

[MIT](LICENSE)

---

<details>
<summary><strong>🇧🇷 Ver documentação em Português (Brasil)</strong></summary>

# Graphql-AWS

Template de **GraphQL serverless** com **Apollo Server v4** e **AWS Lambda**, usando **Serverless Framework** e **LocalStack** para desenvolvimento local.

O objetivo é demonstrar como empacotar uma API GraphQL como uma função Lambda, testar localmente e preparar para deploy na AWS.

## Tecnologias

- [Node.js](https://nodejs.org/) 18+
- [Apollo Server v4](https://www.apollographql.com/docs/apollo-server/)
- [AWS Lambda](https://aws.amazon.com/lambda/)
- [Serverless Framework](https://www.serverless.com/)
- [LocalStack](https://localstack.cloud/) — simulação local dos serviços AWS
- [@as-integrations/aws-lambda](https://github.com/apollo-server-integrations/apollo-server-integration-aws-lambda)

## Estrutura

```text
src/
├── handler.js          # entrypoint da Lambda
├── graphql/
│   ├── hero/
│   │   ├── index.js    # merge de schema e resolvers
│   │   ├── resolvers.js
│   │   └── schema.js
│   └── index.js        # merge de todos os domínios
└── mocks/
    └── query.json      # payload de exemplo para teste local
```

## Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- AWS CLI configurado (para deploy real)

## Como rodar localmente

### Instalar dependências

```sh
npm ci
```

### Subir o LocalStack

```sh
docker-compose up -d
```

### Iniciar o servidor local

```sh
npm run dev
```

A API estará disponível em `http://0.0.0.0:3000`.

### Testar a Lambda localmente

```sh
npm test
```

Isso invoca a função `graphql` localmente com o payload em `src/mocks/query.json`.

## Exemplo de query

```graphql
query Hello {
  getHero
  ping
}
```

## Deploy

O projeto inclui um `serverless.yml` configurado para deploy na AWS. Antes de executar:

1. Configure suas credenciais AWS.
2. Ajuste o nome do service e a região no `serverless.yml`, se necessário.
3. Execute:

```sh
npx sls deploy
```

## Licença

[MIT](LICENSE)

</details>
