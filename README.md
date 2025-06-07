# Sistema de Tarefas com Controle de Usuários em TypeScript

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
![POO](https://img.shields.io/badge/POO-Paradigm-informational?style=for-the-badge)
![VSCode](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![git](https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=Git&logoColor=white)
![ts-node](https://img.shields.io/badge/ts--node-3178C6?style=for-the-badge)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B.svg?style=for-the-badge&logo=nodemon&logoColor=white)

> Sistema simples e orientado a objetos em TypeScript para gerenciar tarefas com diferentes níveis de permissão para usuários. Ideal para estudo e demonstração de conceitos de POO e controle de acesso.

---

## ✨ Sobre o Projeto

Este projeto implementa um sistema básico de gerenciamento de tarefas com três perfis de usuários:

- **Administrador**: Pode criar, listar e remover qualquer tarefa.
- **Usuário Comum**: Pode criar, listar e remover apenas suas próprias tarefas.
- **Convidado**: Pode listar tarefas, mas não pode criar ou remover.

Todas as ações respeitam as regras de permissão. O código está implementado em TypeScript, dentro de um único arquivo, sem dependências externas ou banco de dados.

---

## 🧩 Funcionalidades

- Simulação de usuários predefinidos com papéis distintos.
- Criação, listagem e remoção de tarefas com restrição de permissões.
- Tarefas com id incremental, título, descrição, status e referência ao autor.
- Utilização de enums, interfaces, classes abstratas, herança e encapsulamento em TypeScript.

---

## 🚀 Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/) — Linguagem principal
- Paradigma Orientado a Objetos (POO)
- Execução com [Node.js](https://nodejs.org/) após transpilação
- Monitoramento com [nodemon](https://www.npmjs.com/package/nodemon)
- Execução direta com [ts-node](https://www.npmjs.com/package/ts-node)

---

## ⚙️ Como executar o projeto

### Pré-requisitos

Antes de tudo, é necessário ter instalado:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [VS Code (recomendado)](https://code.visualstudio.com/)

### Instalação

Clone o repositório:

```zsh
git clone https://github.com/EvandroOrso/user-task-system-ts.git
cd user-task-system-ts
```

Instale as dependências:

```zsh
npm install
```

Use o script **dev**, que compila o código com TypeScript e executa o resultado com **nodemon**:

```zsh
npm run dev
```

### Estrutura do Projeto

```pgsql
user-task-system-ts/
├── node_modules/
├── src/
│   └── index.ts        # Arquivo principal com as classes e lógica do sistema
├── .gitignore
├── LICENSE           
├── README.md
├── package.json
└── tsconfig.json
```

### 🧪 Exemplo de Uso

```ts
// Login como usuário comum "Lucas"
const user = new CommonUser("Lucas", UsersType.CommonUser);
user.createTask("Estudar TypeScript", "Ler documentação e praticar exercícios");
user.createTask("Fazer exercícios POO");

// Login como administrador
const admin = new Admin("Admin", UsersType.Admin);
admin.deleteTask(1); // Remove tarefa criada por Lucas

// Login como convidado
const guest = new Guest("Visitante", UsersType.Guest);
guest.deleteTask(2); // Recebe mensagem de permissão negada
```

## ❗ Observações

Este projeto representa meu aprendizado com POO em TypeScript. Eu compreendo que existem melhorias que poderiam ser aplicadas. No entanto, decidi manter esta versão mais simples como registro do meu progresso atual.

## 📜 Licença

Este projeto está licenciado sob a [Licença MIT](./LICENSE).

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias e correções.

---

Obrigado por acessar o meu repositório!