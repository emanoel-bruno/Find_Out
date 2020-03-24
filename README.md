# Find Out

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) e Laravel 7.0

# Tutorial

## Montar os containers

    docker-compose build

## Rodar os containers

    docker-compose up -d

## Rotas

As Rotas que o conteudo foi implemantado são:

- /api/redesociais/ranking
- /api/redesociais/ranking/deputados
- /api/gastos/deputado/ano/mes
- /api/gastos/deputado/ano
- /api/gastos/ano/mes
- /api/gastos/ano

## Observações

- Para o funcionamento é necessario executar os seguintes comandos dentro do container back

    cd back
    php artisan migrate:refresh
    php artisan db:seed

- O front roda na porta 3000 e o back na 80
- Não foi implementada a visualização do conteudo no front ainda mas esta quase funcional



## Fontes

### [Problema com compartilhamento de drive](https://tomssl.com/2018/01/11/sharing-your-c-drive-with-docker-for-windows-when-using-azure-active-directory-azuread-aad/)

### Composer

#### Update composer when have a problem on lock

    composer update --lock
