# NotasApp Backend

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Español
## Prerrequisitos
**Descargar** e instalar [NodeJS](https://nodejs.org/en/download).

**Descargar** e instalar `NestJS`:
```bash
npm i -g @nestjs/cli
```

**Instalar** las librerías necesarias para ejecutar el programa:
```bash
npm install @nestjs/typeorm typeorm
npm i bcrypt
```
**Descargar** e instalar [MySQL](https://dev.mysql.com/downloads/installer/)*

***Nota:** Para que el backend pueda conectarse a la base de datos **MySQL**, necesita configurarse el usuario y contraseña de esta, así como el puerto.
Los datos de configuración están en el fichero `"src/app.module.ts"`. Por defecto los datos son:

`puerto: 3306, usuario:'root', contraseña: 'Notas_1234',`

`nombre de la base de datos: 'notas_app'`


## Instrucciones de uso
**Descargar** este proyecto [Backend NotasApp](https://github.com/LoreiMagica/Backend_NotasApp/archive/refs/heads/main.zip)

**Importar** el backup de base de datos que viene con el backend: Desde su consola de comandos, moverse a la carpeta raíz de este programa, y ejecutar el comando: 
```bash
mysql -u "<TU_USUARIO_BASE_DATOS>" -p "<NOMBRE_TU_BASE_DATOS>" < notas_app.sql
```

**Instalar las dependencias:** Desde su consola de comandos, moverse a la carpeta raíz de este programa, y ejecutar el comando:
```bash 
npm install
```

**Finalmente, podrás iniciar el backend:** Desde su consola de comandos, moverse a la carpeta raíz del backend y ejecutar:
```bash
npm run start
```

Para un mejor uso de este backend, se recomienda usarlo junto al frontend  en angular [NotasApp](https://github.com/LoreiMagica/NotasApp)

## Operaciones CRUD
### Usuarios
**Iniciar sesión** con un usuario (Necesario para hacer operaciones con notas):

`POST http://localhost:3000/auth/login`

Cuerpo:
```JSON
{
  "usuario": "Manolo",
  "contrasena": "Manolo_1234"
}
```
-----


**Crear** un usuario nuevo:

`POST http://localhost:3000/usuarios`

Cuerpo:
```JSON
{
  "nombre": "Paco",
  "contrasena": "Paco_1234"
}
```
-----

**Obtener** un usuario específico:  
`GET http://localhost:3000/usuarios/<ID_USUARIO>`

-----

**Eliminar** un usuario existente (ESTO BORRARÁ TODAS LAS NOTAS DE ESE USUARIO):  
`DELETE http://localhost:3000/usuarios/<ID_USUARIO>`

-----


### Establecer token para trabajar con notas
En tu aplicación para hacer operaciones CRUD, deberás escribir algo como esto `Authorization: Bareer <TU_TOKEN>`
Por ejemplo, en Postman, debes dirigirte a Header, y en Key Poner `Authorization`, y en Value `Bareer <TU_TOKEN>`

### Notas (Debes de iniciar sesión con un usuario y establecer el toker)
**Crear** una nueva nota:  
`POST http://localhost:3000/notas`  
Cuerpo:
```JSON
    {
        "titulo": "Postman",
        "descripcion": "Esta nota ha sido creada desde Postman",
        "estado": "pendiente"
    }
```
-----

**Obtener** la lista de notas del usuario logeado:  
`GET http://localhost:3000/notas`  

-----
**Modificar** una nota específica:  
`PUT http://localhost:3000/notas/<ID_NOTA>`  
Cuerpo:
```JSON
    {
        "titulo": "Postman otra vez",
        "descripcion": "Esta nota ha sido modificada usando Postman otra vez",
        "estado": "completado"
    }
```
-----
**Eliminar** una nota existente:  
`DELETE http://localhost:3000/notas/<ID_NOTA>`

# English 

## Pre-requisites
**Download** and install [Nodejs](https://nodejs.org/en/download).

**Download** and install `Nestjs`:
```bash
npm i -g @nestjs/cli
```

**Install** the necessary libraries to launch the program:
```bash
npm install @nestjs/typeorm typeorm
npm i bcrypt
```
**Download** and install [MySQL](https://dev.mysql.com/downloads/installer/)*

***NOTE:** For the backend to connect to the database **MySQL**, it needs to configure the user and password of this, as well as the port.
The configuration data are on the `"src/app.module"` file. By default the data are:

`port: 3306, user:'root', password: 'Notas_1234',`

`Database name: 'notas_app'`

## Instructions to use
**Download** this project [Backend NotasApp](https://github.com/LoreiMagica/Backend_NotasApp/archive/refs/heads/main.zip)

**Import** the database backup that comes with the backend: From its command console, move to the root folder of this program, and execute the command:
```bash
mysql -u "<YOUR_DATABASE_USER>" -p "<YOUR_DATABASE_NAME>" < notas_app.sql
```

**Install the dependencies:** from your command console, move to the root folder of this program, and execute the command:
```bash 
npm install
```

**Finally, launch the backend:** from its command console, move to the root folder of the backend and execute: 
```bash
npm run start
```

For better use of this backend, it is recommended to use it next to the border in angular [NotasApp](https://github.com/loreimagica/notasapp)


## CRUD operations
### Users
**Login** with an user (Neccesary if you want to works with notes):  
`POST http://localhost:3000/auth/login`  
Body:
```JSON
{
  "usuario": "Manolo",
  "contrasena": "Manolo_1234"
}
```
-----


**Create** a new user:
`POST http://localhost:3000/usuarios`
Body:
```JSON
{
  "nombre": "Paco",
  "contrasena": "Paco_1234"
}
```

**Get** a specific user:  
`GET http://localhost:3000/usuarios/<ID_USUARIO>`

-----


**Delete** a specific user (THIS WILL DELETE ALL THE NOTES FROM THIS USER):  
`DELETE http://localhost:3000/usuarios/<ID_USUARIO>`

-----


### Set the user toker for work with notes
In your application to do CRUD operations, you must write something like this `Authorization: Bareer <YOUR_TOKEN>`
For example, in Postman, you must go to Header, and in Key write `Authorization`, and in Value write `Bareer <YOUR_TOKEN>`

### Notes (You must log in with a user and set the token)
**Create** a new note:  
`POST http://localhost:3000/notas`  
Body:
```JSON
    {
        "titulo": "Postman",
        "descripcion": "This note have been created from postman",
        "estado": "pendiente"
    }
```
-----

**Get** rhe full note list from the logged user:  
`GET http://localhost:3000/notas`

-----

**Modify** specific note:  
`PUT http://localhost:3000/notas/<ID_NOTE>`  
Body:
```JSON
    {
        "titulo": "Postman another time",
        "descripcion": "This note have beed modified from postman another time",
        "estado": "completado"
    }
```
-----

**Delete** existent note:  
`DELETE http://localhost:3000/notas/<ID_NOTE>`

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
