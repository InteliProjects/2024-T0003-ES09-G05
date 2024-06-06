import { HTTPResponse } from '../../types';

describe('Distribute endpoint', () => {
  it('should distribute a research', () => {
    const researchId = "9a8a4013-f02f-4387-a18e-61f9e132e456";

    cy.request({
      method: 'POST',
      url: `/research/distribute/${researchId}`,
      failOnStatusCode: false,
    }).as('distributeResponse');

    cy.get<HTTPResponse>('@distributeResponse').should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('message', 'Pesquisas distribuídas com sucesso!');
      expect(response.body).to.have.property('researchId', researchId);
    });
  });
});