import { getMockPets } from '../data/mock.pets';
import { Pet } from '../models/pets';
import { Component } from './component';

import './pets.list.css';

export class PetsList extends Component {
  tasks: Pet[];
  constructor(selector: string) {
    super(selector);
    this.tasks = getMockPets();
    this.render();
    console.log(this.element);
    console.log(this.tasks);
  }

  render() {
    super.cleanHtml(this.selector);
    this.template = this.createTemplate();
    const element = super.render();
    document
      .querySelectorAll('.button')
      .forEach((item) =>
        item.addEventListener('click', this.handleDelete.bind(this))
      );
    return element;
  }

  handleDelete(event: Event) {
    const element = event.target as HTMLElement;
    this.tasks = this.tasks.filter((item) => item.id !== element.dataset.id);
    console.log(this.tasks);
    this.render();
  }

  createTemplate() {
    const list = this.tasks
      .map(
        (item) => `
          <li>
            <img src="../../public/img/${item.name}.jpg" alt="Pet" width=120px height=120px>
            <span>Name: ${item.name}</span>
            <span>ID: ${item.id}</span>
            <span>Owner: ${item.owner}</span>
            <div class="actions">
              <i class="button" role="button" data-id=${item.id}>🗑️</i>
              <input type="checkbox" ${item.isAdopted} ? 'checked' : ''
            </div>
          </li>`
      )
      .join('');

    return `<ul>${list}</ul>`;
  }
}
