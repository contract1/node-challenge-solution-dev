// test/exampleFromReadme.spec.js

import SocialNetworkQueries from '../src/SocialNetworkQueries.js';

describe('SocialNetworkQueries', () => {
    let socialNetworkQueries;
    let fetchCurrentUserSpy;

    beforeEach(() => {
        // Configura o spy para a função fetchCurrentUser
        fetchCurrentUserSpy = jasmine.createSpy('fetchCurrentUser').and.returnValue(Promise.resolve({ name: 'John Doe' }));
        
        // Cria uma instância de SocialNetworkQueries passando o spy como dependência
        socialNetworkQueries = new SocialNetworkQueries({ fetchCurrentUser: fetchCurrentUserSpy });
    });

    it('should call fetchCurrentUser when findPotentialInterests is called', async () => {
        // Chama o método findPotentialInterests
        await socialNetworkQueries.findPotentialInterests();
        
        // Verifica se o spy foi chamado
        expect(fetchCurrentUserSpy).toHaveBeenCalled();
    });

    it('should find potential interests', async () => {
        // Chama o método findPotentialInterests
        const interests = await socialNetworkQueries.findPotentialInterests();
        
        // Verifica se os interesses encontrados são os esperados
        expect(interests).toEqual(['Pride and Prejudice', 'Frankenstein']);
    });
});
