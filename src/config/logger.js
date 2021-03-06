import pino from 'pino';

const logger = pino({
  prettyPrint: {
    // translateTime: 'dd/mm HH:MM:ss',
    translateTime: 'dd/mm HH:MM:ss',
    colorize: true,
    ignore: 'pid,hostname',
  },
});

export default logger;
