import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"
class GalaxiesService {

  async createGalaxy(galaxyData) {
    const newGalaxy = await dbContext.Galaxies.create(galaxyData)
    return newGalaxy
  }

  async getGalaxies(query) {
    const galaxies = await dbContext.Galaxies.find(query)
    return galaxies
  }

  async getById(galaxyId) {
    const galaxy = await dbContext.Galaxies.findById(galaxyId)
    if (!galaxy) throw new BadRequest("Nah dude")
    return galaxy
  }


}

export const galaxiesService = new GalaxiesService()