const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  //Не трогать! Локализация.
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end('Hello World!\n\nДемиденко В.С.\nИдрисзода М.М.\nИсроилзода Б.И.\nКлиманов Г.И.\nМешков Г.И.\nМорозов Р.А.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})