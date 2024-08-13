import { Injectable } from '@angular/core'; // Importing dependency injection service from Angular Core Module
import { HttpClient } from '@angular/common/http'; // Importing HTTP client service from Angular Common HTTP Module
import { Observable } from 'rxjs'; // Importing observable service from RxJS library
import { Job } from '../models/job.model'; // Importing job model from local models file

/**
 * Service responsible for handling job data.
 */
@Injectable({
  providedIn: 'root' // Making this service available throughout the application
})
export class JobService {
  /**
   * Base URL of remote job API endpoint.
   */
  private apiUrl = 'https://remoteok.com/api'; // Setting base URL for API requests

  constructor(private http: HttpClient) {} // Injecting HTTP client into service

  /**
   * Retrieves a list of jobs from the remote API.
   *
   * @returns An observable containing a list of job objects
   */
  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl); // Sending GET request to API endpoint and returning response as an observable array of Job objects
  }
}