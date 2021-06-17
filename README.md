## Solução para o Teste de Frontend Developer

### Autor: José Marcio Rezende Franco

## Visão geral do projeto

Seja bem-vindo ao repositório do projeto do meu teste de _frontend developer_.

Gostaria de antes de mais nada apresentar a partir deste **readme** uma visão geral do projeto. Note que foi tomado o cuidado de manter comentários no código de forma a facilitar a leitura, então a documentação do mesmo não se resume a esta parte, mas apenas se inicia. Eu preferi utilizar o português como idioma padrão para a documentação e nomes de variáveis, funções, classes e componentes, mas provavelmente num projeto real eu teria utilizado a língua inglesa, de forma a manter uma padronização.

Toda o projeto foi desenvolvido utilizando o **React 17.0.2** (https://reactjs.org/). Esta era a versão mais recente da biblioteca disponível durante o desenvolvimento deste projeto, portanto é recomendado que esta versão seja utilizada.

A implementação da solução foi pensada desde o início focando nos seguintes pilares: documentação, clareza de código (note que vários princípios do **Clean Code** foram utilizados neste projeto), integração aos testes e escalabilidade.
É importante notar que devido ao projeto ser pensado de forma a ser totalmente modular, a inserção de novos componentes de forma a fornecer novas funcionalidades, é facilitada.

Como plataforma de testes, resolvi utilizar o **RTL - React Testing Library**, devido ao fato de já ser nativamente integrada ao _framework_ facilitando a execução dos testes em qualquer ambiente React. Maiores detalhes a respeito dos testes estão descritos em seção própria, logo abaixo.

Para pré-processamento do CSS, foi utilizado o **SASS** (https://sass-lang.com/). Note que cada componente criado, possui um arquivo do SASS (scss) correspondente, no lugar de um .css comum. Deixei tudo devidamente modularizado para facilitar a manutenção. Note em cada componente, antes de se carregar a folha de estilos correspondente, primeiro carrega o arquivo _reset.css_ que está na raíz do diretório _components_. Ele serve para remover os padrões de cada browser a fim de ter uma experiência mais padronizada independente do browser ou do dispositivo utilizado. A partir disso, toda a estilização fica a cargo somente da folha de estilos expandida _style.scss_ correspondente a cada componente.

Está sendo utilizado diretamente, através do uso do **SASS 1.34.1**. Vale notar que foi utilizado também o **Node 16.3.0** e seu instalador NPM correspondente.
Caso seja necessário, você talvez considere útil utilizar o comando `npm install --save-dev sass` para instalar corretamente a versão mais recente do SASS.

Para manter um padrão de gerenciamento de estados, cogitei a utilizar o **Redux-saga** (https://redux-saga.js.org/). Porém devido ao escopo do projeto achei que toda a funcionalidade disso poderia ser de forma mais fácil ser implementada e diminuindo a complexidade para ser avaliada. Hoje em dia, muitos problemas de _Prop drilling_ são resolvidos utilizando a própria _context API_ do React (https://pt-br.reactjs.org/docs/context.html). Pensando no pilar descrito de tornar o código o mais claro e simples, foi tomada a decisão de não utilizar neste primeiro momento o **Redux-saga**. Mas tenho a consciencia da viabilidade do uso dele em projetos maiores, principalmente para lidar melhor com alguns _side effects_. Note que numa expansão este recurso pode ser implementado no projeto de forma simples, já que o mesmo foi pensado em permitir esse tipo de expansão.

Como linter, de forma a manter um padrão de codificação e evitar pequenos erros, foi utilizado o **ESlint** e para automatizar essa formatação, assegurando regras de estilo no design do código foi utilizado o **Prettier**.

Para gerenciamento de pacotes e build de projeto, foi utilizado o **Yarn v1.22.10** (https://yarnpkg.com/).

Notemos que todas as dependências foram instaladas como _dev dependencies_ e o _package.json_ contém as configurações com as dependências mais importantes.

## Exemplos de telas de navegação

Os _screenshots_ a seguir servem para ilustrar o _web app_ rodando num dispositivo móvel, com o sistema _Android_, utilizando o browser **Chrome mobile 91.0.4472.88**

<img src="/exemplosTelas/0pontos.jpg" height="450px" title="0 pontos" tag="Screenshot aplicação para 0 Pontos"><img src="/exemplosTelas/30pontos.jpg" height="450px" title="30 pontos" tag="Screenshot aplicação para 30 Pontos"><img src="/exemplosTelas/60pontos.jpg" height="450px" title="60 pontos" tag="Screenshot aplicação para 60 Pontos"><img src="/exemplosTelas/90pontos.jpg" height="450px" title="90 pontos" tag="Screenshot aplicação para 90 Pontos"><img src="/exemplosTelas/100pontos.jpg" height="450px" title="100 pontos" tag="Screenshot aplicação para 100 Pontos"><img src="/exemplosTelas/anabele.jpg" height="450px" title="Screenshots com dados diferentes" tag="Screenshot aplicação com dados diferentes sendo enviados pela API">

## Estrutura

### Simulando o envio de dados por uma API

O componente _services/usuario.js_ foi desenvolvido de forma a simular uma API que enviaria estes dados para o _Web App_. Temos tanto o envio das variáveis como uma simulação de erro desenvolvida na estutura deste componente.
Temos 4 variáveis que podemos setar conforme quisermos por ali:

- foto: É uma variável tipo _String_ onde você pode colocar um endereço _web_ que represente uma foto em um padrão de imagens válido.
- nome: É uma variável do tipo _String_ onde você pode inserir um nome para o usuário, como "Maurivan Luiz", por exemplo.
- score: É uma variável do tipo _number_, onde um score inicial pode ser setado.
- ok: É uma variável booleana, onde _true_ representa que a requisição à API foi bem sucedido e _false_, que houve uma falha, retornando um _alert_ de erro, nesta situação.

### Interface de usuário e serviços (view)

- Foi tomado o cuidado desta e de todas as interfaces serem _mobile friendly_, já que mais de 80% dos usuários acessam através de um dispositivo móvel.
- É mostrada a interface que será mostrada para aquele usuário, de acordo com as características de seu perfil, conforme segue:
  - Caso a pontuação esteja **abaixo de 30**, ele recebe ofertas para negociar suas dívidas;
  - Caso sua pontuação esteja entre **31 e 60**, ele está elegível para solicitar crédito, podendo escolher uma das proposta oferecidas;
  - Caso sua pontuação esteja **acima de 50**, será apresentado para ele um _card_ com um plano de proteção ao RG;
  - Caso sua pontuação esteja **acima de 90**, ele receberá um desconto (%) para obter o seu programa de proteção ao RG.
- Estes itens, são mostrados em pequenos _cards_ que são ou não exibidos de acordo com seu score.
- Algumas liberdades precisaram ser tomadas de forma a simular que o usuário ao clicar num _card_ de oferta de negociação de dívida, simulamos que esta negociação imediatamente aconteceu, pois normalmente esses dados viriam através de uma API externa. Dessa forma, foi decidido que ao clicar no _card_ de negociar a dívida, automaticamente e imediatamente o usuário já teria negociado. Claro que não seria assim num ambiente real, mas é uma ótima forma de simular esse comportamento. Sendo assim, ao clicar no _card_, a página real do serviço fictício **Serviço Limpa Nome** (https://www.servico.com.br/limpa-nome-online/) é aberta numa nova guia e 30 pontos de score são fornecidos automaticamente ao usuário. Com essa pontuação já notamos uma mudança na jornada do usuário no aplicativo, com novas telas e cores sendo mostradas.
- Da mesma forma, ao clicar em solicitar crédito, a página do **Serviço Crédito** (https://www.servico.com.br/credito/) é mostrada e ao clicar no programa de proteção ao RG, a página real do **Serviço Premium** é fornecida (https://www.servico.com.br/premium/). Sempre que o usuário clica num link de um serviço desses, é feita a simulação acrescentando 30 pontos (até o limite de 100, é claro) no _score_ do usuário.
- De acordo com a situação financeira do usuário, não apenas as opções mudam, mas também toda a interface.
  - Abaixo de 30 pontos a interface tem um degradê baseado na cor laranja (#FF8C00)
  - Entre 31 e 60, a interface tem um degradê baseado na cor azul clara (#B0E0E6)
  - Entre 61 e 90, a interface tem um degradê baseado na cor verde água (#7FFFD4)
  - Acima de 90, a interface tem um degradê baseado na cor verde escuro (#008000)
- Acompanhando esse padrão, a frase gerada embaixo do score na visualização principal e a barra ao redor da foto de perfil, também se transformam de acordo com o score, seguindo o mesmo padrão listado acima.
- É mostrado a foto do usuário, o score e abaixo dele uma link "Saiba mais", que abre em nova guia com a página fictícias de explicações sobre este score (https://www.servico.com.br/score) caso seja clicado. Também aparecem os cards de ofertas ao usuário. E as opções disponíveis de acordo com o score daquele usuário.

## Árvore de arquivos

De forma a modularizar o projeto, facilitando a manutenção e adição constante de novas features, optei por separar cada componente em um diretório próprio. Cada diretório possui seu arquivo _.jsx_ (código fonte do componente), seu teste associado (_.test.jsx_), uma folha de estilo expandida do SASS (usando o padrão de _style.scss_). Todos os componentes sempre carregam inicialmente a mesma folha de estilos de _reset_ (_reset.css_) que permite que as páginas sejam consistentes, independente do dispositivo ou browser utilizado para visualizar o projeto. Este arquivo se encontra na raíz do diretório _components_.

O _App.js_ que é o componente principal da aplicação, é o único componente que está na raíz do diretório _src_ (junto com seus arquivos associados), sendo que todos os arquivos presentes na pasta _src_ são os arquivos que renderizam a página principal e que chamam os componentes. Todos os outros componentes existem como pastas na estutura _components_.

Os _cards_ de mensagem que aparecem ao usuário de acordo com sua jornada de navegação (_CardCredito, CardNegociar, CardProtecaoRG_) estão organizados no diretório _cards_, dentro também de **components**.
Esta estrutura é pensada em facilitar ao máximo a leitura e organização do código, de forma a facilitar a manutenção.

```
src
├───components
│   ├───cards
│   │   ├───CardCredito
│   │   ├───CardNegociar
│   │   └───CardProtecaoRG
│   └───UsuarioPagina
└───services
```

Todos os caminhos foram pensados seguindo padrões modernos de manutenção de projetos no _framework_ **React**.

## Testes automatizados

Foram implementados diversos testes automatizados para verificar constantemente a estabilidade do sistema a cada atualização.
Para implementação destes testes foi utilizada a **RTL - React Testing Library**.
Primeiramente, todos os componentes verificam se renderizam corretamente o conteúdo, através de um teste de render, em todos os componentes.
Também implementei testes simples para verificar se o conteúdo esperado está devidamente sendo apresentado na view da aplicação.
São testes simples, mas essenciais de serem feitos, garantindo que estes comportamentos continuem funcionando adequadamente, mesmo com novos updates no código.
Obviamente num projeto maior e do "mundo real", implementaria mais testes e mais variados, mas para pelo menos garantir essas características mais básicas, os testes implementados já devam ser suficientes.
Perceba também, que a maioria dos testes contidos neste projeto são testes unitários. Geralmente, costumo utilizar testes de integração também e testes e2e, estes geralmente utilizando o **Cypress**, mas resolvi que devido a escala inicial deste projeto, esse tipo de solução não agregaria tanto valor na solução final e poderia aumentar desnecessariamente a complexidade e entendimento do mesmo. Mas em projetos maiores e do "mundo real", esses tipos de testes são bastante recomendados.

## Detalhes adicionais

Mesmo se tratando de um teste, acho bastante relevante ter tomado todo o cuidado de apresentar essa solução o mais caprichada e profissional possível, dentro do tempo específicado.
Acho importante num projeto, mesmo que simples, buscar sempre o profissionalismo e constantemente aprender durante esse processo. Certamente foi o caso neste trabalho.
Como nota a quem quiser expandí-lo, um caminho natural de expansão seria integrá-lo a _APIs_ externas, que forneçam dados a respeito da navegação do usuário nestas outras rotas. Poder oferecer uma experiência que se adapte de acordo com o que se torna relevante ao usuário é um dos maiores desafios em sistemas front-end modernos. Também é interessante que os dados de dívidas pendentes sejam recebidas também por uma API externa, já que o mesmo se encontra _hardcoded_ de forma a se cumprir os requisitos deste projeto inicial.

Abaixo seguem-se a proposta de projeto fornecida e o texto do arquivo _"getting started"_ gerada automaticamente pelo _Yarn_, que fornece instruções de execução deste projeto utilizando este gerenciador de pacotes que podem ser úteis.

---

## Teste Frontend

Estamos muito felizes em saber que você chegou até aqui. Realize o teste com calma, essa é a oportunidade de demonstrar suas habilidades e conhecimentos!

**É hora de codar!**

Imagine que...

Você trabalha em uma plataforma com taxa de acesso por smartphone em +80%. Todos os usuários do seu sistema possuem uma **pontuação de 0 - 100**, ela influencia diretamente na jornada de cada um. Portanto, sua tela e elementos apresentados terão cores e ordenação de acordo com este valor.

O **range de pontuação** é definido com base na situação financeira do usuário, são elas:

- Caso a pontuação esteja **abaixo de 30**, ele recebe ofertas para negociar suas dívidas;
- Caso sua pontuação esteja entre **31 e 60**, ele está elegível para solicitar crédito, podendo escolher uma das proposta oferecidas;
- Caso sua pontuação esteja **acima de 50**, será apresentado para ele um card com um plano de proteção ao RG;
- Caso sua pontuação esteja **acima de 90**, ele receberá um desconto (%) para obter o seu programa de proteção ao RG.

#### Instruções:

- Para buscar as informações dos cards é necessário enviar a pontuação do usuário;
- Cada vez que o usuário fechar uma dívida/aceitar uma proposta/adquirir o plano de proteção, você deverá alterar a pontuação do usuário. Fazendo com que cards apresentados sigam as regras de pontuação;
- Crie uma estrutura que forneça os dados para a sua aplicação.

#### Tecnologias:

Utilize React ou Angular no desenvolvimento. Caso não sinta confortável com as opções, desenvolva com outra da sua preferência! :D

#### Você ganhará pontos extras, se:

- Utilizar um pré-processador (SASS, Stylus, LESS, ...);
- Utilizar [redux-saga](https://redux-saga.js.org/);
- Escrever teste unitário (Lib/Framework da sua preferência);
- Documentar a solução;
- Desenvolver um código limpo e bem organizado.

#### Observações:

- Utilize o layout como uma base para o desenvolvimento, podendo utilizar a criatividade para editar os componentes visuais a fim de atender as necessidades do que foi pedido (É interessante justificar o motivo da alteração).

Em caso de dúvidas, envie um e-mail para o recrutador que entrou em contato com você.

Aguarde a avaliação do seu teste e feedback do recrutador.

### Boa sorte!

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
