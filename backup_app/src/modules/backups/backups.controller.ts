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
  getBackups(ctx: Ctx) {
    return '';
  }

  @Post('')
  createBackup(ctx: Ctx) {
    return '';
  }

  @Post(':uid')
  useBackup(ctx: Ctx) {
    return '';
  }

  @Delete(':uid')
  deleteBackups(ctx: Ctx) {
    return '';
  }

  @Post('load')
  loadBackup(ctx: Ctx) {
    return '';
  }
}
