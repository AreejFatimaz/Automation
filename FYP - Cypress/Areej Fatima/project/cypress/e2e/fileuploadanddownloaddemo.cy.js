/// <reference types = "cypress"/>
/// <reference types="cypress-downloadfile"/>

it("file upload", () => {
    cy.visit("https://trytestingthis.netlify.app/");
    cy.get("#myfile").selectFile("D:\\FYP\\git\\Automation\\FYP - Cypress\\Areej Fatima\\project\\cypress\\fixtures\\cat.jpg");
  });
////it('File download test', function(){
   // cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
    
   // })
