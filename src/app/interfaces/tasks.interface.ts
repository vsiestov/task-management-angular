export interface ITask {
  _id: string;
  description: string;
  due: Date;
  userId: string;
}

export interface ITaskForm {
  _id?: string;
  description: string;
  due: number;
}

export interface ITaskState {
  tasks: ITask[];
}
