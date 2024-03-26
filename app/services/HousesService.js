import { AppState } from "../AppState.js"
import { House } from "../models/House.js"

class HousesService {
    AddHouse(houseData) {
        console.log(houseData)
        const createdHouse = new House(houseData)
        AppState.houses.push(createdHouse)
        this.SaveHouses()
    }

    RemoveHouse(houseIndex) {
        AppState.houses.splice(houseIndex, 1)
        this.SaveHouses()
    }

    SaveHouses() {
        let dataString = JSON.stringify(AppState.houses)
        window.localStorage.setItem('houses', dataString)
    }

    LoadHouses() {
        let houseData = JSON.parse(localStorage.getItem('houses'))
        if (houseData == null) return
        const houses = houseData.map(house => new House(house))
        AppState.houses = houses
    }
}

export const housesService = new HousesService