# cypress-alura

Montar ambiente Cypress:

1 - Instalar o Nodejs

2 - Criar uma nova pasta para o projeto e abrir no vs code

3 - Conferir se o nodeJs e o npm estão instalados. Abrir um terminal no vscode e usar os comandos node -v e npm -v

4 - Usar o comando npm init no terminal do vscode no projeto

5 - Fazer a instalação do cypress no projeto pelo terminal npm i cypress --save-dev

6 - Comando para abrir o Cypress pelo terminal npm run test ou npx cypress open

7 - Podemos selecionar os elementos da pagina direto com uma ferramenta de mira na interface do cypress

8 - No Inspecionar(DevTools) do Chrome, podemos utilizar a ferramenta de seleção e clicando em cima do elemente irá 
aparecer uma modal contendo um caminho mais assertivo para aquele elemento de tela

9 - Podemos utilizar o Selector Playground(símbolo de mira) do Cypress para identificar o nome do elemento

npx - executor de pacotes npm

npx cypress open - comando setado no arquivo package.json para rodar os testes pelo terminal na interface do cypress

npx cypress run - comando para rodar os testes em background sem abrir a interface do cypress

10 - Instalar gerador de relatórios de testes npm i -D mochawesome

i referente a install no comando e -D referente a --save-dev 

11 - Adicionar a configuração do mochawesome-report no arquivo cypress.config.js

reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    overwrite: true,
    html: true,
    json: true,
    timestamp: "mmddyyyy_HHMMss"
  }

12 - Comando para rodar os testes pelo terminal vscode com report-mochawesome 
npx cypress run --reporter mochawesome

Realizar testes em modo headless significa não precisar de uma interface gráfica para interagir com o navegador. 
Consequentemente, os testes rodam mais rapidamente e podem ser executados a partir de ferramentas de integração contínua como Jenkins ou dentro de um container Docker, por exemplo.

13 - Comando npx cypress run --record --key 5573256a-55e6-4dae-8a27-2fb1a14ca206 para rodar os testes e vincular com o Dashboard do cypress

14 - Comando it.only('fazer login de usuario inválido', () =>, faz com que somente esses casos de testes sejam executados da suite de testes

15 - Instalar o pacote npm Fakerjs npm install --save-dev @faker-js/faker - utilizado para inserir dados dinâmicos e aleatórios

16 - Para ignorar arquivos que não desejamos que sejam commitados no git, adicionar o nome do arquivo no arquivo gitignore

17 - Configurar uma baseUrl no arquivo cypress.config.js como uma boa prática no cypress
