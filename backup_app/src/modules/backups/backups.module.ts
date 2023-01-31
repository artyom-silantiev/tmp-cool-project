import { define } from '@core/module';
import { BackupsController } from './backups.controller';
import { BackupsService } from './backups.service';

export const BackupsModule = define((ctx) => {
  const backupsService = ctx.use(() => new BackupsService());
  const backupsController = ctx.use(
    () => new BackupsController(backupsService)
  );

  ctx.onInit(() => {
    console.log('onModuleInit', 'BackupsModule');
  });

  return {
    backupsService,
    backupsController,
  };
});
