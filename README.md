# Painel de Gestão de Dashboards

Este painel foi desenvolvido para facilitar a gestão dos dashboards criados pela empresa. Nele, os usuários poderão acessar links de relatórios de forma pública, sem a necessidade de licenças. Além disso, o painel centraliza todos os conceitos relevantes, permitindo que os usuários realizem pesquisas e se mantenham atualizados sobre as últimas informações e alterações.

# Sobre a criação do projeto para visualização dos Dashboards

Criar projeto

    $   npx create-next-app@latest

Instalar no projeto

    $   npm install react react-dom  
    $   npm ls react react-dom primereact

TypeScript

    $   npm install @types/react @types/react-dom

Instalar o primereact

    $   npm install primereact primeicons

Instalar

    $   npm install sass


# Front-End

## Navbar

**Descrição:**

O componente Navbar é uma barra de navegação responsiva para websites. Ele inclui ligações para várias seções do site, como Home, About, Services, entre outros. O componente ajusta-se para visualização em dispositivos móveis, incluindo um menu hamburguer que expande as opções de navegação ao ser clicado.

***Instalação de Dependências:***

    $   Importar npm install primereact

No App

    $   import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

Exemplo de como vai ficar o componente App

```bash

    import { PrimeReactProvider } from 'primereact/api';

    export default function MyApp({ Component, pageProps }) {
        return (
            <PrimeReactProvider>
                <Component {...pageProps} />
            </PrimeReactProvider>
        );
    }
```
Instalar os icons
    $ npm install primeicons

Importar no componente
    $ import 'primeicons/primeicons.css';
        
Instalar outro componente de apoio 
    $ npm i -D daisyui@latest

Inserir plugin no documetno tailwind.config.ts

    $ require('daisyui'),

Instalar font awesome
    $ npm install @fortawesome/fontawesome-free

Importar no componente
    $ import '@fortawesome/fontawesome-free/css/all.min.css';

Este componente utiliza as seguintes bibliotecas do ecossistema Next.js, que devem ser instaladas para o correto funcionamento:

next/router para gestão de rotas. next/link para links otimizados que preparam as páginas no background.

***Instale essas dependências usando:***

```bash
    npm install next
```

***Observações Adicionais:***

Certifique-se de que as rotas especificadas no componente correspondem às definidas no seu aplicativo Next.js. O estado activeHash é utilizado para destacar a aba ativa na barra de navegação, baseando-se na rota atual ou no hash da URL.

O componente ajusta automaticamente o scroll para seções específicas da página em resposta a cliques, e gerencia a exibição do menu em dispositivos móveis.

## HomePage

**Descrição:**

O componente HomePage serve como a página inicial de um site de serviços de limpeza. Ele exibe uma mensagem de boas-vindas em um grande banner estilizado e oferece botões para ações rápidas como solicitar um orçamento (Quote) ou entrar em contato (Contact). Inclui também uma imagem central logo abaixo do texto de boas-vindas.

***Instalação de Dependências:***

Não são necessárias dependências externas para este componente funcionar, pois ele utiliza apenas recursos básicos do HTML e CSS providos pelo React e Tailwind CSS.

***Observações Adicionais:***

Certifique-se de que os identificadores de link usados nos botões (#FormQuote e #Contact) correspondam aos IDs das seções relevantes na sua aplicação para que o scroll automático funcione corretamente.

A imagem utilizada deve estar disponível no diretório público do seu projeto para ser corretamente carregada. Adjuste o caminho conforme necessário.

## About

**Descrição:**

O componente About apresenta informações detalhadas sobre a empresa, incluindo a filosofia de negócios, serviços oferecidos e detalhes operacionais. O layout é dividido em várias seções que destacam os valores da empresa, sua abordagem ao serviço ao cliente e flexibilidade nos horários de serviço. Inclui também imagens e um componente de vídeo para uma representação visual mais rica.

***Instalação de Dependências:***

Este componente requer a instalação do pacote react-router-dom para manipulação de rotas, caso o componente VideoComponent faça uso de navegação ou parâmetros de rota.

```bash
    npm install react-router-dom
``` 

***Observações Adicionais:***

Assegure-se de que as imagens e os vídeos utilizados no componente estejam corretamente referenciados e disponíveis no diretório público ou através de URLs válidas.

O componente faz uso de navegação interna com hashes para facilitar a navegação pelo usuário dentro da mesma página sem recarregamentos.

A funcionalidade de rolagem automática ao clicar nos links depende que os IDs correspondentes estejam corretamente atribuídos às seções dentro da página.

## SocialMedia

**Descrição:**

O componente SocialMedia é projetado para destacar as plataformas de mídia social da empresa, permitindo aos usuários seguir e interagir com a empresa em diferentes redes. Este componente combina elementos visuais como o logotipo da empresa e botões de ação que direcionam para os perfis sociais, incentivando o engajamento direto.

***Instalação de Dependências:***

Não são necessárias instalações adicionais de dependências para este componente, a menos que sejam utilizados frameworks ou bibliotecas externas para animações ou interações específicas.

## AboutUs

**Descrição:**

O componente AboutUs apresenta informações detalhadas sobre os valores e diferenciais da empresa, utilizando ícones e textos para destacar a importância de escolher seus serviços. Cada seção combina ícones visuais com descrições de serviços, refletindo a missão e os valores da empresa em fornecer soluções de limpeza de alta qualidade.

***Instalação de Dependências:***

Não há dependências externas específicas necessárias para este componente além das bibliotecas padrão do React e Next.js, assumindo que os ícones são SVGs incluídos diretamente no projeto.

## Contact

**Descrição:**

O componente Contact é utilizado para coletar informações de contato dos usuários através de um formulário interativo. Inclui campos para nome, email, telefone e mensagem. O formulário valida e envia os dados para um endpoint específico, mostrando uma mensagem de sucesso ou erro baseada na resposta do servidor.

***Instalação de Dependências:***

Este componente não requer instalações de dependências adicionais além das básicas do React e Next.js, assumindo que o servidor e endpoint para receber os dados do formulário já estão configurados e operacionais.

## Service

**Descrição:**
***
O componente Services apresenta uma seção do website que descreve os vários serviços oferecidos pela Oliver Business Cleaning Services. A seção é visualmente dividida em múltiplas subseções, cada uma destacando um tipo diferente de serviço como limpeza regular, limpeza profunda, limpeza pós-construção, limpeza para eventos especiais, e mais. Cada serviço é descrito com um título, uma breve descrição, e uma chamada para ação convidando o usuário a obter um orçamento. Imagens relevantes são utilizadas para complementar as descrições dos serviços.

***Instalação de Dependências:***

Não são necessárias instalações de dependências adicionais para este componente além das já existentes no projeto Next.js. Certifique-se de que as imagens utilizadas estão corretamente hospedadas e acessíveis no diretório /assets/Services/.

## Feedback

**Descrição:**

O componente Feedback é projetado para coletar feedback dos usuários sobre os serviços oferecidos. Ele inclui mensagens motivadoras para o usuário deixar uma avaliação e oferece links diretos para páginas de feedback externas, como o Google. O componente apresenta um layout organizado com opções para avaliação por estrelas, um campo de texto para mensagens detalhadas e botões para envio do feedback ou adiamento.

***Instalação de Dependências:***

Não são necessárias instalações de dependências adicionais para este componente além das já existentes no projeto Next.js.

## Testimonials - Feedbacks recebidos

**Descrição:**

O componente Testimonials apresenta depoimentos de clientes sobre os serviços oferecidos. Ele busca feedbacks de uma API, filtra e ordena os resultados que devem ser mostrados e os exibe de forma estilizada. Cada feedback é acompanhado de uma avaliação em estrelas, mostrando a satisfação do cliente. O componente também inclui uma lógica de fallback para mostrar dados fictícios em caso de erro no carregamento dos dados reais.

***Instalação de Dependências:***

Este componente requer o uso de React e pode necessitar de pacotes adicionais para fetch de dados, como axios ou fetch, já integrados no ambiente Next.js. Certifique-se de que as dependências relacionadas à gestão de estado e efeitos colaterais (como useState e useEffect de React) estejam corretamente importadas.

## Feedback Forms

**Descrição:**

O componente FormFeedback é utilizado para coletar feedback dos usuários através de um formulário na web. Este formulário permite que os usuários forneçam seus nomes, emails, uma nota de avaliação e uma mensagem de texto livre. As avaliações são visualizadas por meio de estrelas interativas que os usuários podem clicar para definir sua nota. Após o preenchimento, os dados são enviados para um endpoint de API para processamento adicional.

***Instalação de Dependências:***

Não há dependências externas específicas mencionadas que precisam ser instaladas para que este componente funcione, além das já utilizadas no projeto React.

## Quote - Orçamento

**Descrição:**

O componente Quote é uma seção interativa de um website projetada para guiar os usuários através do processo de solicitação de um orçamento para serviços de limpeza. A seção é dividida em três partes principais, cada uma descrevendo um passo do processo: iniciar o preenchimento do formulário, definir o tipo de serviço e escolher o dia e a hora do serviço. O componente está estilizado com cores escuras e fornece um link direto para um formulário de orçamento detalhado.

***Instalação de Dependências:***

Não há dependências externas específicas mencionadas que precisam ser instaladas para que este componente funcione, além das já utilizadas no projeto React.

## Form Quote - Formulário de orçamento

**Descrição:**

O componente FormQuote é um formulário multifásico interativo projetado para coletar informações detalhadas dos usuários para fornecer uma cotação personalizada de serviços de limpeza. Ele progride por quatro etapas principais: Informações Pessoais, Informações da Residência, Informações Adicionais e Agendamento. O usuário insere dados como nome, contato, endereço e especificações do serviço desejado. Cada etapa verifica se os campos obrigatórios estão preenchidos antes de avançar, e a submissão final envia os dados coletados para uma API.

***Instalação de Dependências:***

Este componente não requer a instalação de dependências adicionais além das já utilizadas no projeto React, como o useState e useRef para gerenciamento de estado e referência de elementos do formulário, respectivamente.

## Footer

**Descrição:**

O componente Footer é um rodapé estilizado que inclui links de navegação para várias seções do site, como Home, About, Services, Contact, Quote, Feedback, Teams e Dashboard. Além disso, oferece links diretos para as páginas sociais da empresa no Instagram, Facebook e Gmail, facilitando o acesso rápido às redes sociais. O design responsivo garante boa visualização em dispositivos variados.

***Instalação de Dependências:***

Este componente não requer instalações de dependências externas, pois utiliza apenas recursos básicos do React e Tailwind CSS para estilização, que são parte do ambiente padrão do projeto.

## Video componente

**Descrição:**
O VideoComponent é um componente React funcional que renderiza um elemento de vídeo. Ele é projetado para ser flexível com propriedades para especificar a fonte do vídeo (videoSrc), além de opcionalmente definir a largura (width) e a altura (height). O componente garante que o vídeo só será renderizado no lado do cliente, usando um estado para verificar se está executando no cliente após a montagem. Se o navegador não suportar a tag de vídeo, uma mensagem de fallback é exibida.

***Instalação de Dependências:***

Este componente não requer instalação de dependências adicionais além do React, que já é parte do ambiente de desenvolvimento padrão.

## Icones de contatos

**Descrição:**

O ContactWidget é um componente React funcional que serve como um widget de contato interativo. Ele permite ao usuário alternar a visibilidade de opções de contato, como email, SMS e WhatsApp, com um botão de fechamento para ocultar os contatos. O estado inicial é configurado para não mostrar os contatos (showContacts definido como false). O componente utiliza o hook useState para gerenciar a visibilidade e um botão para alternar esse estado. Estilizado para ser fixo no canto inferior direito da tela, ele se adapta bem a dispositivos móveis e desktops.

***Instalação de Dependências:***

Este componente não requer a instalação de dependências adicionais, já que utiliza apenas funcionalidades básicas do React (useState, useEffect) para seu funcionamento.

## Login

**Descrição:**

O componente LoginDashboard é utilizado para autenticar usuários no painel administrativo. Ele usa hooks do React (useState) para gerenciar o estado dos campos de entrada e de mensagens de erro, e o hook useRouter do Next.js para redirecionar após o login bem-sucedido. O formulário contém campos para e-mail e senha. A submissão do formulário é tratada de forma assíncrona, comunicando-se com uma API para validar as credenciais. Em caso de erro, é exibida uma mensagem ao usuário. O estado de carregamento é manipulado para feedback visual durante a requisição.

***Instalação de Dependências:***

Este componente não requer instalação de dependências adicionais, uma vez que utiliza recursos básicos do Next.js e React para funcionamento.

## Dashboard

**Descrição:**

O componente Dashboard é um painel administrativo dinâmico usado para gerenciar diferentes seções de dados como usuários, contatos, feedbacks e orçamentos. Ele incorpora um componente Sidebar para navegação, permitindo ao usuário selecionar a seção desejada. Dependendo da seção selecionada, um componente de tabela apropriado (TabelaUsuarios, TabelaContatos, TabelaFeedbacks, TabelaOrcamentos) é renderizado para exibir os dados pertinentes. O componente utiliza useState para gerenciar o estado da seção atual, o carregamento de dados e os dados em si. A função fetchData, que busca dados da API correspondente à seção atual, é otimizada com useCallback e reexecutada a cada mudança de seção através de um useEffect.

***Instalação de Dependências:***

Não são necessárias instalações de dependências externas adicionais, pois o componente usa funcionalidades básicas do React e do Next.js, juntamente com chamadas de API via fetch.

## Tabela com dados dos usuários - Uso de API do próprio Next route

***Essas quatro tabelas estão em um fluxo do front e back, junto com consumo das informações do banco de dados.***

**Descrição:**

O componente TabelaUsuarios é responsável por renderizar uma tabela com informações de usuários, como nome, email e telefone, e oferece opções para editar e excluir cada usuário. Quando um usuário decide editar ou excluir um usuário, são apresentados modais (EditarUsuarioModal e ConfirmarExclusaoModal) que permitem realizar essas ações de maneira interativa. O estado do usuário selecionado para edição ou exclusão é gerenciado usando o hook useState. Ações de salvar as alterações ou confirmar a exclusão fazem chamadas à API e, em caso de sucesso, atualizam a lista de usuários chamando a função onRefresh fornecida por props.

***Instalação de Dependências:***

Não são necessárias instalações de dependências externas adicionais, pois o componente utiliza principalmente funcionalidades do React, além de requisições HTTP via fetch para interação com uma API externa.

## Tabela com dados dos contatos registrados pelo formulário

**Descrição:**

O componente TabelaContatos é utilizado para exibir uma tabela de contatos, cada um com detalhes como nome, email, telefone e mensagem. O componente permite editar ou excluir contatos através de modais específicos (EditarContatoModal e ConfirmarExclusaoModal). A atualização e exclusão de contatos são realizadas via chamadas API, e qualquer mudança na lista de contatos resulta na chamada da função onRefresh para atualizar os dados exibidos.

***Instalação de Dependências:***

Não são necessárias instalações de dependências externas adicionais, visto que o componente depende principalmente de React e fetch para requisições API, já incluídos ou facilmente integráveis em um projeto React moderno.

## Tabela com dados dos feedbacks

**Descrição:**

O componente TabelaFeedbacks é responsável por apresentar uma lista de feedbacks em uma tabela formatada, permitindo operações de edição e exclusão de entradas individuais. Ele integra funcionalidades modais para editar (EditarFeedbackModal) e confirmar exclusão (ConfirmarExclusaoModal) de feedbacks. As operações de atualização e exclusão são realizadas através de requisições API.

***Instalação de Dependências:***

Não são necessárias instalações de dependências adicionais além das já utilizadas no projeto React, como o React Router para navegação (caso haja interação com outras páginas) e a biblioteca Fetch para requisições HTTP. Certifique-se de que o projeto está configurado para suportar operações assíncronas e modais de interface.

## Tabela com Orçamentos

**Descrição:**

O componente TabelaContatos (possivelmente renomeado erroneamente, deveria ser TabelaOrcamentos) é responsável por exibir uma lista de orçamentos em uma tabela interativa, permitindo operações como edição e exclusão de entradas individuais. Ele integra modais para editar (EditarOrcamentoModal) e confirmar exclusão (ConfirmarExclusaoModal) de orçamentos. As operações de atualização e exclusão de dados são realizadas através de requisições API.

***Instalação de Dependências:***

Não há necessidade de instalar dependências adicionais para este componente, supondo que o projeto já inclua o React e funcionalidades para chamadas de API (fetch). É importante verificar se o componente de modal está corretamente importado e funcionando dentro do contexto do projeto. Assegure-se também de que o gerenciamento de estado e os hooks do React estão sendo utilizados conforme as boas práticas recomendadas para manipulação de estados complexos e efeitos colaterais em componentes funcionais.

## Back-End

Arquivo auth.js na pasta Lib

**Descrição:**

O módulo verifyToken é responsável por validar tokens JWT (JSON Web Tokens) usando a biblioteca jsonwebtoken. Ele extrai a chave secreta de uma variável de ambiente JWT_SECRET e utiliza essa chave para verificar a validade do token fornecido. Se o token for válido, retorna o payload descriptografado; se inválido, lança um erro indicando que o token é inválido.

***Instalação de Dependências:***

Para utilizar este módulo, você precisa instalar a biblioteca jsonwebtoken, que pode ser feita usando npm ou yarn. Aqui estão os comandos para instalar a dependência:

Usando npm:

```bash
    npm install jsonwebtoken
```

Usando yarn: 

```bash
    yarn add jsonwebtoken
```

Assegure-se também de que a variável de ambiente JWT_SECRET está corretamente configurada no seu ambiente de desenvolvimento ou produção para garantir a segurança e funcionamento correto da verificação do token.

No terminal do Linux ou macOS, você pode usar o comando openssl para gerar uma chave secreta:

Digite:

```bash
    openssl rand -base64 64
```

## Arquivo mongodb.ts - Criar a conexão com o banco

**Descrição:**

O código é uma configuração de conexão com o banco de dados MongoDB usando o MongoDB Driver para Node.js. Ele gerencia a criação de uma conexão ao banco de dados MongoDB, reutilizando instâncias de conexão (cliente e banco de dados) para otimizar o desempenho e os recursos. As variáveis de ambiente MONGODB_URI e MONGODB_DB são usadas para configurar a conexão sem expor detalhes sensíveis no código. Caso essas variáveis não estejam definidas, o sistema lança um erro para alertar sobre a configuração faltante. O sistema de cache impede múltiplas conexões desnecessárias, essencial para aplicações com alta demanda de acesso ao banco de dados.

***Instalação de Dependências:***

Este script requer a instalação do pacote mongodb, que inclui as classes MongoClient e Db utilizadas no script.

Instale o pacote MongoDB com o seguinte comando no terminal: 

```bash
    npm install mongodb
``` 

Assegure-se de que as variáveis de ambiente MONGODB_URI e MONGODB_DB estejam definidas no seu ambiente ou arquivo .env.local para a correta configuração da conexão com o banco de dados. Este setup é crucial para aplicações que utilizam MongoDB como sua base de dados, garantindo uma gestão eficiente das conexões de banco de dados, especialmente em ambientes de produção onde a estabilidade e performance são críticas.

As variaveis podem ser inseridas no arquivo .env.local (Precisa criar ele no mesmo nivel que a pasta SRC)

## .env.local

# Models

**Descrição:**

O código define uma interface Usuario para tipagem de dados de um usuário em TypeScript. Esta interface é utilizada para garantir que os objetos de usuário tenham um contrato bem definido dentro do código, o que inclui nome, email, telefone e senha. A utilização desta interface facilita a manutenção e escalabilidade do código, garantindo que todas as operações relacionadas a usuários estejam alinhadas com as definições estabelecidas.

***Instalação de Dependências:***

Não há necessidade de instalar dependências adicionais para definir interfaces em TypeScript. A única exigência é que o projeto esteja configurado para utilizar TypeScript.

Para garantir que seu projeto suporte TypeScript, instale o TypeScript globalmente ou no seu projeto:

```bash
npm install typescript --save-dev
``` 

Certifique-se de configurar o seu tsconfig.json apropriadamente para o uso adequado do TypeScript no projeto. Essa abordagem de tipagem é fundamental para projetos TypeScript, pois oferece segurança adicional em tempo de desenvolvimento, ajudando a prevenir muitos tipos de erros comuns em JavaScript ao assegurar que os dados estejam corretos e completos conforme especificado.

## Pasta Page > API > Criar todas as acões como criar algo, buscar dados no banco, atualizar ou excluir. CRUD

**Descrição:**
Este código define um API handler para uma aplicação Next.js, responsável por gerenciar solicitações para a rota de usuários. O handler suporta apenas requisições do tipo GET. Quando uma requisição GET é feita, ele se conecta a um banco de dados MongoDB usando a função connectToDatabase importada, consulta a coleção t_usuario para recuperar todos os registros, e retorna esses dados ao cliente após transformar o campo _id do MongoDB em uma string para compatibilidade com JSON. Se qualquer outro método HTTP for utilizado, como POST ou DELETE, a resposta indicará que o método não é permitido.

***Instalação de Dependências:***

Para que este código funcione corretamente, é necessário que algumas dependências estejam instaladas e configuradas no projeto:

# Next.js:

Já deve estar instalado se você está trabalhando em um projeto Next.js. Se não, você pode instalar usando: bash

```bash
    npm install next react react-dom
``` 

# MongoDB e Cliente do MongoDB para Node.js:

A conexão com o banco de dados MongoDB é feita através do cliente oficial do MongoDB para Node.js. Instale com:

```bash
    npm install mongodb
``` 

dotenv (Opcional):

Se você estiver usando variáveis de ambiente para gerenciar sua conexão com o banco de dados (o que é uma prática recomendada), você pode precisar do pacote dotenv para carregar essas variáveis de um arquivo .env durante o desenvolvimento:

```bash
    npm install dotenv
``` 

Antes de executar o handler, garanta que seu arquivo .env.local (ou similar, dependendo do seu ambiente) esteja configurado com as variáveis MONGODB_URI e MONGODB_DB corretas para permitir a conexão ao banco de dados. Isso garantirá que as operações de banco de dados sejam executadas corretamente sem expor detalhes sensíveis do banco em seu código.

# Enviar e-mail

**Descrição:**

O código define um handler de API para um aplicativo Next.js que lida com requisições POST para enviar emails através do serviço de email do Node.js, o nodemailer. Este handler recebe dados de um formulário (como nome, email, serviço, localização e mensagem) e utiliza essas informações para configurar e enviar um email. A função verifica se as credenciais necessárias estão disponíveis e configuradas corretamente no ambiente antes de proceder com o envio do email. Logs são implementados para ajudar na depuração e monitoramento do processo de envio.

***Instalação de Dependências:***

Este handler requer a instalação do nodemailer, uma biblioteca que facilita o envio de emails a partir de aplicações Node.js. Para instalar esta dependência, execute o seguinte comando:

```bash
    npm install nodemailer
``` 

# Configuração de Ambiente:

Antes de usar este handler, é crucial configurar variáveis de ambiente que armazenam as credenciais para autenticação com o serviço de email. 
As variáveis EMAIL_USER e EMAIL_PASSWORD são essenciais para a autenticação, e EMAIL_DESTINATARIO define para qual email as mensagens serão enviadas. Essas variáveis devem ser definidas em um arquivo .env.local para desenvolvimento local ou configuradas diretamente no ambiente de produção para garantir a segurança das credenciais.

# Considerações de Segurança:

Garanta que as credenciais do serviço de email não sejam expostas ou armazenadas em locais inseguros. Verifique e valide os dados recebidos no corpo da requisição para evitar injeções ou outros ataques que podem comprometer a segurança do servidor ou dos dados de usuários.

Este handler é otimizado para uso em produção com configurações de ambiente seguras e práticas de codificação que previnem a exposição involuntária de dados sensíveis.

Instalar

    $   npm i --save-dev @types/bcryptjs

# Acesso aos EndPoints

instalar

    $   npm install axios

Validação com Swagger

    $ npm install swagger-ui-express swagger-jsdoc

Criar pasta em back-end

criar arquivo chamado swagger.js

arquivo

```bash
    import express from 'express';
    import swaggerUi from 'swagger-ui-express';
    import swaggerJsDoc from 'swagger-jsdoc';

    const app = express();

    // Configuração do Swagger
    const swaggerOptions = {
        swaggerDefinition: {
            openapi: '3.0.0',
            info: {
                title: 'API de Usuários',
                version: '1.0.0',
                description: 'Documentação da API para cadastro de usuários',
            },
            servers: [
                {
                    url: 'http://localhost:3000', // Altere conforme necessário
                },
            ],
        },
        apis: ['./routes/*.js'], // Caminho para suas rotas
    };

    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    // Exportar o app para ser usado em outros arquivos
    export default app;
```
