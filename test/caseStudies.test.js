import { describe, it, expect } from 'vitest';

import { vivoPayLocales } from '../src/data/vivoPayLocales.jsx';
import { sportingbetLocales } from '../src/data/sportingbetLocales.jsx';
import { bradescoLocales } from '../src/data/bradescoLocales.jsx';
import { tradersClubLocales } from '../src/data/tradersClubLocales.jsx';
import { consagradoLocales } from '../src/data/consagradoLocales.jsx';
import { vocalisLocales } from '../src/data/vocalisLocales.jsx';
import { amazinLocales } from '../src/data/amazinLocales.jsx';
import { personalProjectsPtBr, personalProjectsEn, personalProjectsEs } from '../src/data/projectsData.js';

describe('Suíte de Testes: Integridade e Dados dos Estudos de Caso', () => {

  describe('VivoPay - Estrutura e Localização', () => {
    it('deve conter as traduções para os três idiomas principais (pt-br, en, es)', () => {
      const idiomasEsperados = ['pt-br', 'en', 'es'];
      idiomasEsperados.forEach((idioma) => {
        expect(vivoPayLocales[idioma]).toBeDefined();
        expect(vivoPayLocales[idioma].hero.subtitle).toBeTruthy();
        expect(vivoPayLocales[idioma].delivery.captions.length).toBeGreaterThanOrEqual(4);
      });
    });

    it('deve possuir legendas de entrega válidas e preenchidas para as 4 telas do fluxo', () => {
      const legendasPt = vivoPayLocales['pt-br'].delivery.captions;
      expect(legendasPt.length).toBe(4);
      legendasPt.forEach((legenda) => {
        expect(legenda.trim().length).toBeGreaterThan(0);
      });
    });
  });

  describe('Sportingbet - Estrutura e Confidencialidade (NDA)', () => {
    it('deve conter aviso de confidencialidade (NDA) configurado em todos os idiomas', () => {
      ['pt-br', 'en', 'es'].forEach((idioma) => {
        expect(sportingbetLocales[idioma]).toBeDefined();
        expect(sportingbetLocales[idioma].nda || sportingbetLocales[idioma].confidentiality).toBeDefined();
      });
    });

    it('deve conter métricas de resultados expressivas', () => {
      const metricas = sportingbetLocales['pt-br'].results.metrics;
      expect(metricas.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Bradesco e TradersClub - Estrutura Textual e Métricas', () => {
    it('deve conter dados editoriais e métricas para Bradesco', () => {
      expect(bradescoLocales['pt-br'].results.metrics.length).toBeGreaterThan(0);
      expect(bradescoLocales['pt-br'].confidentiality).toBeDefined();
    });

    it('deve conter dados editoriais e métricas para TradersClub', () => {
      expect(tradersClubLocales['pt-br'].results.metrics.length).toBeGreaterThan(0);
      expect(tradersClubLocales['pt-br'].confidentiality).toBeDefined();
    });
  });

  describe('Lógica do Carrossel e Galeria Lightbox', () => {
    it('deve calcular corretamente a navegação circular da galeria', () => {
      const totalImagens = 4;
      const proximo = (indiceAtual) => (indiceAtual + 1) % totalImagens;
      const anterior = (indiceAtual) => (indiceAtual - 1 + totalImagens) % totalImagens;

      expect(proximo(0)).toBe(1);
      expect(proximo(3)).toBe(0);
      expect(anterior(0)).toBe(3);
      expect(anterior(2)).toBe(1);
    });
  });

  describe('Projetos Autorais (CONSAgrado, Vocalis e Amazin Trages a Rigor)', () => {
    it('deve conter traduções completas (pt-br, en, es) para os três novos cases', () => {
      ['pt-br', 'en', 'es'].forEach((idioma) => {
        expect(consagradoLocales[idioma]?.hero?.subtitle).toBeTruthy();
        expect(consagradoLocales[idioma]?.ecosystem?.apps?.length).toBe(4);

        expect(vocalisLocales[idioma]?.hero?.subtitle).toBeTruthy();
        expect(vocalisLocales[idioma]?.audio?.highlights?.length).toBe(3);

        expect(amazinLocales[idioma]?.hero?.subtitle).toBeTruthy();
        expect(amazinLocales[idioma]?.ux?.highlights?.length).toBe(3);
      });
    });

    it('deve listar os três projetos autorais separados na Home em todos os idiomas', () => {
      [personalProjectsPtBr, personalProjectsEn, personalProjectsEs].forEach((lista) => {
        expect(lista.length).toBe(3);
        expect(lista.map((p) => p.link)).toEqual(
          expect.arrayContaining([
            expect.stringContaining('/cases/consagrado'),
            expect.stringContaining('/cases/vocalis'),
            expect.stringContaining('/cases/amazin-trajes'),
          ])
        );
      });
    });
  });

});
