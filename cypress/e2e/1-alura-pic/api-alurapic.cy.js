describe('Buscar fotos e dados', () => {
    it('buscar fotos do usuário Flavio', () => {
        cy.request({ //comando request para realizar uma requisição http passando o método e a url desejada
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((res) => {//then(entao) baseado na variavel 'res' de retorno da request é feito os asserts pelo método expect
            expect(res.status).to.be.equal(200)// valida o status code retornado da request
            expect(res.body).is.not.empty //valida que o body retornado na request não está vazio
            expect(res.body[0]).to.have.property('description')//é esperado que o body contenha a property description na 1ª posição
            expect(res.body[0].description).to.be.equal('Farol iluminado')//é esperado que o body retornado na request contenha a propriedade description com valor igual a 'Farol iluminado'
        })    
    })

    it('fazer login do usuário Flavio', () => {
        cy.request({ 
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env() //Request de login POST utilizando os dados de userName e password do arquivo cypress.env.json
        }).then((res) => {
            expect(res.status).to.be.equal(200)// valida o status code retornado da request
            expect(res.body).is.not.empty //valida que o body da response retornado na request não está vazio
            expect(res.body).to.have.property('id')//é esperado que o body da response contenha a property id
            expect(res.body.id).to.be.equal(1)//é esperado que o body da response retornado na request contenha a propriedade id com valor igual a 1
            expect(res.body).to.have.property('email')//é esperado que o body da response contenha a property email
            expect(res.body.email).to.be.equal("flavio@alurapic.com.br")//é esperado que o body da response retornado na request contenha a propriedade email com valor igual ao email retornado
        })    
    })
})