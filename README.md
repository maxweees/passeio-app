# 📍 Passeio App - Lista de Lugares Favoritos

O **Passeio App** é uma aplicação web interativa desenvolvida em **Angular** que permite aos usuários explorar, organizar e compartilhar seus lugares incríveis e favoritos, tudo em um só lugar. A aplicação conta com autenticação segura integrada diretamente com o **Google Auth** utilizando o protocolo OAuth2/OIDC.

---

## 🚀 Funcionalidades

- **Autenticação com Google:** Login rápido, seguro e simplificado através da API de autenticação do Google.
- **Gerenciamento de Perfil:** Identificação em tempo real do usuário logado, exibindo saudações personalizadas com os dados obtidos da conta Google (`profile.name`).
- **Navegação Protegida:** Redirecionamento dinâmico para a galeria de lugares favoritos assim que o estado de login for validado.
- **Interface Moderna e Responsiva:** Design elegante construído utilizando classes utilitárias do **Tailwind CSS**, contando com gradientes modernos, efeitos hover refinados e total adaptabilidade a dispositivos móveis.
- **Arquitetura Reativa com Signals:** Utilização de conceitos modernos do Angular, como **Signals** (`signal<any>`) para gerenciamento reativo de estado e injeção de dependência via função `inject()`, garantindo alta performance e eliminação de loops de renderização desnecessários.

---

## 🛠️ Tecnologias Utilizadas

- **[Angular](https://angular.dev/)** - Framework do ecossistema SPA para construção da interface e lógica de componentes.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework utilitário de CSS focado em design ágil e customizável.
- **[angular-oauth2-oidc](https://github.com/manfredsteyer/angular-oauth2-oidc)** - Biblioteca certificada para suporte a OpenID Connect (OIDC) e OAuth 2.0 no Angular.
- **TypeScript** - Superconjunto JavaScript adicionando tipagem estática opcional e recursos avançados à aplicação.

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado em seu ambiente:
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Angular CLI](https://angular.dev/cli) instalado globalmente:
  ```bash
  npm install -g @angular/cli