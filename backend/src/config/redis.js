const { createClient } = require('redis')

const redisClient = createClient({
    
    username: 'default',
    
    password: "Mu4oBG5yMKCgaiaNrUkZVeHBHzlVCWoj",
    socket: {
        host: 'redis-16407.c212.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 16407
    }
});
module.exports=redisClient