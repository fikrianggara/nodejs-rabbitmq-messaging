const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost:5672', (err, connection)=>{
    if(err){
        throw err;
    }
    connection.createChannel((err, channel)=>{
        if(err){
            throw err;
        }
        let queueName = 'contoh_queue';
        let message = 'ini surat cinta untuk doi';
        channel.assertQueue(queueName, {
        durable:false
    });
    channel.sendToQueue(queueName, Buffer.from(message));
    console.log(`message : ${message}`)
    setTimeout(()=>{
        connection.close();
    }, 1000)
    })
    
    
})