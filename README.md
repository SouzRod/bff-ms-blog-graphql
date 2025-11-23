# GraphQL API com Node.js, Apollo Server e MongoDB

Este projeto foi desenvolvido com o objetivo de **praticar a construção de uma API GraphQL** utilizando **Node.js**, **JavaScript**, **Apollo Server** e **MongoDB**. A aplicação disponibiliza operações de consulta e mutação para gerenciar artigos (*Articles*) e autores (*Authors*).

---

## 🚀 Tecnologias Utilizadas

* **Node.js** – Ambiente de execução JavaScript
* **Apollo Server** – Servidor GraphQL simples e extensível
* **MongoDB** – Banco de dados NoSQL para persistência dos dados
* **Mongoose** (presumido) – ODM para modelar os dados no MongoDB

---

## 📌 Objetivo do Projeto

O propósito principal deste projeto é reforçar a compreensão dos conceitos essenciais de GraphQL, incluindo:

* Definição de esquemas (*schema*)
* Criação de resolvers
* Operações de Query e Mutation
* Relacionamento entre tipos

---

## 📚 Schema GraphQL

A API expõe os tipos e operações abaixo:

### **Tipos**

#### `Article`

* `id: String!`
* `title: String!`
* `body: String!`
* `authorId: String!`
* `createdAt: String!`
* `updatedAt: String!`

#### `Author`

* `id: String!`
* `name: String!`
* `email: String!`
* `bio: String!`
* `createdAt: String!`
* `updatedAt: String!`

---

### **Queries Disponíveis**

```graphql
getArticleById(id: String!): Article!
getArticles: [Article!]!

getAuthorById(id: String!): Author!
getAuthors: [Author!]!
```

**Exemplo de Query:**

```graphql
query {
  getArticles {
    id
    title
    body
    authorId
  }
}
```

---

### **Mutations Disponíveis**

```graphql
createArticle(title: String!, body: String!, authorId: String!): String!
updateArticle(id: String!, title: String!, body: String!): String!
deleteArticle(id: String!): String!

createAuthor(name: String!, email: String!, bio: String!): String!
updateAuthor(id: String!, name: String!, email: String!, bio: String!): String!
deleteAuthor(id: String!): String!
```

**Exemplo de Mutation:**

```graphql
mutation {
  createAuthor(name: "João Silva", email: "joao@email.com", bio: "Escritor e jornalista")
}
```

---

## 🗄️ Estrutura Geral do Projeto

```
index.js        # Inicialização do servidor Apollo
src/
  ├── schemas/     # Definição dos typeDefs
  ├── resolvers/   # Implementação das queries e mutations
  └──adapters/     # Regras de negócio
commons/
  ├── config/      # Arquivo para centralizar as chamadas das variaveis de ambiente
  ├── database/    # Conexão com o banco de dados
  ├── enum/        # enumerator
  ├── errors/      # Pasta com os tratamentos de erros e as Classes de Erros Customizadas
  └──repository/   # Chamada dos métodos de acesso ao banco de dados
```

---

##  Variáveis de ambiente

```
PORT=4000

MONGO_URI=mongodb://localhost:27017/
MONGO_DB=bff-ms-blog
MONGO_COLLECTION_ARTICLES=articles
MONGO_COLLECTION_AUTHORS=authors
```

---

## ▶️ Como Executar o Projeto

### **1. Instale as dependências:**

```bash
npm install
```

### **2. Inicie o servidor**

```bash
npm start
```

### **4. Acesse o Playground do Apollo Server**

```
http://localhost:4000/
```

---

## 📄 Licença

Este projeto é apenas para fins de estudo. Sinta-se à vontade para usar como base ou aprimorar.

---

## ✨ Autor

Projeto desenvolvido por **Rodrigo Souza** como prática de GraphQL com Node.js.

---
