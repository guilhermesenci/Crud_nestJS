import { MongooseModule } from '@nestjs/mongoose';
import { TasksController } from './tasks.controller';
import { TaskService } from './shared/task.service';
import { Module } from '@nestjs/common';
import { TaskSchema } from './schemas/task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])
  ],
  controllers: [TasksController],
  providers: [TaskService]
})
export class TasksModule { }
