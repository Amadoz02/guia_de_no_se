#Creacion de usuario
create user 'Helder_adso2894667'@'localhost' identified by "Aprendiz2025";
#creando la base de datos de node.js
create database node_adso2894667;
#dandole privilegios
grant all on node_adso2894667.* to Helder_adso2894667@localhost;