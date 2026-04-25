import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../CaseStudy.css';
import { vivoPayTags } from '../../data/vivoPayData';
import brFlag from '../../assets/flags/br_flag.jpg';
import ukFlag from '../../assets/flags/uk_flag.jpg';
import esFlag from '../../assets/flags/es_flag.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: d } })
};

const InView = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, ease: 'easeOut', delay }}
  >
    {children}
  </motion.div>
);

const Img = ({ label, className = '' }) => (
  <div className={`case-img-placeholder ${className}`}>{label}</div>
);

const langMeta = {
  'pt-br': { flag: brFlag, label: 'Português' },
  'en':    { flag: ukFlag, label: 'English' },
  'es':    { flag: esFlag, label: 'Español' },
};

const VivoPay = () => {
  const { lang = 'pt-br' } = useParams();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    if (!isLangOpen) return;
    const handle = (e) => { if (langRef.current && !langRef.current.contains(e.target)) setIsLangOpen(false); };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [isLangOpen]);

  const otherLangs = Object.entries(langMeta).filter(([l]) => l !== lang);
  const backLabel = lang === 'en' ? '← Projects' : lang === 'es' ? '← Proyectos' : '← Projetos';

  return (
    <div className="case">

      {/* ─── NAV ─── */}
      <nav className="case-nav">
        <Link to="/" className="case-nav-logo">Victor Morais</Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to={`/${lang}`} className="case-back">{backLabel}</Link>
          <div className="v2-contact-wrap" ref={langRef}>
            <button className="v2-lang-btn" onClick={() => setIsLangOpen(o => !o)}>
              <img src={langMeta[lang]?.flag} alt={lang} /> ▾
            </button>
            {isLangOpen && (
              <div className="v2-contact-dropdown">
                {otherLangs.map(([l, meta]) => (
                  <Link key={l} to={`/${l}/cases/vivo-pay`} className="v2-contact-item" onClick={() => setIsLangOpen(false)}>
                    <img src={meta.flag} alt={meta.label} /> {meta.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <header className="case-hero" style={{ background: 'linear-gradient(135deg, #0a0010 0%, #1a0033 35%, #440066 65%, #660099 100%)' }}>
        <div className="case-hero-inner">
          <motion.span className="case-hero-tag" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            Estudo de Caso · Vivo × Itaú
          </motion.span>

          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0.08}>
            Vivo <span>Pay</span>
          </motion.h1>

          <motion.div className="case-tags" style={{ justifyContent: 'center' }} initial="hidden" animate="visible" variants={fadeUp} custom={0.14}>
            {vivoPayTags.map(t => (
              <span key={t} className="case-tag">{t}</span>
            ))}
          </motion.div>

          <motion.p className="case-hero-subtitle" initial="hidden" animate="visible" variants={fadeUp} custom={0.18}>
            Como estruturei do zero a vertical financeira da Vivo e conduzi a integração do cartão de crédito em parceria com o Itaú
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.24} style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
            <a href="/vivo-pay-case.pdf" download className="case-hero-btn">⬇ Baixar apresentação completa</a>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.28}>
            <Img label="[ HERO IMAGE ]" className="case-img-placeholder--hero" />
          </motion.div>
        </div>
      </header>

      {/* ─── VISÃO GERAL ─── */}
      <div className="case-overview">
        <div className="case-overview-inner">
          {[
            { label: 'Empresa',      value: 'Vivo (Telefônica Brasil)' },
            { label: 'Meu papel',    value: 'Product Designer Especialista' },
            { label: 'Parceiro',     value: 'Banco Itaú' },
            { label: 'Plataforma',   value: 'iOS e Android (app nativo)' },
            { label: 'Período',      value: 'Fev/2023 – Jul/2024' },
            { label: 'Ferramentas',  value: 'Figma · GA4 · Maze' },
          ].map(item => (
            <div key={item.label} className="case-overview-item">
              <div className="case-overview-label">{item.label}</div>
              <div className="case-overview-value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CONTENT ─── */}
      <div className="case-content">

        {/* DESAFIO */}
        <InView>
          <div className="case-section">
            <span className="case-eyebrow">01 · Contexto</span>
            <h2>O Desafio</h2>
            <p>A Vivo possuía soluções financeiras robustas, mas fragmentadas. O usuário que tinha o cartão Vivo Pay Itaú precisava sair do app da Vivo e acessar o app do Itaú para gerenciar seu cartão — uma fricção que custava à Vivo o controle sobre a experiência e a retenção dentro do seu ecossistema.</p>
            <p style={{ marginTop: 16 }}>O desafio não era resolver uma dor explícita do usuário, mas algo mais sofisticado: criar uma experiência tão completa dentro do app Vivo que ele não precisasse mais sair — sem que isso parecesse uma migração forçada.</p>
            <div style={{ marginTop: 32 }}>
              <Img label="[ IMAGEM — benchmark / contexto ]" className="case-img-placeholder--wide" />
            </div>
          </div>
        </InView>

        {/* MEU PAPEL */}
        <InView>
          <div className="case-section">
            <span className="case-eyebrow">02 · Papel</span>
            <h2>Fui contratado para construir uma área que não existia</h2>
            <p>Entrei como um dos primeiros Product Designers Especialistas da vertical financeira da Vivo. Coube a mim estruturar os ritos de design, definir o modelo de colaboração com parceiros externos e conduzir três jornadas críticas simultaneamente: Cartão de Crédito (Itaú), Seguros (Porto Seguro) e Conta Digital.</p>
            <p style={{ marginTop: 16 }}>Neste case, aprofundo o Cartão de Crédito — a jornada mais complexa, que exigiu negociação técnica direta com o banco parceiro para viabilizar uma integração que nenhum outro parceiro do Itaú havia feito da mesma forma.</p>
            <div className="case-highlights">
              {[
                { icon: '🔗', title: 'Ponte Estratégica', desc: 'Interface direta entre negócio da Vivo, engenharia do Itaú e stakeholders' },
                { icon: '⚙️', title: 'Workflow de Design', desc: 'Estabeleci os ritos do zero: discovery, exploração, handoff' },
                { icon: '🛡️', title: 'Guardião da Experiência', desc: 'Garanti identidade Vivo mesmo usando APIs de terceiros' },
              ].map(b => (
                <div key={b.title} className="case-highlight">
                  <div className="case-highlight-icon">{b.icon}</div>
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </InView>

        {/* DISCOVERY */}
        <InView>
          <div className="case-section">
            <span className="case-eyebrow">03 · Discovery</span>
            <h2>Descobrindo o caminho certo</h2>
            <p>O processo de discovery revelou que o modelo padrão adotado por outros parceiros do Itaú — soluções white-label com ajustes visuais pontuais — não entregaria o SuperApp que a Vivo buscava. Identifiquei isso no benchmark e levei para a mesa: a integração via API (third-party app) era o único caminho que garantiria controle total da interface e manteria o usuário dentro do ecossistema.</p>
            <div style={{ marginTop: 32 }}>
              <Img label="[ IMAGEM — benchmark / análise de concorrentes ]" className="case-img-placeholder--wide" />
            </div>
            <div className="case-decision-alt">
              <span className="case-decision-alt-label">A decisão estratégica</span>
              <p>Enquanto as especificações técnicas das APIs eram definidas pelo Itaú, conduzi dinâmicas internas para responder: o que nossa solução precisa ser? O resultado foi o escopo do MVP — extrato, dados do cartão e pagamento de fatura.</p>
            </div>
          </div>
        </InView>

        {/* PRIMEIROS RASCUNHOS */}
        <InView>
          <div className="case-section">
            <span className="case-eyebrow">04 · Conceituação</span>
            <h2>Do conceito à realidade</h2>
            <p>A ideia inicial era um cartão grande e impactante dentro do app. Ao alinhar com o time de DesignOps, identifiquei que alterações estruturais no Design System global da Telefônica levariam meses de aprovação. Tomei a decisão de trabalhar dentro dos componentes existentes — priorizando time-to-market sem gerar débito técnico de design.</p>
            <div className="case-two-col" style={{ marginTop: 32 }}>
              <Img label="[ IMAGEM — rascunho v0 conceito ]" className="case-img-placeholder--square" />
              <Img label="[ IMAGEM — rascunho v0 com DS ]" className="case-img-placeholder--square" />
            </div>
          </div>
        </InView>

        {/* VALIDAÇÕES */}
        <InView>
          <div className="case-section">
            <span className="case-eyebrow">05 · Validação</span>
            <h2>Testamos, ouvimos, ajustamos</h2>
            <p style={{ fontWeight: 600, color: '#0d1117', marginBottom: 8 }}>Rodada 1 de testes</p>
            <p>Com a V0 pronta, levamos ao público. Os testes revelaram que os usuários queriam mais do que apenas visualizar dados — dois pontos críticos emergiram: a necessidade de Cartão Virtual e de exportação da fatura em PDF.</p>
            <div className="case-feedback-grid">
              <div className="case-feedback-card">
                <h4>💳 Cartão Virtual</h4>
                <p>O Itaú não conseguiria entregar a API a tempo. Implementamos um disclaimer estratégico no fluxo — na segunda rodada de testes, os usuários já não questionavam sobre a funcionalidade, eliminando frustração.</p>
              </div>
              <div className="case-feedback-card">
                <h4>📄 Exportação em PDF</h4>
                <p>Articulamos com o Itaú a inclusão na API ainda para o MVP. O usuário nem perguntava — simplesmente usava. Sinal claro de que era esperado.</p>
              </div>
            </div>
            <div style={{ marginTop: 32 }}>
              <Img label="[ IMAGEM — telas da v1 com disclaimer e PDF ]" className="case-img-placeholder--wide" />
            </div>
          </div>
        </InView>

        {/* JORNADA COMPLETA */}
        <InView>
          <div className="case-section">
            <span className="case-eyebrow">06 · Entrega</span>
            <h2>A jornada final</h2>
            <p>O produto entregue cobria o fluxo completo: acesso pelo menu Pay → identificação do cartão → KYC → home do cartão → fatura → pagamento.</p>

            {/* Figma embed placeholder */}
            <div className="case-figma-embed">
              <div className="case-figma-embed-icon">🎨</div>
              <h4>Embed — Handoff Figma</h4>
              <p>Substituir pelo iframe do Figma quando disponível</p>
              {/* <iframe src="URL_DO_FIGMA" width="100%" height="100%" allowFullScreen /> */}
            </div>

            <div className="case-screenshots" style={{ marginTop: 32 }}>
              {['Home cartão', 'KYC', 'Fatura', 'Pagamento'].map(s => (
                <Img key={s} label={`[ TELA — ${s} ]`} className="case-img-placeholder--screen" />
              ))}
            </div>
          </div>
        </InView>

        {/* MÉTRICAS */}
        <InView>
          <div className="case-section">
            <span className="case-eyebrow">07 · Resultados</span>
            <h2>Garantindo que o produto nascesse rastreável</h2>
            <p>Sem dados de longo prazo disponíveis no período do projeto, priorizei que o produto não fosse ao ar às cegas. Todos os pontos de clique foram instrumentados com triggers no GA4. Nos testes com Maze, a segunda rodada validou que todos os pontos críticos da V0 foram sanados. A adoção foi gradual e controlada pela Vivo, permitindo monitoramento de comportamento real sem ruído.</p>
            <div className="case-metrics-grid">
              {[
                { icon: '✅', value: '100% dos pontos críticos da V0 sanados na V1' },
                { icon: '📊', value: 'Tracking completo via GA4 em todos os touchpoints' },
                { icon: '🔍', value: 'Sessões monitoradas via Maze em adoção gradual' },
              ].map(m => (
                <div key={m.value} className="case-metric">
                  <span className="case-metric-icon">{m.icon}</span>
                  <div className="case-metric-value">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </InView>

        {/* PRÓXIMOS PASSOS */}
        <InView>
          <div className="case-section">
            <span className="case-eyebrow">08 · Visão de Futuro</span>
            <h2>O que vem depois</h2>
            <ul className="case-next-list">
              {[
                'Cartão Virtual dentro do app',
                'Pagamento direto via PIX ou conta Vivo',
                'Contratação de novo cartão ou adicional',
                'Parcelamento de faturas',
              ].map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </InView>

      </div>

      {/* ─── CTA FINAL ─── */}
      <InView>
        <section className="case-cta">
          <h2>Quer ver mais detalhes?</h2>
          <p>Acesse a apresentação completa do case ou entre em contato.</p>
          <div className="case-cta-buttons">
            <a href="/vivo-pay-case.pdf" download className="case-cta-btn-primary">⬇ Baixar apresentação</a>
            <a href="mailto:victor9009@gmail.com" className="case-cta-btn-secondary">Falar comigo</a>
          </div>
        </section>
      </InView>

    </div>
  );
};

export default VivoPay;
