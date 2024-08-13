import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  @Input() job!: Job;

  ngOnInit() {
    if (!this.isValidJob()) {
      console.warn('Invalid job data provided to JobCardComponent');
    }
  }

  isValidJob(): boolean {
    return !!(this.job && this.job.position && this.job.company);
  }

  getSalaryRange(): string {
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

  private formatNumber(value: number): string {
    return value.toLocaleString('en-US');
  }
}