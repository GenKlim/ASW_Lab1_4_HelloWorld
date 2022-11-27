const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  //Не трогать! Локализация.
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end('Hello World!\n\nДемиденко В.С.\nИдрисзода М.М.\nИсроилзода Б.И.\nКлиманов Г.И.\nМешков Г.И.\nМорозов Р.А.')
})

app.listen(port, () => {
  console.log(`Прослушивающийся порт на сервере: ${port}`)
  var pgp = require("pg-promise")(/*Опции.*/);
  //Строка подключения к БД.
  let connectionString = "postgres://postgres:root@database:5432/testdb";
  //let connectionString = "postgres://${db_USER}:${db_PASSWORD}@${db_HOST}:${db_PORT}/${db_DB}"; //Не работает через .env.
  //Для отладки строки подключения (как не странно).
  //console.log(connectionString);
  setTimeout(() => {
    var db = pgp(connectionString);
    db.one("SELECT $1 AS value", 123)
        .then(function (data) {
            console.log("Ответ от БД:", data.value);
        })
        .catch(function (error) {
            console.log("Ошибка:", error);
        });
  }, 5000);
})