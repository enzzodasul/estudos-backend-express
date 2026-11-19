# 📚 Padrão de Inicialização — Node.js + Express

Guia com os comandos e configurações utilizados para iniciar nossos projetos backend.

## 1. Inicializar o projeto Node.js

```bash
npm init -y
```

Cria automaticamente o arquivo `package.json`, responsável por armazenar as configurações, dependências e scripts do projeto.

## 2. Instalar o Express

```bash
npm install express
```

Instala o Express, framework utilizado para criar servidores, APIs, rotas e gerenciar requisições HTTP com Node.js.

A instalação adiciona o Express às dependências do projeto no `package.json`.

## 3. Configurar ES Modules

No arquivo `package.json`, adicionar:

```json
"type": "module"
```

Essa configuração permite utilizar a sintaxe moderna de módulos JavaScript:

```javascript
import express from 'express';
```

Em vez da sintaxe CommonJS:

```javascript
const express = require('express');
```

## 4. Configurar o script de desenvolvimento

No `package.json`, adicionar:

```json
"scripts": {
  "dev": "node --watch ./src/index.js"
}
```

**Entendendo o comando:**

- `npm run dev`: executa o script de desenvolvimento.
- `node`: executa o Node.js.
- `--watch`: monitora alterações nos arquivos e reinicia automaticamente a aplicação.
- `./src/index.js`: caminho do arquivo principal da aplicação.

## 5. Estrutura inicial do projeto

```text
projeto/
│
├── src/
│   └── index.js
│
├── node_modules/
├── package.json
├── package-lock.json
└── README.md
```

## 6. Iniciar o projeto

Depois de configurar tudo, executar:

```bash
npm run dev
```

O servidor será iniciado e o Node.js acompanhará as alterações no código automaticamente.

---

## Resumo — Ordem dos comandos

```bash
# 1. Inicializar projeto
npm init -y

# 2. Instalar Express
npm install express

# 3. Configurar package.json:
# "type": "module"
# "scripts": {
#   "dev": "node --watch ./src/index.js"
# }

# 4. Executar projeto
npm run dev
```
