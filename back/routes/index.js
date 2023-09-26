const bodyParser = require('body-parser');
const appRouter = require('express').Router();
const helmet = require('helmet');
const limiter = require('../utils/limiterConfig');
const sendEmail = require('../controllers/email');
console.log(sendEmail);
const { requestLogger, errorLogger } = require('../middlewares/logger');
const NotFoundError = require('../errors/notFoundError');
const errorHandler = require('../middlewares/errorHadler');
const corsHandler = require('../middlewares/corsHandler');

appRouter.use(helmet());
appRouter.use(requestLogger); // подключаем логгер запросов
appRouter.use(limiter);
appRouter.use(corsHandler);
appRouter.use(bodyParser.json());

appRouter.post('/send_email', sendEmail);

appRouter.use(errorLogger); // подключаем логгер ошибок
appRouter.use(errorHandler);
module.exports = appRouter;
