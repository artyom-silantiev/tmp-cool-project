import { promisify } from 'node:util';
import { exec } from 'node:child_process';

const asyncExec = promisify(exec);

export class BackupsService {
  onModuleInit() {
    console.log('onModuleInit', 'BackupsService');
  }
}
