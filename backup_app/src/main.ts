import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import { createAppLogger } from './app-logger';
import { useCronService } from './core/cron';
import { CronService } from './cron.service';
import { useEnv } from './env/env';
import routes from './routes';
import { initAppRouter } from '@core/router';
import { httpErrorCatch } from '@core/catch_error';

const logger = createAppLogger('App');

async function bootstrap() {
  const env = useEnv();
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  initAppRouter(app, routes);
  app.use(httpErrorCatch);

  useCronService(new CronService());

  app.listen(env.NODE_PORT, () => {
    logger.debug('dev env used');
    logger.log('env: ', env);
    logger.log(`app listen port: ${env.NODE_PORT}`);
  });
}

bootstrap();
