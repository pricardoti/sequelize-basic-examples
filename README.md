
# Exemplos Básicos de execução do Sequelize

*Projeto para prática (laboratório) utilizando NodeJS e Sequelize, sem frontend. Portanto, toda a interação com o usuário é via terminal.*

- Migrations
- Seeders

## Instruções

##### Para configurar o projeto, faça:

```cmd
  $ cd [pasta raiz do projeto]
  $ npm intall
```

![Obter token](https://github.com/pricardoti/sequelize-basic-examples/blob/master/img/img01.png)

##### Após a execução dos comando acima, execute:

```cmd
  $ cd .\src\database\
  $ npx sequelize-cli db:migrate 
  $ npx sequelize-cli db:seed:all
  $ cd ../../
  $ npm start
```
![Obter token](https://github.com/pricardoti/sequelize-basic-examples/blob/master/img/img02.png)

---
#### Aaaah, se curtiu, não esquece de deixar a :star:
---
