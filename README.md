____
# Ход работы (как повторить).

<h2>Node.js вместе с Express и создание проекта.</h2>

Вначале установливаем фреймворк `Node.js` через стандартный установщик с официального сайта (это самый простой способ).

Затем создаём каталог для хранения приложения и делаем его своим рабочим каталогом.

`$ mkdir "myapp/server"`

`$ cd myapp/server`
____
Используем `npm init` команду для создания `package.json` файла для приложения.

`$ npm init`

Эта команда запрашивает ряд параметров, таких как имя и версия приложения. Нажимаем RETURN (Enter), чтобы принять значения по умолчанию для большинства из них, за следующим исключением:

`entry point: (index.js)`

Вводим название основного файла. Можно принять предложенное название файла по умолчанию (`index.js`). Для этого нужно нажать RETURN (Enter).

<b>*Примечание: Желательно `index.js` перенести потом в папку по типу `/src`*</b>
____
Теперь устанавливаем Express в myapp каталог и сохраняем его в списке зависимостей.

`$ npm install express`

Чтобы временно установить Express и не добавлять его в список зависимостей:

`$ npm install express --no-save`
____
Для того чтобы запустить этот код, сохраняем его в файле `index.js` (или можно придумать любое другое название) и выполняем в терминале такую команду:

`$ node index.js`

Для проверки сервера открываем какой-нибудь браузер и вводим в адресной строке `http://127.0.0.1:3000`, то есть – тот адрес сервера, который будет выведён в консоли после его успешного запуска. Если всё работает как надо – на странице будет выведено «Hello World» и то, что вы ещё могли дописать.
____
<b>*Примечание: Если вы просто скоммуниз… Скачали наш проект, то вам достаточно прописать в терминале в папке с проектом такую команду:*</b>

`$ npm install`

<b>*Это требуется для установки `node_modules`.*</b>
____
<h2>Запуск в Docker (на основе нашего проекта).</h2>

Для начала, если `Docker` устанавливается на ОС `Windows`, то вначале нужно убедиться в том, что у вас поддерживается аппаратное ускорение `Hyper-V`, иначе придётся устанавливать какой-нибудь дистрибутив `Linux`, так как в нём с виртуализацией проблем не возникает, поскольку она там просто-напросто не нужна в этом случае (насколько нам известно).

<b>*Обновление: Там тоже нужно аппаратное ускорение!*</b>

Если же у вас всё поддреживается, то можно даже попробовать установить `Docker Desktop`, который позволяет, не используя командную строку, проводить различные действия с контейнерами, образами и т.д. В каком-то смысле, данное приложение достаточно удобное, но, так как мы все всё же любители терминалов, то будем обращаться к командной строке… Вы не подумайте о нас ничего плохого! Мы совершенно нормальные люди! Просто мы большие любители терминала… Вернёмся к делу.
____
Если вы всё же успешно завршили установку Docker (на любой ОС), то можем перейти к командной строке.

Если вы скачали наш проект, то перейдите в теримнале в папку (также известная, как каталог) с проектом, а если быть точнее, то в папку, где лежит `docker-compose.yml`.

`$ cd /путь_к/папке`
____
Наконец, дойдя до нужно вам файла, нужно сделать 2 вещи:

1. Построить всё решение/проект:

   `$ docker-compose build`

2. Запустить решение/проект:

   `$ docker-compose up`

<b>*Примечнание: Так как вы находитесь в уже нужном для вас каталоге, то вам не нужно вписывать путь и имя файла, как параметр.*</b>
____
Таким образом, вы запустили проект и он у вас успшено работает в контейнере вместе с БД! Подробности его содержимого можно увидеть в самом `docker-compose.yml`, а если у вас есть `Docker Desktop`, то на все эти созданные контейнеры и образы можно посмотреть в красивом интерфейсе.
____
Чтобы остановить работу проекта в общем, прописываем:

`$ docker-compose down`

И, наконец, чтобы удалить все контейнеры, которые мы понасоздовали, просто прописываем команду:

`$ docker-compose rm`

<b>*Примечнание: Убедитесь в том, что все контейнеры прекратили работу!*</b>
____
Вроде всё просто!
____
<h2>Смотрите также:</h2>

<h4>Статьи:<h4>

[Изучаем Docker, часть 3: файлы Dockerfile](https://habr.com/post/439980/) (там можно пройтись по содержанию);

[Докеризация веб-приложения Node.js](https://nodejs.org/ru/docs/guides/nodejs-docker-webapp/);

[Руководство по Docker Compose для начинающих](https://habr.com/ru/company/ruvds/blog/450312/).
