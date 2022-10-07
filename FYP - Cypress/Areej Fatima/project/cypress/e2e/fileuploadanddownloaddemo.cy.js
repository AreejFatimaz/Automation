it('File Upload Demo', function(){

    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('cat.jpg')

})

it('File download test', function(){
cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')

})