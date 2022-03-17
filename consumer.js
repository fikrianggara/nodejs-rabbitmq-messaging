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
        channel.assertQueue(queueName, {
        durable:false
    });
        channel.consume(queueName, (message)=>{
            console.log(`received : ${message.content.toString()}`)
        });

    })
    // setTimeout(()=>{
    //     connection.close();
    // }, 1000)
    
})