import { BackupsController } from './backups.controller';
import { BackupsService } from './backups.service';

export const BackupsModule = (() => {
  const backupsService = new BackupsService();
  const backupsController = new BackupsController(backupsService);

  return {
    backupsService,
    backupsController,
  };
})();
