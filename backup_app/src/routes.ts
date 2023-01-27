import { BackupsModule } from 'modules/backups/backups.module';
import { Route } from './core/router';

export default [
  {
    path: 'api/backups',
    controller: BackupsModule.backupsController,
  },
] as Route[];
