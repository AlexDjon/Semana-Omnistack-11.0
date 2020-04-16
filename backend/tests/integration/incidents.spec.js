const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('INCIDENTS', () => {
  beforeEach(async () => {
    // await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  function incidentsListen() {
    it('shoult be able to listen a Incident(s)', async () => {
      const response = await request(app)
        .get('/incidents')
        
      expect(response.status).toEqual(200)

      console.table(response.body)
    })
  }

  function createNewIncident(manualOngId) {
    it('shoult be able to create a new Incident', async () => {
      const response = await request(app)
        .post('/incidents')
        .set('Authorization', manualOngId)
        .send({
          title: "Teste de caso",
          description: "Detalhes do caso",
          value: 120
        })
  
      expect(response.body).toHaveProperty('id')
      expect(response.body.id).not.toBeNaN()
      console.log(`Created Incident ID: ${response.body.id}`)
    }) 
  }

  function deleteIncident(manualOngId, manualIncidentId) {    
    it('shoult be able to delete a existing Incident', async () => {
      await request(app)
        .delete(`/incidents/${manualIncidentId}`)
        .set('Authorization', manualOngId)
        .then(res => expect(res.status).toEqual(204))
    }) 
  }

  // const manualOngId = '7f1b4c04'
  // createNewIncident(manualOngId)

  // const deleteIncidentId = '1'
  // const deleteIncidentOngId = '7f1b4c04'
  // deleteIncident(deleteIncidentOngId, deleteIncidentId)

  incidentsListen()
})