# nodejs-rabbitmq-queue-messaging
aplikasi sederhana untuk mengimplementasikan message queue rabbitmq dan node.js

## tools yang digunakan
 |tools | version |
 |--|--|
 | node.js | `v16.0.0` |
 | package npm amqplib | `0.8.0` |
 |docker|`20.10.8`|
 | docker image rabbitmq | `3.9.13` , `3-management`|

## alur
 1. pull image rabbitmq dari docker hub, pastikan docker sudah terinstall
    ```javascript
    //kode di terminal yang sudah terinstall docker
    //pull image rabbitmq yang terbaru
    docker pull rabbitmq
    //pull image rabbitmq yang terbaru + managemen plugins
    docker pull rabbitmq:3-management
    ```
    management plugin memiliki fitur managemen channel, queue, connection, dst dalam bentuk dashboard web
    
 2. membuat container rabbitmq
   ```
   //membuat container dengan nama rabbitmq2 dan mengekspos port 5672 dan 15672 dengan menggunakan image rabbitmq:3-management
   docker container create --name rabbitmq2 -p 5672:5672 15672:15672 rabbitmq:3-management
   ```
 4. menjalankan container
   ```
   docker container run rabbitmq2
   //dashboard web bisa dilihat pada http://localhost:15672
   ```
 6. menjalankan kode producer.js
 7. menjalankan kode consumer.js
