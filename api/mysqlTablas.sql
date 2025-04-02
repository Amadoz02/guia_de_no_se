show databases;

use node_adso2894667;

create table categorias(
	id int auto_increment primary key,
	nombre varchar(245) not null,
    descripcion text null,
    created_at timestamp default current_timestamp,
    update_at timestamp default current_timestamp on update current_timestamp
);
#el valor timestamp es para cuando se realiza una subida se pone automaticmaente la fechha y lo mismo para update pero cuando se actualiza

create table productos(
	id int auto_increment primary key,
    nombre varchar(245) not null,
    descripcion text null,
    precio decimal(10,2),
    categoria_id int,
    created_at timestamp default current_timestamp,
    update_at timestamp default current_timestamp on update current_timestamp,
    foreign key (categoria_id) references categorias(id) on delete set null
)
#lo ultimo se utiliza por si se elimina la tabla principal se vuelve nulo
