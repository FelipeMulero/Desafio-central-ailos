
Central Ailos

# 💻 Sobre o projeto: 
Foi desenvolvido 2 telas uma para fazer a busca do CPF do cooperado que consta no banco de cpf's e depois de ser validado o CPF vai para a próxima tela onde mostra as informações do cooperado.

No componente NavBar acessa a tela atraves do campo de busca e quando o usuário tenta acessar as outras telas vem um feedback que elas estão em manutenção.

E através do footer o usuário consegue acessar o modal de 'Check-list para abertura de conta' através do botão 'Dicas para abertura de conta' e no botão 'Iniciar nova admissão' é redirecionado para uma tela em manutenção.

Projeto desenvolvido para o desafio central ailos.

# 💡 Autor: 
Felipe Mulero

# Link útil

Aplicação em Produção:
https://central-ailos.netlify.app


# 🛠️ Tecnologias utilizadas
Frontend

Angular,
ngx,
rxjs,
SCSS,
TypeScript,
Angular Material,
Netlify.

# 📌 Funcionalidades
# Atualização de conteúdo em tempo real para o usuário.
# Usuário consegue visualizar os conteúdos que estão todos disponíveis na tela.
# Administrador consegue visualizar quantos usuários concluíram aquele conteúdo.

Futuras melhorias

Os usuarios da plataforma irão conseguir visualizar:
Acessar as telas que ainda faltam ser desenvolvidas e adicionar uma API para fazer 
o tratamento dos cpf's com uma Api externa.


Também será possível:

# Adicionar um módulo de dashboad
# Edição do perfil de usuário;
# Edição de conteúdos já criados;

# Informações para iniciar o projeto local:
# Opção de versão do node 
14.16.0

#Angular CLI 
13.2.6.

#npm install

#npm start

# Porta de acesso http:

http://localhost:4200/

# Como fazer o teste

Utilize os seguintes cpf's para testar o sistema: 
11122233344, 
78198746512, 
90384854921, 
13674575896, 
61045795747.

# Mock do teste:

    {
        cpf: '11122233344',
        name: 'Marieane de Souza Oliveira',
        aplicationAccount: '557932-4',  //Conta aplicação
        checkingAccount: '778461-8',    //Conta recorrente
        verifyCPF: 'Regular'
    },
    {
        cpf: '78198746512',
        name: 'Roberto Conceição',
        aplicationAccount: '912734-5',  //Conta aplicação
        checkingAccount: '092164-5',    //Conta recorrente
        verifyCPF: 'Bloqueado'
    },
    {
        cpf: '90384854921',
        name: 'Henrique das Flores',
        aplicationAccount: '621741-5',  //Conta aplicação
        checkingAccount: '543127-5',    //Conta recorrente
        verifyCPF: 'Regular'
    },
    {
        cpf: '13674575896',
        name: 'Guilherme Silvano',
        aplicationAccount: '234618-5',  //Conta aplicação
        checkingAccount: '712089-5',    //Conta recorrente
        verifyCPF: 'Regular'
    },
    {
        cpf: '61045795747',
        name: "Emanuel Bezerro",
        aplicationAccount: '921812-5',  //Conta aplicação
        checkingAccount: '872151-5',    //Conta recorrente
        verifyCPF: 'Regular'
    },


