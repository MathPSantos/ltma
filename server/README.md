# LTMA Server

Servidor backend para o projeto LTMA construído com Fastify, TypeScript e PostgreSQL.

## 🛠️ Tecnologias

- **Runtime**: Node.js com TypeScript
- **Framework**: Fastify
- **Database**: PostgreSQL com pgvector
- **ORM**: Drizzle ORM
- **Validação**: Zod
- **Linter/Formatter**: Biome
- **Package Manager**: pnpm

## 📁 Estrutura do Projeto

```
src/
├── server.ts          # Configuração principal do servidor
├── env.ts             # Validação de variáveis de ambiente
├── http/
│   └── routes/        # Rotas da API
└── db/
    ├── connection.ts  # Conexão com banco de dados
    ├── schema/        # Schemas do Drizzle
    ├── migrations/    # Migrações do banco
    └── seed.ts        # Script de seed
```

## 🚀 Setup

### Pré-requisitos

- Node.js 18+
- pnpm
- Docker e Docker Compose

### Instalação

1. **Clone o repositório**
```bash
git clone <repository-url>
cd ltma-server
```

2. **Instale as dependências**
```bash
pnpm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

4. **Inicie o banco de dados**
```bash
docker-compose up -d
```

5. **Execute as migrações**
```bash
pnpm drizzle-kit push
```

6. **Execute o seed (opcional)**
```bash
pnpm db:seed
```

7. **Inicie o servidor**
```bash
# Desenvolvimento
pnpm dev

# Produção
pnpm start
```

## 📋 Scripts Disponíveis

- `pnpm dev` - Inicia o servidor em modo desenvolvimento com hot reload
- `pnpm start` - Inicia o servidor em modo produção
- `pnpm db:seed` - Executa o script de seed do banco de dados

## 🔧 Configuração

### Variáveis de Ambiente

- `PORT` - Porta do servidor (padrão: 3333)
- `DATABASE_URL` - URL de conexão com PostgreSQL

### Banco de Dados

O projeto utiliza PostgreSQL com extensão pgvector para operações de vetores. O Docker Compose já está configurado com as configurações necessárias.

## 🏗️ Padrões de Projeto

- **Clean Architecture**: Separação clara entre camadas (HTTP, Database, Business Logic)
- **Type Safety**: TypeScript + Zod para validação de tipos
- **Database First**: Drizzle ORM com migrations
- **RESTful API**: Rotas organizadas por recursos
- **Environment Validation**: Validação de variáveis de ambiente com Zod 