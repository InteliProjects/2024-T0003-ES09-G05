import distribution from "../../support/pages/distribution"

describe('Distribution', () => {
  it('should display page title with table', () => {
    distribution.accessPage()
  });

  it('should display and close create distribution modal', () => {
    distribution.accessPage()
    distribution.validateCreateButton()
    distribution.validateModal()
  })

  it('should show e-mail as select default value', () => {
    distribution.accessPage()
    distribution.clickButton()
    distribution.validateSelect('E-mail')
  })

  it('should download a distribution model successfully', () => {
    distribution.accessPage()
    distribution.clickButton()
    distribution.downloadFile()
  })

  it('should upload a distribution successfully', () => {
    distribution.accessPage()
    distribution.clickButton()
    distribution.uploadFile()
  })

  it('should upload a distribution with drag successfully', () => {
    distribution.accessPage()
    distribution.clickButton()
    distribution.uploadFileWithDrag()
  })
});
