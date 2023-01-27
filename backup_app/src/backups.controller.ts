import { Controller, Delete, Get, Post } from "./core/controller";
import { Ctx } from "./core/router";

@Controller()
export class BackupsController {
  @Get('')
  getBackups(ctx: Ctx) { }

  @Post('')
  createBackup(ctx: Ctx) { }

  @Post(':uid')
  useBackup(ctx: Ctx) { }

  @Delete(':uid')
  deleteBackups(ctx: Ctx) { }

  @Post('load')
  loadBackup(ctx: Ctx) { }
}
