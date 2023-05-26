import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
        .post('', this.createPlanet)
        .get('', this.getPlanets)
        .get('/:id', this.getById)
        .get('/:galaxyId/planets', this.getPlanetsByGalaxyId)
  }

  async createPlanet(req, res, next) {
    try {
      const planetData = req.body
      const newPlanet = await planetsService.createPlanet(planetData)
        return res.send(newPlanet)
    } catch (error) {
        next(error)
    }
  }

  async getPlanets(req, res, next) {
    try {
      const query = req.query
      const planets = await planetsService.getPlanets(query)
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async getById(req,res,next){
    try {
      const galaxyId = req.params.id
      const galaxy = await planetsService.getById(galaxyId)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async getPlanetsByGalaxyId(req, res, next) {
    try {
      const galaxyId = req.params.galaxyId
      const planets = await planetsService.getPlanetsByGalaxyId(galaxyId)
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }
}