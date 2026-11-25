import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { Task } from './task.entity.js';


@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private nextId = 1;

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number): Task {
    const task = this.tasks.find((t) => t.id === id);

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  create(dto: CreateTaskDto): Task {
    const task: Task = {
      id: this.nextId++,
      title: dto.title,
      description: dto.description,
      completed: dto.completed ?? false,
      createdAt: new Date(),
    };

    this.tasks.push(task);
    return task;
  }

  update(id: number, dto: Partial<CreateTaskDto>): Task {
    const task = this.findOne(id);
    Object.assign(task, dto);
    return task;
  }

  remove(id: number): void {
    this.findOne(id);
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}