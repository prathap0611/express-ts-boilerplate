import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';
import errorhandler from 'errorhandler';

const app = express();
app.set('port', process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());

if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorhandler());
}

app.get('/', (req, res) => res.send('Hello World!'));

export default app;
