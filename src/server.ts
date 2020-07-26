import http from 'http';
import app from './app';
import logger from './utils/logger';

const server = new http.Server(app);

process.on('uncaughtException', (err) => {
    logger.error('uncaught Exception', err);
});

server.listen(app.get('port'), () => {
    logger.info(`App running at port ${app.get('port')}`);
});

export default server;
