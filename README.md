# projeto-pedidos-lanchonete
## Projeto Back-End de uma API RESTFUL

### Resolução do problema

Para resolução do problema criei duas pastas de arquivos, uma voltada para os arquivos de front-end e outra para o back-end.
No server criei os end-points que seriam utlizados para as entidades: client, pedido, produto.
Fiz o teste de todos eles criando requests no Postman. Após a certificação da funcionalidade correta dos end-points prossegui para o front-end.
No front-end criei dois arquivos HTML, um voltado para o cadastro de clientes e outro destinado ao painel de controle do admin.
Apliquei o mesmo para os styles, um arquvio CSS para a página de cadastro de clientes e outro para o painel do admin. Fiz um link entre os arquivos CSS para evitar e diminuir a repetição de código.
Para os arquivos JS segui o mesmo padrão de divisão de arquivos. Neles realizei as validações dos formulários criados. E por fim, o consumo da API criada anteriormente.
O objetivo do projeto é o consumo de APIRestful seguindo o MVC. Logo o foco maior do desenvolvimento se deu no Back-End com a utilização do NodeJS. O Front-End foi desenvolvido com intuito apenas de consumir essa API.

### Executando o projeto

Após realizar o download dos arquivos em seu PC abra o Git Bash (caso esteja utilizando Windows) ou o terminal do seu Linux e inicie o servidor digitando:
  `npm run dev`
  
Iniciado o server acesse o painel do administrador no endereço: <https://matheusamon12.github.io/front-pedidos-lanchonete/admin.html> (O repositório do Front-End se encontra em: <https://github.com/MatheusAmon12/front-pedidos-lanchonete>). Irá se deparar com a tela de login, o usuário e senha de acesso são:
  * Usuário: admin
  * Senha: 12345678
  
Dessa forma terá acesso ao dashboard com as opções:
  * listar clientes
  * Listar Pedidos
  * Listar Produtos
  * Cadastrar Produtos

Será necessário criar no **Postman** as requests para os end-points que estão na pasta **routes** dos arquivos back-end. Pois nele irá obter os id's do cliente e produto para serem utilizados na criação de pedidos que deve ser feita por meio do Postman. Ressalto que o projeto contém uma página destinada apenas ao cadastro de clientes e uma página destinada ao Administrador que poderá gerenciar as informações acerca de pedidos, clientes e cadastro de produtos.(Obs.: os pedidos devem ser feitos via Postman para o endpoint <http://localhost:8080/lanchonete/pedidos>, só após poderá vizualizá-los na dashboard). As requests que irá precisar são: GET, POST, DELETE, PUT. Segue exemplo abaixo: 

<img src="C:\Users\amonm\OneDrive\Imagens\Capturas de tela\Routes Postman" alt="Rotas do Postman">

Para acessar a página de cadastro de clientes acesse: <https://matheusamon12.github.io/front-pedidos-lanchonete/client.html>. Insira as informações e cadastre.
As demais ações de excluir pedidos, clientes, produtos, cadastro de produtos, atualização de status poderão ser feitas ao efetuar a listagem de cada entidade no dashboard do admin.
