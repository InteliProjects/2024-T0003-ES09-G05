import research from "../../support/pages/research";

describe('Researches', () => {
  it('displays page title with table', () => {
    research.accessPage()
    research.validateTable()
  });

  it('displays and close create research modal', () => {
    research.accessPage()
    research.validateCreateButton()
    research.validateModal()
  })

  it('navigate to list of distribution', () => {
    research.accessPage()
    research.navigate()
  })
});
