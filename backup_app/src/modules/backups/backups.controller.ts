import { Controller, Delete, Get, Post } from '@core/controller';
import { Ctx } from '@core/router';
import { BackupsService } from './backups.service';

@Controller()
export class BackupsController {
  constructor(private backupsService: BackupsService) {}

  onModuleInit() {
    console.log('onModuleInit', 'BackupsController');
  }

  @Get('')
  getBackups(ctx: Ctx) {}

  @Post('')
  createBackup(ctx: Ctx) {}

  @Post(':uid')
  useBackup(ctx: Ctx) {}

  @Delete(':uid')
  deleteBackups(ctx: Ctx) {}

  @Post('load')
  loadBackup(ctx: Ctx) {}
}
