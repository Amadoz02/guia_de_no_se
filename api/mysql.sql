#Creacion de usuario
create user 'edixon_adso2894667'@'localhost' identified by "Aprendiz2024";
#creando la base de datos de node.js
create database node_adso2894667;
#dandole privilegios
grant all on node_adso2894667.* to edixon_adso2894667@localhost;