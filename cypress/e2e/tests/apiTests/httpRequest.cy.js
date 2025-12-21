import postData from '../../../fixtures/postData.json'

describe('HTTP requests', { tags: '@regression' }, () => {
    it('Verify GET request: fetch 2 post and validate', { tags: '@smoke' }, () => {
         cy.apiGet('/posts/2').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', 2)
            expect(response.body).to.have.property('userId')
            expect(response.body).to.have.property('title')
            expect(response.body).to.have.property('body')
        })
    })


    it('Verify POST request: create a post and validate', { tags: '@smoke' }, () => {
    cy.apiPost('/posts', postData).then((response) => {
      expect(response.status).to.eq(201)

      expect(response.body).to.have.property('id')
      expect(response.body.title).to.eq(postData.title)
      expect(response.body.body).to.eq(postData.body)
      expect(response.body.userId).to.eq(postData.userId)

        })
    })

    it('should create a post and then get it', () => {

    const requestBody = {
      title: `Post-${Date.now()}`,
      body: 'POST and GET request in one flow',
      userId: 1
    }

    cy.apiPost('/posts', requestBody).then((postResponse) => {
      expect(postResponse.status).to.eq(201)

      const postId = postResponse.body.id
      expect(postId).to.exist
      
      expect(postResponse.body).to.have.property('id')
      expect(postResponse.body.title).to.eq(requestBody.title)
      expect(postResponse.body.body).to.eq(requestBody.body)
      expect(postResponse.body.userId).to.eq(requestBody.userId)

      cy.apiGet(`/posts/${postId}`).then((getResponse) => {
        expect(getResponse.status).to.eq(404)
        // expect(getResponse.status).to.eq(200)

        // expect(getResponse.body.userId).to.eq(postId)
        // expect(getResponse.body.title).to.eq(requestBody.title)
        // expect(getResponse.body.body).to.eq(requestBody.body)
        // expect(getResponse.body.userId).to.eq(requestBody.userId)
      })
    })
  })

})