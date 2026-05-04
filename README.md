# projeto-webdesign

Replicação de interface mobile de um aplicativo de rideshare, desenvolvido como projeto acadêmico de front-end.

![Stack](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5-yellow) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-teal) ![SASS](https://img.shields.io/badge/SASS-tokens-pink) ![Deploy](https://img.shields.io/badge/Deploy-Vercel-black)

---

## Sobre o projeto

O objetivo é replicar, em formato de página web responsiva simulando uma tela mobile, o design de UI de um aplicativo de rideshare. O projeto vai além da estética — exige precisão no layout, uso correto de tipografia, cores, espaçamentos e implementação de comportamentos interativos básicos usando frameworks modernos de front-end.

### Telas replicadas

- **Tela 1 — New Ride Request:** perfil do motorista, barra de abas, card de corrida com rota e botões de aceitar/recusar
- **Tela 2 — Ride:** header com fundo azul, seletor de calendário interativo e cards de rotas disponíveis

---

## Stack tecnológica

| Ferramenta   | Versão | Papel no projeto                    |
| ------------ | ------ | ----------------------------------- |
| Vite         | 5.x    | Build tool e dev server             |
| React        | 18.x   | Componentização e estado            |
| Tailwind CSS | v4     | Estilização utility-first + PostCSS |
| SASS         | 1.x    | Tokens globais de design            |
| Lucide React | latest | Ícones SVG                          |
| Vercel       | —      | Deploy automático                   |

---

## Membros e divisão de tarefas

| Membro                   | Branch                    | Responsabilidade                                                                                                |
| ------------------------ | ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| M1 - STÉPHANY LIMA VITAL | `feature/setup-tokens`    | Configuração do projeto, tokens SASS, componentes Header e StatusBar, deploy no Vercel, revisão de PRs          |
| M2 -                     | `feature/profile-tabs`    | Componente de perfil do motorista, barra de abas com estado ativo, JS de troca de aba, responsividade da tela 1 |
| M3 -                     | `feature/calendar-routes` | Header azul da tela 2, seletor de calendário interativo, cards de rota, responsividade da tela 2                |
| M4 -                     | `feature/ride-card-docs`  | Card de corrida, componente RouteItem (reutilizado nas duas telas), AvatarGroup, relatório técnico em PDF       |

---

## Estrutura de pastas

```
rideshare-ui/
  src/
    assets/          ← SVGs e imagens
    components/      ← componentes reutilizáveis
      StatusBar.jsx
      Header.jsx
      ProfileCard.jsx
      TabBar.jsx
      RideRequestCard.jsx
      RouteItem.jsx      ← reutilizado nas duas telas
      ActionButtons.jsx
      CalendarStrip.jsx
      RideCard.jsx
      AvatarGroup.jsx    ← reutilizado nas duas telas
    screens/         ← telas completas
      ScreenRideRequest.jsx
      ScreenRide.jsx
    styles/          ← tokens de design
      _tokens.scss
    App.jsx
    main.jsx
    index.css
```

---

## Tokens de design

Ninguém usa cor, tamanho ou sombra digitado diretamente no código. Tudo vem de `src/styles/_tokens.scss`.

### Cores principais

```scss
$color-pink: #f0509e; // botão ativo, preço, Decline
$color-blue-dark: #3535b5; // fundo tela 2, botão Accept
$color-blue-icon: #534ab7; // ícones de rota
$color-bg-screen: #eef0f8; // fundo tela 1
$color-text-main: #1a1a2e; // títulos e nomes
$color-text-muted: #9b9bb0; // textos secundários
```

### Border-radius exatos

```scss
$radius-card: 20px;
$radius-btn: 14px;
$radius-tab: 14px;
$radius-photo: 12px;
$radius-calendar: 18px;
```

### Sombras exatas

```scss
$shadow-tab-active: 0 8px 20px rgba(240, 80, 158, 0.4);
$shadow-calendar: 0 12px 28px rgba(0, 0, 0, 0.18);
$shadow-card: 0 4px 16px rgba(0, 0, 0, 0.08);
```

---

## Como rodar localmente

```bash
# 1. Clonar o repositório
git clone https://github.com/stelv29/projeto-webdesign.git
cd projeto-webdesign/rideshare-ui

# 2. Instalar dependências
npm install

# 3. Ir para a sua branch
git checkout feature/sua-branch

# 4. Rodar o projeto
npm run dev
```

Abre no navegador: `http://localhost:5173/`

---

## Fluxo Git

- Ninguém faz push direto na `main`
- Todo merge é via Pull Request com ao menos 1 aprovação
- Antes de começar: sempre rodar `git pull origin main`
- Antes do PR: rodar `npm run dev` e confirmar que não quebrou nada

### Padrão de commits

```
feat(componente): descrição clara do que foi feito
style(componente): mudança visual sem alterar lógica
fix(componente): correção de bug
docs: atualização de documentação
chore: configuração de ferramenta
```

---

## Critérios de avaliação

| Critério               | Como cobrimos                            |
| ---------------------- | ---------------------------------------- |
| Precisão visual        | Tokens SASS com valores exatos do design |
| Qualidade do código    | React com componentização + ESLint       |
| Pré-processadores      | SASS + Tailwind v4 (PostCSS nativo)      |
| Framework de front-end | React 18                                 |
| Live demo              | Vercel — deploy automático a cada push   |

---

## Links

- **Repositório:** https://github.com/stelv29/projeto-webdesign
- **Live demo:** em breve via Vercel
