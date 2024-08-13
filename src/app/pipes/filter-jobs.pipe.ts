import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../models/job.model';

@Pipe({
  name: 'filterJobs',
  standalone: true
})
export class FilterJobsPipe implements PipeTransform {
  transform(jobs: Job[], searchText: string): Job[] {
    if (!jobs || !searchText) {
      return jobs;
    }

    searchText = searchText.toLowerCase();

    return jobs.filter(job => 
      this.safeIncludes(job.position, searchText) ||
      this.safeIncludes(job.company, searchText) ||
      this.safeIncludes(job.location, searchText) ||
      (job.tags && job.tags.some(tag => this.safeIncludes(tag, searchText)))
    );
  }

  private safeIncludes(value: string | undefined | null, searchText: string): boolean {
    return value ? value.toLowerCase().includes(searchText) : false;
  }
}