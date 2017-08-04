# react-node-sequelize-example
ES: App de ejemplo React sobre Node.js, utilizando Sequelize como ORM. EN: React app through Node.js using Sequelize as ORM

#INSTRUCCIONES (sudo en Ubuntu, en Windows solo npm install):

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

4) Crear carpeta server y moverse hacia ella

`mkdir server`
`cd server`

5) Ejecutar el siguiente comando para generar el boilerplate de Sequelize

`sequelize-init`

6) Cambiar variables locales de la DB en `\server\config`


7) Instalar Globalmente Sequelize-Auto (Para generar los modelos automaticos de la DB):

`sudo npm install -g sequelize-auto`

7) Correr el siguiente comando para generar los modelos de la DB:

`sequelize-auto -o "./models" -d registro -h <host> -u <usuario> -p <puerto> -x <contraseña> -e postgres`

8) Levantar la App con Nodemon:

`sudo npm run start:dev`
