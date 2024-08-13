import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../models/job.model';

/**
 * FilterJobsPipe class implements a custom pipe for filtering jobs based on search text.
 */
@Pipe({
  name: 'filterJobs',
  standalone: true
})
export class FilterJobsPipe implements PipeTransform {
  /**
   * Transform method to filter the given list of jobs based on the provided search text.
   *
   * @param jobs The list of jobs to be filtered.
   * @param searchText The search text used for filtering.
   * @returns The filtered list of jobs.
   */
  transform(jobs: Job[], searchText: string): Job[] {
    // Check if either the jobs or the search text is empty. If so, return the original list of jobs.
    if (!jobs || !searchText) {
      return jobs;
    }

    // Convert the search text to lowercase for case-insensitive comparison.
    searchText = searchText.toLowerCase();

    // Use the Array.prototype.filter() method to filter the jobs based on whether any of their properties match the search text.
    return jobs.filter(job => 
      // Check if the job position matches the search text.
      this.safeIncludes(job.position, searchText) ||
      // Check if the company name matches the search text.
      this.safeIncludes(job.company, searchText) ||
      // Check if the location matches the search text.
      this.safeIncludes(job.location, searchText) ||
      // If the job has tags, check if any of them match the search text.
      (job.tags && job.tags.some(tag => this.safeIncludes(tag, searchText)))
    );
  }

  /**
   * Private helper method to safely include a string in another string for case-insensitive comparison.
   *
   * @param value The string to be searched.
   * @param searchText The search text.
   * @returns True if the string is not empty and includes the search text, false otherwise.
   */
  private safeIncludes(value: string | undefined | null, searchText: string): boolean {
    // Check if the string is not empty. If so, perform a case-insensitive comparison and return true if the search text is found.
    return value ? value.toLowerCase().includes(searchText) : false;
  }
}