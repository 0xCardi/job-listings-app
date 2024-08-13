import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobCardComponent } from '../job-card/job-card.component';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job.model';
import { FilterJobsPipe } from '../../pipes/filter-jobs.pipe';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, FormsModule, JobCardComponent, FilterJobsPipe],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  searchText: string = '';

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.jobService.getJobs().subscribe(
      jobs => this.jobs = jobs,
      error => console.error('Error fetching jobs:', error)
    );
  }
}