const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
  beforeEach(async () => {
    // await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  function ongsListen() {
    it('shoult be able to listen a ONG(s)', async () => {
      const response = await request(app)
        .get('/ongs')
        
      expect(response.status).toEqual(200)
      console.table(response.body)
    })
  }

  function createNewONG() {
    it('shoult be able to create a new ONG', async () => {
      const response = await request(app)
        .post('/ongs')
        .send({
          name: "Boxcodev",
          email: "contato@boxcodev.com.br",
          whatsapp: "4700000000",
          city: "São Paulo",
          uf: "SP"
        })
  
      expect(response.body).toHaveProperty('id')
      expect(response.body.id).toHaveLength(8)
      console.log(`Ong ID for tests: ${response.body.id}`)
    })
  }

  function logonInONG(manualOngId) {  
    it('shoult be able to logon in existing ONG', async () => {
      const response = await request(app)
        .post('/sessions')
        .send({
          id: manualOngId
        })
  
      expect(response.status).not.toEqual(400)
      expect(response.body).toHaveProperty('name')
      console.log(`Loged in ONG Name: ${response.body.name}`)
    })
  }

  
  function profileIncidents(manualOngId) {
    it('shoult be able to listen a profile incidents', async () => {
      const response = await request(app)
        .get('/incidents')
        .set('authorization', manualOngId)
        
      expect(response.status).toEqual(200)

      console.table(response.body)
    })
  }

  // createNewONG()
  ongsListen()

  // const manualOngId = '7f1b4c04'
  // logonInONG(manualOngId)
})