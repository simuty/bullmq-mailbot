export default {
  queueName: process.env.QUEUE_NAME || "mailbot",
  concurrency: parseInt(process.env.QUEUE_CONCURRENCY || "1"),
  connection: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT || "6379"),
  },
  region: process.env.AWS_DEFAULT_REGION || "us-west-2",
};