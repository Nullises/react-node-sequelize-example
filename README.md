# react-node-sequelize-example
ES: App de ejemplo React sobre Node.js, utilizando Sequelize como ORM. EN: React app through Node.js using Sequelize as ORM

> Tecnologías Adicionales Usadas:
> **SERVIDOR:**
> Express, Nodemon, Foreman, Sequelize-Auto, BodyParser, CookieParser
> **CLIENTE:**
> Babel, WebPack, Axios


## INSTRUCCIONES (sudo en Ubuntu, en Windows solo npm install):


1. Instalar paquetes requeridos:

`sudo npm install`

2. Instalar Globalmente Sequelize-CLI:

`sudo npm install -g sequelize-cli`

3. Instalar Globalmente pg(6.4.1):

`sudo npm install -g pg@6.4.1 pg-hstore `


4. Cambiar variables locales de la DB en `\server\config`

5. Dentro de server correr

`sequelize db:migrate`

6. Instalar Babel y Webpack Globalmente:

`sudo npm install babel webpack webpack-dev-server -g`

7. Levantar la app:

`sudo npm run start-dev`

localhost:8081 (CLIENTE)
localhost:3100 (SERVIDOR)
