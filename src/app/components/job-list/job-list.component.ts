// Import necessary modules and components from Angular core and services
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import custom component for displaying job cards
import { JobCardComponent } from '../job-card/job-card.component';

// Import service for interacting with the Jobs API
import { JobService } from '../../services/job.service';

// Import model representing a job
import { Job } from '../../models/job.model';

// Import custom pipe for filtering jobs
import { FilterJobsPipe } from '../../pipes/filter-jobs.pipe';

/**
 * Class representing the Job List component.
 *
 * This component displays a list of available jobs and allows users to search through them.
 */
@Component({
  selector: 'app-job-list', // HTML selector for this component
  standalone: true, // Enable standalone mode for this component
  imports: [
    CommonModule, // Import Angular's common module for DOM manipulation
    FormsModule, // Import Angular Forms module for form-related functionality
    JobCardComponent, // Import custom job card component
    FilterJobsPipe // Import custom filter jobs pipe
  ],
  templateUrl: './job-list.component.html', // HTML template file for this component
  styleUrls: ['./job-list.component.scss'] // CSS styles file for this component
})
export class JobListComponent implements OnInit {
  /**
   * List of available jobs.
   */
  jobs: Job[] = [];

  /**
   * Search text entered by the user.
   */
  searchText: string = '';

  constructor(private jobService: JobService) {}

  /**
   * Lifecycle hook for initialization.
   *
   * This method is called once when the component is initialized.
   */
  ngOnInit() {
    // Fetch available jobs from the API and subscribe to the response
    this.jobService.getJobs().subscribe(
      (jobs: Job[]) => this.jobs = jobs,
      (error) => console.error('Error fetching jobs:', error)
    );
  }
}