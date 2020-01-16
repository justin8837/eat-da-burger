drop database if exists burgers_db;
create database burgers_db;
use burgers_db;
create table burger
(
    id int
    auto_increment,
burgerName varchar
    (255),
devour boolean default false,
primary key
    (id)
)