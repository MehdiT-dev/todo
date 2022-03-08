import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() task!: TaskModel;

  constructor() { }

  ngOnInit(): void {
  }

  onAddTask() {
    let taskTitle = prompt('Veuillez attribuer une description à votre nouvelle tâche :');
    // Création d'une nouvelle tâche via le constructeur avec pour description la réponse de l'utilisateur
  }

}
