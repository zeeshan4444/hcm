const redis = require("redis");
const { promisify } = require("util");
const redisConfig = `redis://cache/2`;
const redisClient = redis.createClient(redisConfig);

module.exports = {
  client: redisClient,
  get: promisify(redisClient.get).bind(redisClient),
  set: promisify(redisClient.set).bind(redisClient),
  del: promisify(redisClient.del).bind(redisClient),
  expire: promisify(redisClient.expire).bind(redisClient),
  keys: promisify(redisClient.keys).bind(redisClient)
}


