import { Component, inject, signal } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly http = inject(HttpClient);

  users = signal<User[]>([]);

  constructor() {
    this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(response => {
        this.users.set(response);
      });
  }
}
