import { elements } from "./elements";
const baseUrl = "http://localhost:5173/";

const research = {
  accessPage: () => {
    cy.visit(baseUrl);
    cy.get(elements.title).should("contain", "Todas as pesquisas");
  },
  validateTable: () => {
    cy.get(elements.name).should("contain", "Pesquisa");
    cy.get(elements.created).should("contain", "Criado em");
    cy.get(elements.status).should("contain", "Status");
    cy.get(elements.action).should("contain", "Ação");
    cy.get(elements.trBody).find('tr').should("have.length.at.least", 1);
  },
  validateCreateButton: () => {
    const button = cy.get(elements.createButton);
    button.should("contain", "Nova pesquisa");
    button.children().should("exist");
    button.click();
  },
  validateModal: () => {
    const modal = cy.get(elements.modal);
    modal.should("be.visible");
    modal.get(elements.svg).first().click();
    modal.should("not.exist");
  },
  navigate: () => {
    cy.get(elements.navagationDistribution).first().click();
    cy.url().should("not.eq", baseUrl);
  }
};

export default research;
