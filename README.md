# Ход работы (как повторить).
Вначале установливаем фреймворк `Node.js` через стандартный установщик с официального сайта (это самый простой способ).

Затем создаём каталог для хранения приложения и делаем его своим рабочим каталогом.

`$ mkdir myapp`

`$ cd myapp`
____
Используем `npm init` команду для создания `package.json` файла для приложения.

`$ npm init`

Эта команда запрашивает ряд параметров, таких как имя и версия приложения. Нажимаем RETURN (Enter), чтобы принять значения по умолчанию для большинства из них, за следующим исключением:

`entry point: (index.js)`

Вводим название основного файла. Можно принять предложенное название файла по умолчанию (`index.js`). Для этого нужно нажать RETURN (Enter).
____
Теперь устанавливаем Express в myapp каталог и сохраняем его в списке зависимостей.

`$ npm install express`

Чтобы временно установить Express и не добавлять его в список зависимостей:

`$ npm install express --no-save`
____
Для того чтобы запустить этот код, сохраняем его в файле `index.js` (или можно придумать любое другое название) и выполняем в терминале такую команду:

`$ node index.js`

Для проверки сервера открываем какой-нибудь браузер и вводим в адресной строке `http://127.0.0.1:3000`, то есть – тот адрес сервера, который будет выведён в консоли после его успешного запуска. Если всё работает как надо – на странице будет выведено «Hello World» и то, что вы ещё могли дописать.