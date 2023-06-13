describe('Form', () => {
  context("Fills out and checks filled out information", () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/automation-practice-form');
    });
    it("register() - Registration form fill out", () => {
      cy.get("#firstName").type("Ieva");
      cy.get("#lastName").type("Glavecka");
      cy.get("#userEmail").type("ievamadara.glavecka@va.lv");
      cy.contains('label', 'Female').click();
      cy.get("#userNumber").type("2020210033");
      
      cy.get("#dateOfBirth").click();
      cy.get(".react-datepicker__month-select").select("February");
      cy.get(".react-datepicker__year-select").select("1930");
      cy.get('[aria-label="Choose Friday, February 28th, 1930"]').click();
      
      cy.get(".subjects-auto-complete__value-container").type("Econ{enter}");
      cy.contains('label','Music').click();
      cy.get('input[type=file]').selectFile('cypress/picture1.png')
      cy.get("#currentAddress").type("Grove street 342");
      cy.contains('div','Select State').click({force: true});
      cy.contains('div','NCR').click({force: true});
      cy.contains('div','Select City').click({force: true});
      cy.contains('div','Delhi').click({force: true});
      cy.get("#submit").click({force: true});
      
      cy.contains('td', 'Student Name').siblings().should("have.text","Ieva Glavecka");
      cy.contains('td', 'Student Email').siblings().should("have.text","ievamadara.glavecka@va.lv");
      cy.contains('td', 'Gender').siblings().should("have.text","Female");
      cy.contains('td', 'Mobile').siblings().should("have.text","2020210033");
      cy.contains('td', 'Date of Birth').siblings().should("have.text","28 February,1930");
      cy.contains('td', 'Subjects').siblings().should("have.text","Economics");
      cy.contains('td', 'Hobbies').siblings().should("have.text","Music");
      cy.contains('td', 'Picture').siblings().should("have.text","picture1.png");
      cy.contains('td', 'Address').siblings().should("have.text","Grove street 342");
      cy.contains('td', 'State and City').siblings().should("have.text","NCR Delhi");
    });
  });
})