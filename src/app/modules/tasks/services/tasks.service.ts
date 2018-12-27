import { Injectable } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { ITaskForm } from '../../../interfaces/tasks.interface';

@Injectable()
export class TasksService {

  private url = '/tasks';

  constructor(
    private globalService: GlobalService
  ) { }

  create(params: ITaskForm) {
    return this.globalService.postRequest(this.url, params);
  }

  getList() {
    return this.globalService.getRequest(this.url);
  }

  update(id: string, params: ITaskForm) {
    return this.globalService.putRequest(`${this.url}/${id}`, params);
  }

  remove(id: string) {
    return this.globalService.deleteRequest(`${this.url}/${id}`);
  }

}
