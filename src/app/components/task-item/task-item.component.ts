import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../../../Tarefa';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})

export class TaskItemComponent {

  @Input() 
  tarefa!: Tarefa;

  faTimes = faTimes;

  @Output() onDeleteTask = new EventEmitter<Tarefa>();

  onDelete(tarefa: Tarefa) {
    this.onDeleteTask.emit(tarefa);
  }

}
