# To-Do List - Gerenciador de Tarefas

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Uma aplicação moderna e intuitiva para gerenciamento de tarefas, construída com React e seguindo as melhores práticas de desenvolvimento frontend.

## Sobre o Projeto

Este projeto foi desenvolvido como parte do meu aprendizado em React.js, focando em componentização, gerenciamento de estado com hooks, e organização profissional de código. A aplicação permite que usuários criem, editem, completem e organizem suas tarefas diárias de forma eficiente.

## Funcionalidades

- Adicionar tarefas - Crie novas tarefas rapidamente
- Editar tarefas - Modifique o texto de tarefas existentes
- Deletar tarefas - Remova tarefas individualmente
- Marcar como concluída - Acompanhe seu progresso
- Filtros inteligentes - Visualize todas, ativas ou concluídas
- Contador de tarefas - Veja estatísticas em tempo real
- Limpar concluídas - Remova todas as tarefas finalizadas de uma vez
- Persistência de dados - Suas tarefas são salvas automaticamente
- Design responsivo - Funciona perfeitamente em mobile e desktop
- Atalhos de teclado - Pressione Enter para adicionar tarefas

## Tecnologias Utilizadas

### Core
- **React** 18+ - Biblioteca JavaScript para interfaces
- **React Hooks** - useState, useEffect para gerenciamento de estado
- **JavaScript ES6+** - Arrow functions, destructuring, spread operator

### Estilização
- **CSS Modules** - Estilos isolados e sem conflitos
- **CSS3** - Flexbox, Grid, Transitions, Gradients
- **Design Responsivo** - Mobile-first approach

### Ferramentas
- **CodeSandbox** - Ambiente de desenvolvimento
- **Git & GitHub** - Controle de versão
- **Storage API** - Persistência local de dados

## Estrutura do Projeto

```
src/
├── App.js                          # Componente principal com lógica de estado
├── components/
│   ├── TodoInput.jsx              # Input para adicionar tarefas
│   ├── TodoFilters.jsx            # Botões de filtro
│   ├── TodoStats.jsx              # Estatísticas e contador
│   ├── TodoList.jsx               # Lista de tarefas
│   └── TodoItem.jsx               # Item individual de tarefa
├── styles/
│   ├── App.module.css             # Estilos do container principal
│   ├── TodoInput.module.css       # Estilos do input
│   ├── TodoFilters.module.css     # Estilos dos filtros
│   ├── TodoStats.module.css       # Estilos das estatísticas
│   ├── TodoList.module.css        # Estilos da lista
│   └── TodoItem.module.css        # Estilos do item
└── index.js                        # Ponto de entrada da aplicação
```

## Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/Michel-LDR/todo-list-react.git
```

2. Entre na pasta do projeto
```bash
cd todo-list-react
```

3. Instale as dependências
```bash
npm install
```

4. Rode o projeto
```bash
npm start
```

5. Acesse no navegador
```
http://localhost:3000
```

## Design e UX

O design foi pensado para ser:
- **Minimalista** - Interface limpa e sem distrações
- **Intuitivo** - Fácil de usar, mesmo para iniciantes
- **Moderno** - Gradientes, sombras e animações suaves
- **Acessível** - Bom contraste e tamanhos de fonte adequados

### Paleta de Cores
- **Primária**: `#667eea` (Roxo vibrante)
- **Secundária**: `#764ba2` (Roxo escuro)
- **Sucesso**: `#4CAF50` (Verde)
- **Erro**: `#ff5252` (Vermelho)
- **Neutro**: `#f8f9fa` (Cinza claro)

## Conceitos Aplicados

### React Fundamentals
- Componentes funcionais
- Props e comunicação entre componentes
- Lifting state up
- Composição de componentes

### React Hooks
- **useState** - Gerenciamento de estado local
- **useEffect** - Side effects e persistência de dados

### JavaScript Moderno
- Array methods (map, filter, some)
- Ternary operators
- Template literals
- Destructuring

### CSS Avançado
- CSS Modules para escopo isolado
- Flexbox para layouts
- Transitions e transforms
- Pseudo-classes (:hover, :focus)

## Aprendizados

Durante o desenvolvimento deste projeto, aprendi:

1. **Componentização eficiente** - Como dividir uma aplicação em componentes reutilizáveis
2. **Gerenciamento de estado** - Uso de hooks para controlar dados da aplicação
3. **Props drilling** - Passar dados entre componentes pai e filho
4. **CSS Modules** - Evitar conflitos de estilos em aplicações maiores
5. **Persistência de dados** - Salvar informações localmente
6. **Clean Code** - Escrever código limpo, legível e manutenível
7. **Boas práticas** - Seguir padrões da indústria

## Próximas Melhorias

- [ ] Adicionar drag and drop para reordenar tarefas
- [ ] Implementar categorias/tags para tarefas
- [ ] Adicionar data de vencimento
- [ ] Modo escuro (dark mode)
- [ ] Notificações para tarefas importantes
- [ ] Exportar tarefas em PDF
- [ ] Sync com backend (API)
- [ ] Autenticação de usuários
- [ ] Compartilhamento de listas

## Autor

**Michel Röhrig**

- GitHub: [@Michel-LDR](https://github.com/Michel-LDR)
- LinkedIn: [Michel Röhrig](https://www.linkedin.com/in/michel-r%C3%B6hrig-870528242/)

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com dedicação e muito café
