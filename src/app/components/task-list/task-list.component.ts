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

  // Gestion de la boîte modale personnalisée :
  onAddTask() {
    const modalWindow : HTMLDivElement | null = document.querySelector('#new-task-modal');
    console.log(modalWindow);
    if (modalWindow != null) {
      modalWindow.classList.add('visible');
    }
    // Gestion de la fermeture de la modale
    // Récupération de la valeur du champ input
    // Gestion du bouton de validation
    // Création d'une nouvelle tâche via le constructeur avec pour titre la réponse de l'utilisateur
    // Icone "Fermer la fenêtre + Animation de la modale à l'apparition
  }

}
