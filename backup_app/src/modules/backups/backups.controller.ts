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
  async getBackups(ctx: Ctx) {
    return await this.backupsService.getBackups();
  }

  @Post('')
  async createBackup(ctx: Ctx) {
    const backupFileInfo = await this.backupsService.createBackup();
    return backupFileInfo;
  }

  @Post(':name')
  async useBackup(ctx: Ctx) {
    await this.backupsService.restoreFromBackup(ctx.params['name']);
    return '';
  }

  @Delete(':name')
  async deleteBackups(ctx: Ctx) {
    await this.backupsService.deleteBackupFile(ctx.params['name']);
    return '';
  }

  @Post('load')
  loadBackup(ctx: Ctx) {
    return '';

    // TODO
  }
}
