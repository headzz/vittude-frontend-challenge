# Vittude Front End Challenge

## Sobre

Este repositório contém desafio que consisitia em criar um app responsivo em React. Para este projeto foi utilizado NextJS.

## Requisitos Iniciais

Este projeto foi criado utilizando **Node v16.18.0** e **NextJS v13**.

Versão do Node `16+` deve ser suficiente neste momento para conseguir utilizar esta aplicação.

O arquivo **.env** possui uma dependência de desenvolvimento, que é a definição da url da API. Caso rode local, ela será localhost:

```
NEXT_PUBLIC_API_URL
```

## Instalação

Após clonar este repositório será necessário instalar suas depndências.

Para instalar todos os pacotes do serviço basta executar o comando:

```
npm install
```

## Executando o projeto

Para inicializar a aplicação basta realizar:

```
npm run dev
```

## Demo

Através do seguinte link é possível encontrar um live demo da aplicação:

[https://vittude-frontend-challenge.vercel.app/](https://vittude-frontend-challenge.vercel.app/)

### Realizando Login

Os dados estão mockados para realizar o login. Estão presentes dentro no arquivo:

> pages/api/data.ts

### Organização do Repositório

- **components** - estão presentes os componentes reutilizáveis da aplicação
- **hooks** - estão presentes os hooks personalizados da aplicação
- **modules** - onde foram criados as estruturas de cada página.
- **pages** - pasta padrão do NextJS que estão associadas a estrutura de rotas e apis internas.
- **services** - definição dos serviços a serem utilizados
- **styles** - definição global de estilos, como tema a ser utilizado, tipagem e reset css
- **utils** - pasta onde existem funções geradas para ser utilitários reaproveitados na aplicações.

## Considerações finais:

O serviço de login realizado foi abaixo do esperado. No momento desta publicação ele serve mais como um simulador de comportamento. Para melhorias futuras ficaria o ajuste de verificar o usuário logado e levar para sua página específica.

O serviço de recuperação de senha até foi testado com a plataforma de envio de email do emailJS, mas a falta de tempo para finalizar o fluxo não possibilitaram existência do serviço.

No primeiro momento Storybook existiu no repositório e foi utilizado, entretanto conforme a aplicação foi evoluindo novos problemas com a sua utilização foram surgindo. Além disso, ocorreram problemas de configuração com o SWC do Next e o .babelrc que era configuração para o Storybook. Logo houve a troca de ter a documentação mais robusta, pelo tempo de desenvolvimento. As interfaces encontram-se bem definidas para facilitar o entendimento.

O Header da página após estar logado ficou totalmente fora do padrão. Ficaria de melhoria futura realizar um ajuste no visual.

Existem alguns testes básicos no projeto, mas ainda é necessário aprofundar em alguns deles. Além disso precisam existir testes de integração e E2E.
