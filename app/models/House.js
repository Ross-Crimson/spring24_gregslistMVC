import { generateId } from "../utils/GenerateId.js"

export class House {
    constructor(data) {
        this.id = generateId()
        this.year = parseInt(data.year)
        //this.name = data.name
        this.bedrooms = parseInt(data.bedrooms)
        this.bathrooms = parseInt(data.bathrooms)
        this.sqft = parseInt(data.sqft)
        this.price = parseInt(data.price)
        this.description = data.description
        this.imgUrl = data.imgUrl
    }

    get houseListing() {
        return `
        <div class="col-6 card p-2">
            <div class="p-2">
                <img class="card-img-top" src="${this.imgUrl}" alt="">
            </div>
            <div>
                <div class="row">
                    <div class="col-4">
                        <div class="px-2">Year: ${this.year}</div>
                    </div>
                    <div class="col-4">
                        <div class="px-2">Bedrooms: ${this.bedrooms}</div>
                    </div>
                    <div class="col-4">
                        <div class="px-2">Bathrooms: ${this.bathrooms}</div>
                    </div>
                    <div class="col-4">
                        <div class="px-2">Square Ft: ${this.sqft}</div>
                    </div>
                    <div class="col-4">
                        <div class="px-2">Price: ${this.sqft}</div>
                    </div>
                </div>
                <div class="p-2">${this.description}</div>
            </div>
            <div class="p-2">
                <button onclick="app.HousesController.RemoveListing('${this.id}')" class="btn btn-primary">Buy</button>
                <button onclick="app.HousesController.RemoveListing('${this.id}')" class="btn btn-danger">Delete Listing</button>
            </div>
        </div>
    
        `
    }
}
