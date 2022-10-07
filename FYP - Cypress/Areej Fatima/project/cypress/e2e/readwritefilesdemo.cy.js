

before(function(){

    cy.fixture('example.json').as('test_data')
})


it('Read files using fixtures', function(){

cy.fixture('example.json').then((data) => {
cy.log(data.name)
cy.log(data.email)
})
cy.log(this.test_data.name)
})


it('Read file using readfile()', function(){

cy.readFile('./cypress/fixtures/example.json').then((data)=>{
    cy.log(data.name)
})
})

it('Write file demo', function(){

cy.writeFile('sample.txt', 'Hello, i am areej fatima\n')
cy.writeFile('sample.txt', 'learning cypress for fyp', {flag:'a+'})

})
