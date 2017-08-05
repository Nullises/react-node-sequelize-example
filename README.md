# react-node-sequelize-example
ES: App de ejemplo React sobre Node.js, utilizando Sequelize como ORM. EN: React app through Node.js using Sequelize as ORM

# INSTRUCCIONES (sudo en Ubuntu, en Windows solo npm install):

0) Hacer Restore de la DB:

-Tener instalado Postgres versión 9.5 o superior

-Crear base de datos vacía llamada "react_test"

-Clic derecho, "Restore", apuntar a la carpeta backup_database

1) Instalar paquetes requeridos:

`sudo npm install`

2) Instalar Globalmente Sequelize-CLI:

`sudo npm install -g sequelize-cli`

3) Instalar Globalmente pg(6.4.1):

`sudo npm install -g pg@6.4.1 pg-hstore `


4) Cambiar variables locales de la DB en `\server\config`


5) Instalar Globalmente Sequelize-Auto (Para generar los modelos automaticos de la DB):

`sudo npm install -g sequelize-auto`

6) Correr el siguiente comando para generar los modelos de la DB:

`sequelize-auto -o "./models" -d <nombre de la db> -h <host> -u <usuario> -p <puerto> -x <contraseña> -e postgres`

7) Instalar Babel y Webpack Globalmente:

`sudo npm install babel webpack webpack-dev-server -g`

8) Levantar la app:

`sudo npm start-dev`

localhost:8081 (CLIENTE)
localhost:3100 (SERVIDOR)
