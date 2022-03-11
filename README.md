# web модуль RT.DataLoader

## baseURL для REST API
В файле .env в переменную `REST_API_BASE_URL` прописываем baseURL для REST API,
который соответствуют текущему контуру



## Подтягивание изменений в свой fork

1) Тяним в наш форк данные ветки sdev из основной репы:
   `git fetch git@vm-gitlab-1.dh.rt.ru:rtdataloader/rtdataloader-front.git sdev`
2) На основании этих данных создаем ветку:
   `git checkout -b rtdataloader/rtdataloader-sdev FETCH_HEAD`
3) Эту ветку мержим в нашу ветку develop и можно её удалять



# Сборка проекта

###Git проекта:
https://vm-gitlab-1.dh.rt.ru/rtdataloader/rtdataloader-front

###Для каждой среды своя ветка:
 - для SDEV ветка: sdev

###Для сборки необходимо:
1. node v15.14.0
2. npm 7.7.6

### Для сборки в контейнере:
#### Команды для cli:
- `npm i` - собирает библиотеки необходимые для проекта (node_modules)
- `npm run build`: использует конфигурацию файла "webpack.client.js" с "env: production" и собирает "dist".

#### Необходимые для сборки файлы:
- "package.json": список библиотек и команд для сборки.
- "webpack.client.js" и "webpack.config.js": сборщик (вход: Client.tsx, styles.scss, выход: dist)
- "index.html": т.к. результат проекта это SPA, то в этом файл подключается JS файлы. Именно этот файл крутится на сервере.
  Содержит тег с идентификатором #root - в который Client.tsx "вставляет" приложение.
- ".env": фай с конфигурацией среды
- ".eslintrc": правила для форматирования кода
- "src": исходники.
- "dist": билд, генерируется при прод сборки.
- "node_modules": библиотеки для проекта (перед каждой `npm i` необходимо чистить).
