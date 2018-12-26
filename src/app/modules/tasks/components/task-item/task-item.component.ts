import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../../../../interfaces/tasks.interface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() item: ITask;
  @Output() changed: EventEmitter<ITask>;
  @Output() removed: EventEmitter<ITask>;

  constructor() {
    this.changed = new EventEmitter();
    this.removed = new EventEmitter();
  }

  ngOnInit() {
  }

}
