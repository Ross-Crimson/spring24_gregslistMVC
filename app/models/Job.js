export class Job {
    constructor(data) {
        {
            this.title = data.title
            this.description = data.description
            this.pay = parseInt(data.pay)
            this.remote = this.RemoteType(data.remote)
        }
    }

    get JobListing() {
        return `
        <div class="col-3 card p-4">
            <h4 class="p-1">${this.title}</h4>
            <div class="p-1">${this.description}</div>
            <div class="p-1">Pay: $${this.pay}</div>
            <div class="p-1">Remote? <i class="mdi mdi-${this.CheckedIcon}"></i></div>
        </div>
        `
    }

    RemoteType(data) {
        if (data == 'on' || data == true) return true
        else return false
    }

    get CheckedIcon() {
        if (this.remote) {
            return 'checkbox-marked'
        } else {
            return 'checkbox-blank-outline'
        }
    }
}