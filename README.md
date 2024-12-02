# Desafio SENAC

Este repositório contém o código fonte de uma aplicação web desenvolvida para o desafio técnico da instituição SENAC.

Deploy da aplicação na AWS: [Desafio SENAC](https://main.d2jqtd5cirmb4e.amplifyapp.com/)

## Descrição do desafio

O objetivo do desafio foi desenvolver uma página web responsiva que incluísse um **combobox para troca de temas**, um **quiz interativo com feedbacks** e **utilização de estilos SASS**. O projeto segue as seguintes orientações:

### Funcionalidades implementadas:
1. **Troca de tema com combobox**:
   - O topo da página contém um combobox que permite alternar entre dois temas com cores distintas.
   - As cores dos temas são aplicadas dinamicamente utilizando variáveis CSS.

2. **Quiz interativo**:
   - O quiz possui quatro questões.
   - Cada questão inclui:
     - Enunciado.
     - Quatro alternativas de resposta.
     - Uma imagem ilustrativa.
     - Um botão de **confirmar resposta**.
   - Após a confirmação, é exibido um feedback visual indicando se a resposta está correta ou incorreta.
   - Um botão para avançar à próxima pergunta aparece após o feedback.
   - Na última pergunta, o botão exibe o texto "Finalizar Quiz".

3. **Feedback visual**:
   - Ícones de "✔️" ou "❌" são exibidos conforme a resposta do usuário.

### Requisitos:
- O projeto foi desenvolvido em **React** com **JavaScript**.
- Os estilos foram implementados utilizando **SASS**.
- O layout foi projetado para ser **responsivo e acessível**.

## Tecnologias utilizadas

As principais tecnologias e ferramentas utilizadas para o desenvolvimento deste projeto foram:

- **React.js**: Biblioteca JavaScript para criação de interfaces de usuário.
- **SASS**: Pré-processador CSS para facilitar a manutenção e reutilização de estilos.
- **HTML5 e CSS3**: Estrutura e estilização básica da aplicação.
- **JavaScript (ES6+)**: Lógica e interatividade.
- **Webpack**: Para processamento e bundling de arquivos SCSS e JS.

## Demonstração

<!-- Incluir capturas de tela que demonstrem a troca de temas, o quiz e o feedback interativo. -->

## Como executar o projeto

Siga as etapas abaixo para rodar o projeto em sua máquina local:

### Pré-requisitos:
- Node.js (versão 22 ou superior)
- npm ou yarn

### Passo a passo:

1. **Clone o repositório**:
   ```bash
    git clone https://github.com/LeandroLuna/desafio-senac.git
    cd desafio-senac
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm start
   # ou
   yarn start
   ```

4. **Acesse no navegador**:
   
   O projeto estará disponível em: [http://localhost:3000](http://localhost:3000)

## Próximos passos

Embora o projeto atenda ao objetivo inicial, existem várias melhorias que podem ser implementadas para aprimorar a aplicação no frontend. Algumas dessas melhorias incluem:

### 1. **Migração para TypeScript**
   - **Utilização de TypeScript**: a migração do projeto para **TypeScript** pode trazer benefícios significativos, como a adição de tipagem estática, o que ajuda a reduzir erros em tempo de desenvolvimento e aumenta a legibilidade do código.
     - Definir interfaces para as props dos componentes (`Question`, `Feedback`, `Quiz`, etc.) para garantir a consistência no uso de dados.
     - Tipar as variáveis de estado (como `selectedOption`, `showFeedback`, `currentQuestion`) para evitar erros de tipo e melhorar a manutenção do código.
   
### 2. **Melhorias na Rrsponsividade**
   - **Ajustes finais de responsividade**: embora o projeto seja responsivo, pode-se realizar alguns ajustes para garantir que todos os componentes se comportem bem em dispositivos menores (como tablets e smartphones). Isso pode incluir:
     - **Fontes responsivas**: utilizar unidades relativas (como `em`, `rem`, `%`) para garantir que o tamanho das fontes seja adequado em todas as telas.
     - **Menus e botões**: ajustar o layout dos botões e menus para garantir que sejam acessíveis e usáveis em dispositivos móveis.
   
### 3. **Otimização da experiência do usuário**
   - **Transições suaves**: implementar animações suaves entre as mudanças de estado, como a transição entre perguntas e feedback, para melhorar a experiência do usuário.
     - Usar a propriedade `transition` no CSS para criar efeitos de fade, deslizamento ou transição entre elementos.
   - **Indicadores de progresso**: Adicionar uma barra de progresso ou um contador que mostre ao usuário quanto falta para terminar o quiz.

### 4. **Aprimoramento da acessibilidade (A11y)**
   - **Labels e foco**: garantir que todos os elementos interativos possuam **labels** adequados e que o foco seja gerenciado corretamente, permitindo navegação via teclado.
     - Implementar `aria-label`, `aria-live` para leitura de feedbacks de forma acessível para leitores de tela.
     - Garantir que os botões e inputs possuam estados de foco visíveis para melhorar a navegação com o teclado.
   
### 5. **Desempenho do Frontend**
   - **Minificação e otimização de CSS/JS**: configurar ferramentas de build (como Webpack) para minificar o CSS e o JavaScript, reduzindo o tamanho final do bundle e melhorando os tempos de carregamento.
   - **Renderização SSR/SSG/Hibrída**: implementar renderização do lado do servidor (SSR), renderização estática (SSG) ou renderização híbrida para melhorar o desempenho e a SEO da aplicação.
   - **Gerenciamento de estado com Context API ou Redux**: pensando na escalabilidade do quiz, considerar a utilização de um gerenciador de estado para manter a consistência dos dados e facilitar a comunicação entre componentes.

### 6. **Persistência de tema**
   - Implementar o armazenamento do tema selecionado no **localStorage** ou **cookies** para que a preferência de tema do usuário seja lembrada entre as sessões.

## Licença

Este projeto foi desenvolvido para fins de avaliação técnica e não possui uma licença específica.