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

  @Get(':name')
  async downloadBackup(ctx: Ctx) {
    const absBackupFile = await this.backupsService.getAbsBackupFile(
      ctx.params['name']
    );
    ctx.res.sendFile(absBackupFile);
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

  @Post('upload')
  uploadBackup(ctx: Ctx) {
    return '';

    // TODO
  }
}
