import { dbContext } from "../db/DbContext.js"

class PlanetsService {
    getById(galaxyId) {
      throw new Error("Method not implemented.")
    }

    async createPlanet(planetData) {
      const newPlanet = await dbContext.Planets.create(planetData)
      return newPlanet
    }

    async getPlanets(query) {
      const planets = await dbContext.Planets.find(query).populate('galaxy')
      return planets
    }
    async getPlanetsByGalaxyId(galaxyId) {
    const planets = await dbContext.Planets.find({ galaxyId: galaxyId})
    return planets

  }
}

export const planetsService = new PlanetsService()