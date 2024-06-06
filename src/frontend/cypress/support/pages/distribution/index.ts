import { elements } from "./elements";
const path = require('path')

const baseUrl = "http://localhost:5173/distributionList"
const filePath = "cypress/downloads/Planilha modelo.csv"

const distribution = {
  accessPage: () => {
    cy.visit(baseUrl)
    cy.get(elements.title).should('have.length.at.least', 1)
  },
  clickButton: () => {
    cy.get(elements.createButton).click()
  },
  validateTable: () => {
    cy.get(elements.name).should("contain", "Distribuição");
    cy.get(elements.channel).should("contain", "Canal");
    cy.get(elements.created).should("contain", "Criado em");
    cy.get(elements.status).should("contain", "Status");
    cy.get(elements.action).should("contain", "Ação");
    cy.get(elements.trBody).find('tr').should("have.length.at.least", 1);
  },
  validateCreateButton: () => {
    const button = cy.get(elements.createButton);
    button.should("contain", "Nova distribuição");
    button.children().should("exist");
    button.click();
  },
  validateModal: () => {
    const modal = cy.get(elements.modal);
    modal.should("be.visible");
    modal.get(elements.svg).first().click();
    modal.should("not.exist");
  },
  validateSelect: (value: string) => {
    cy.get(elements.select).should('contain', value)
  },
  downloadFile: () => {
    const downloadsFolder = Cypress.config('downloadsFolder')
    const download = cy.get('[data-testid=download]')
    download.click()

    const filename = path.join(downloadsFolder, 'Planilha modelo.csv')
    cy.readFile(filename, { timeout: 15000 })
      .should('have.length.gt', 0)
  },
  uploadFile: () => {
    cy.get(elements.upload).eq(1).selectFile(filePath, {
      force: true
    })
    cy.get(elements.uploadedFile).should('exist')
  },
  uploadFileWithDrag: () => {
    cy.get(elements.upload).first().selectFile(filePath, {
      action: 'drag-drop',
      force: true
    })
    cy.get(elements.uploadedFile).should('exist')
  }
}

export default distribution;