import { Cron, ScheduleExpression, QueueJob, Schedule } from './core/cron';

@Cron()
export class CronService {
  @Schedule(ScheduleExpression.EVERY_DAY)
  scheduleHandler() {
    console.log('scheduleHandler');
  }

  /*
  @QueueJob(30 * 1000)
  queueJobHandler() {
    console.log('queueJobHandler');
  }
  */
}
