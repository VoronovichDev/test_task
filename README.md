Перед стартом установки, создайте файл .env и поместите туда значения из .env.example. 
### Шаги для запуска приложения:

1) npm install - установка всех зависимостей
2) docker-compose up --build - запуск localstack в контейнере 
3) docker exec -it localstack-main sh - зайти в терминал контейнера
4) написать в терминале контейнера команду
-  aws --endpoint-url=http://localhost:4566 s3 mb s3://bucket --no-sign-request, где bucket имя нашего s3 бакета
5) запускаем сервер node index.js

___

В приложении есть 2 эндпоинта:
- post для добавления данных в бакет. Выбираем в postman формат body - form-data. По ключу video добавляем типа данных (POST http://localhost:3000/upload)
- get - для получения всех данных с бакета (GET http://localhost:3000/)

Использованная версия node.js - 20.9.0.
Демо - https://drive.google.com/file/d/1ovJ_MBmB39cUMqrI_q_JJZGOmKi6DI4T/view?usp=sharing
