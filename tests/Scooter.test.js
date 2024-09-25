const Scooter = require('../src/Scooter')


describe('scooter object', () => {
  const scooter = new Scooter()
  
  test('Scooter class should create Scooter instance', () => {
    expect(scooter).toBeInstanceOf(Scooter)
  })
  test('Scooter properties are instantialized correctly', ()=> {
    expect(scooter.user).toBe(null)
    expect(scooter.serial).toBe(1)
    expect(scooter.charge).toBe(100)
    expect(scooter.isBroken).toBe(false)
  })
})


// Method tests
describe('scooter methods', () => {

  const scooter1 = new Scooter('Station 1')
  let user  = {name : 'Ko'}
  scooter1.rent(user)
  
  // rent method
  test('Rent method works', ()=> {
    expect(scooter1.user).toBe(user)
    expect(scooter1.station).toBe(null)
  })
 
  // dock method
  test('Dock method works', ()=> {
    scooter1.dock('Station 2')
    expect(scooter1.station).toBe('Station 2')
    expect(scooter1.user).toBe(null)
  })
  // requestRepair method

  // charge method

})
