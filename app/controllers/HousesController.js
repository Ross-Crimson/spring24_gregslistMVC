import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"

export class HousesController {
    constructor() {
        housesService.LoadHouses()
        this.DrawHouses()
    }

    DrawHouses() {
        let housesHTML = ''
        const houses = AppState.houses
        let houseListElm = document.getElementById('houses-list')
        houses.forEach(house => housesHTML += house.houseListing)
        houseListElm.innerHTML = housesHTML
    }

    AddHouse() {
        event.preventDefault()
        let houseData = getFormData(event.target)
        housesService.AddHouse(houseData)
        this.DrawHouses()
    }

    RemoveListing(houseId) {
        let houseIndex = AppState.houses.findIndex(house => house.id == houseId)
        console.log(houseIndex)
        housesService.RemoveHouse(houseIndex)
        this.DrawHouses()
    }
}