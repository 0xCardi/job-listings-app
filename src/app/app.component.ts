// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobService } from './services/job.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, JobListComponent],
  template: `
    <h1>Remote Job Listings</h1>
    <app-job-list></app-job-list>
  `,
  styles: [`
    h1 {
      color: #2c3e50;
      text-align: center;
    }
  `]
})
export class AppComponent {}