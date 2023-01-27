import { BackupsController } from "./backups.controller";
import { Route } from "./core/router";

export default [
  {
    path: 'api/backups',
    controller: new BackupsController(),
  },
] as Route[];
