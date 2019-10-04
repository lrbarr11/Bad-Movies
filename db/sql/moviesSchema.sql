-- SET UP SCHEMA HERE
drop database badmovies;
create database badmovies;


use badmovies;

create table favorites(
    id INT(11) AUTO_INCREMENT,
    movie VARCHAR(144)
)