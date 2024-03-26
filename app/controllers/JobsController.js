import { AppState } from "../AppState.js"
import { jobsService } from "../services/JobsService.js"
import { getFormData } from "../utils/FormHandler.js"

export class JobsController {
    constructor() {
        this.DrawJobs()
    }

    DrawJobs() {
        let jobsHTML = ''
        let jobListElm = document.getElementById('jobs-list')
        AppState.jobs.forEach(job => jobsHTML += job.JobListing)
        jobListElm.innerHTML = jobsHTML
    }

    ListJob() {
        event.preventDefault()
        console.log("list job")
        let jobData = getFormData(event)
        jobsService.ListJob(jobData)
        this.DrawJobs()
    }
}