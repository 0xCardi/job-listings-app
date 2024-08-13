// Import necessary Angular modules and components
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import custom model for Job data
import { Job } from '../../models/job.model';

/**
 * A standalone component that displays a job card.
 */
@Component({
  selector: 'app-job-card',
  // This component can function independently without being part of a module.
  standalone: true,
  // Import necessary Angular modules.
  imports: [CommonModule],
  // Template for the component.
  templateUrl: './job-card.component.html',
  // Stylesheet for the component.
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  /**
   * The job data to be displayed in this card.
   */
  @Input() job!: Job;

  /**
   * Lifecycle hook that is called after Angular has initialized the component.
   */
  ngOnInit(): void {
    // Check if the provided job data is valid.
    if (!this.isValidJob()) {
      console.warn('Invalid job data provided to JobCardComponent');
    }
  }

  /**
   * Checks if the given job data is valid.
   *
   * A job data is considered valid if it has a position and company.
   */
  isValidJob(): boolean {
    return !!(this.job && this.job.position && this.job.company);
  }

  /**
   * Returns the salary range of the job, formatted as a string.
   */
  getSalaryRange(): string {
    // Check for different scenarios to display the salary correctly.
    if (this.job.salary_min && this.job.salary_max) {
      return `$${this.formatNumber(this.job.salary_min)} - $${this.formatNumber(this.job.salary_max)}`;
    } else if (this.job.salary_min) {
      return `From $${this.formatNumber(this.job.salary_min)}`;
    } else if (this.job.salary_max) {
      return `Up to $${this.formatNumber(this.job.salary_max)}`;
    } else {
      return 'Salary not specified';
    }
  }

  /**
   * Formats a given number as a string, suitable for display in the component.
   */
  private formatNumber(value: number): string {
    return value.toLocaleString('en-US');
  }
}