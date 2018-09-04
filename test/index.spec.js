const chai = require('chai');
const index = require('../index.js');
const expect = chai.expect;

describe('index', () => {
  describe('#getLinksFromMd', () => {
    describe('Quando não houver parametro', () => {
      it('Deve lançar Error', () => {
        expect(() => {index.getLinksFromMd()}).to.throw(Error, /Empty input/);
      });
    });
    describe('Quando o parametro não for uma string', () => {
      it('Deve lançar TypeError', () => {
        expect(() => {index.getLinksFromMd(123)}).to.throw(TypeError, /Not a string/);
      });
    });
    describe('Quando o parametro for uma string', () => {
      describe('e não houver URL', () => {
        it('Deve retornar um array vazio', () => {
          expect(index.getLinksFromMd('Amor é fogo que arde sem se ver')).to.be.an('array');
          expect(index.getLinksFromMd('É ferida que dói e não se sente')).to.be.empty;
        });
      });
      describe('e houver URL', () => {
        it('Deve retornar array com o objeto contendo url e link markdown', () => {
          expect(index.getLinksFromMd('É um [contentamento](www.contentamento.com) descontente')).to.be.an('array');
          expect(index.getLinksFromMd('É dor que [desatina](https://desatina.com) sem doer')).to.deep.equal([{href: 'https://desatina.com', text: 'desatina'}]);
        });
      });
      describe('e houver três URLs diferentes', () => {
        it('Deve retornar os objetos dentro do array', () => {
          expect(index.getLinksFromMd('Pesquisa no [google](www.google.com) estuda na [laboratoria](laboratoria.la) e colabora com a [wikipedia](http://wikipedia.com.br)')).to.be.an('array');
          expect(index.getLinksFromMd('Pesquisa no [google](www.google.com) estuda na [laboratoria](laboratoria.la) e colabora com a [wikipedia](http://wikipedia.com.br)')).to.deep.equal([{href: 'www.google.com', text: 'google'}, {href: 'laboratoria.la', text: 'laboratoria'}, {href: 'http://wikipedia.com.br', text: 'wikipedia'}]);
        });
      });
    })
  });
});