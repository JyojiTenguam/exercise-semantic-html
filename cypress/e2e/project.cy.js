describe('1 - Adicione um cabeçalho na página.', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Verifica se existe um cabeçalho na página.', () => {
    cy.get('header').should('exist');
  });

  it('Verifica se existe um título dentro do cabeçalho.', () => {
    cy.get('header h1').should('exist');
  });

  it('Verifica se o texto do título é "Soco a 80km/h: Conheça o Stomatopoda".', () => {
    cy.get('header h1').should('have.text', 'Soco a 80km/h: Conheça o Stomatopoda');
  });
});

describe('2 - Adicione um conjunto de links que representam a área de navegação do site.', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Verifica se existe uma área de navegação no site', () => {
    cy.get('nav').should('exist');
  });

  it('Verifica se o primeiro link está com o texto "Página Inicial".', () => {
    cy.get('nav a').eq(0).should('have.text', 'Página Inicial');
  });

  it('Verifica se o segundo link está com o texto "Sobre".', () => {
    cy.get('nav a').eq(1).should('have.text', 'Sobre');
  });

  it('Verifica se o terceiro link está com o texto "Contato".', () => {
    cy.get('nav a').eq(2).should('have.text', 'Contato');
  });
});

describe('3 - Crie um artigo que vai conter os fatos interessantes sobre o `Stomatopoda`.', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Verifica se existe um artigo na página.', () => {
    cy.get('article').should('exist');
  });

  it('Verifica se existe um subtítulo (h2) dentro do artigo.', () => {
    cy.get('article h2').should('exist');
  });

  it('Verifica se o texto do subtítulo é "Fatos sobre o Stomatopoda".', () => {
    cy.get('article h2').should('have.text', 'Fatos sobre o Stomatopoda');
  });
});

describe('4 - Divida o artigo em seções.', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Verifica se "Odontodactylus scyllarus" aparece em itálico na primeira seção', () => {
    cy.get('article > section').eq(0).find('em').should('contain', 'Odontodactylus scyllarus');
  });

  it('Verifica se existe um subtítulo (h3) para cada seção.', () => {
    cy.get('article > section').each((section) => {
      cy.wrap(section.find('h3')).should('exist');
    });
  });

});

describe('5 - Divida o artigo em seções.', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Verifica se existem pelo menos duas seções no artigo', () => {
    cy.get('article > section').should('have.length.above', 1);
  });

  it('Verifica se existe um subtítulo (h3) para cada seção.', () => {
    cy.get('article > section').each((section) => {
      cy.wrap(section.find('h3')).should('exist');
    });
  });

  it('Verifica se existe uma imagem para cada seção.', () => {
    cy.get('article > section').each((section, index, collection) => {
      // skipping the first and last sections ('informações gerais' and 'referências bibliográficas')
      if (index != 0 && index + 1 < collection.length) cy.wrap(section.find('img')).should('exist');
    });
  });


  it('Verifica se a última seção contém links dentro de uma lista não ordenada.', () => {
    cy.get('article > section').last().find('ul li a').should('exist');
  });
});

describe('6 - Adicione um conteúdo adjacente ao artigo.', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Verifica se existe um conteúdo adjacente na página na página.', () => {
    cy.get('aside').should('exist');
  });

  it('Verifica se existe um link dentro do conteúdo adjacente com o endereço "https://www.youtube.com/watch?v=E0Li1k5hGBE".', () => {
    cy.get('aside a').should('have.attr', 'href', 'https://www.youtube.com/watch?v=E0Li1k5hGBE');
  });
});

describe('7 - Adicione um rodapé na página.', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Verifica se existe um rodapé na página.', () => {
    cy.get('footer').should('exist');
  });

  it('Verifica se existe o texto "Conteúdo compilado por <insere seu nome>, <ano atual>". no rodapé da página', () => {
    cy.get('footer').contains(/"Conteúdo compilado por .*, \d\d\d\d"\./);
  });
});
