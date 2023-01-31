import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import { createAppLogger } from './lib/app_logger';
import { useCronService } from './core/cron';
import { CronService } from './cron.service';
import { useEnv } from './lib/env/env';
import routes from './routes';
import { initAppRouter } from '@core/router';
import { httpErrorCatch } from '@core/catch_error';
import { createApp } from '@core/application';

const logger = createAppLogger('App');

createApp((ctx) => {
  const env = useEnv();
  const app = express();

  logger.debug('dev env used');
  logger.log('env: ', env);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  initAppRouter(app, routes);
  app.use(httpErrorCatch);
  useCronService(new CronService());

  ctx.onModuleInit(() => {
    app.listen(env.NODE_PORT, () => {
      logger.log(`app listen port: ${env.NODE_PORT}`);
    });
  });

  return 'Application!';
});
