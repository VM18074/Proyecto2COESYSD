# Proyecto2COESYSD

Proyecto 2 de la asignatura IGF115 en colaboracion con los estudiantes de PRN315

# Instalación 🤷‍♂️

Primero deberás clonar el proyecto en tu maquina local, puedes hacerlo con GitHub Desktop o desde consola ( para eso deberás de tener instalado Git [Click para descargar Git](https://git-scm.com/downloads))
Para Ejecutar el proyecto deberá de tener wampserver instalado o xampp para correr los servicios de apache, mysql, y phpMyAdmin
Una vez instalado puede

En esta guia se clonará por medio de consola

1.  Abrir una terminal e ingresar a la ruta donde quieres clonar el repositorio (Ejemplo: **C:\Users\Usuario\Documents>** ruta para la carpeta documentos ( si tienes problemas para usar la consola, puedes ver el siguiente video que te explica como acceder a una carpeta desde cmd [Como acceder a carpetas desde cmd](https://www.youtube.com/watch?v=HuTiugouE2o&ab_channel=computadorastiolne)

2.  Una vez dentro de la carpeta, ejecuta el siguiente comando en tu terminal para clonar el repositorio

> `git clone https://github.com/VM18074/Proyecto2COESYSD.git`

# Configuraciones Iniciales ⚙

1.  Inicie los servicios de wampserver o xampp

2.  Deberá de crear una base datos la cuál llamaremos **edandb**

3.  Una vez creada la base de datos, abriremos una terminal en la ruta del proyecto, **C:\Users\Usuario\Documents\Proyecto2COESYSD>** ( nuestra ruta de ejemplo )

4.  Pegue el siguiente comando para acceder a la carpeta src/

> `cd src` 5. Una vez dentro de la carpeta src, nuestra ruta en la terminal deberá verse algo asi: **C:\Users\Usuario\Documents\Proyecto2COESYSD\src>**

6. Para correr las migraciones ejecute el siguiente comando
    > `npx sequelize-cli db:migrate`

7.Para correr los seeders ejecute el siguiente comando (opcional)

> `npx sequelize-cli db:seed:all`

# Ejecutar Proyecto 🚀

Una vez hechas las configuraciones iniciales ejecutaremos el proyecto

1.  Inicie los servicios de wampserver o xampp

2.  Abra una terminal en la ruta raiz del proyecto, **C:\Users\Usuario\Documents\Proyecto2COESYSD>** ( nuestra ruta de ejemplo )

3.  ejecute el siguiente comando para correr el servidor

> `npm run dev`
