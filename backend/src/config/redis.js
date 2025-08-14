const { createClient } = require('redis')

const redisClient = createClient({
    
    username: 'default',
    
    password: "MuCWoj",
    socket: {
        host: 'redis-s-cloud.com',
        port: 107
    }
});

module.exports=redisClient
