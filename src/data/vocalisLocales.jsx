import React from 'react';

export const vocalisLocales = {
  'pt-br': {
    hero: {
      tag: 'Projeto Autoral · Desktop AI App (Landing em breve)',
      tags: ['Product Design', 'Python / Qt', 'Faster-Whisper', 'Audio Engineering'],
      subtitle: 'Assistente de ditado por voz inteligente para Windows — 100% gratuito, privado, com processamento local e refinamento opcional via IA.'
    },
    overview: {
      items: [
        { label: 'Produto', value: 'Vocalis (Voice Flow)' },
        { label: 'Meu papel', value: 'Product Design, UI & Engenharia Desktop' },
        { label: 'Plataforma', value: 'Windows (.exe com Auto-Update OTA)' },
        { label: 'Stack', value: 'Python, PySide6 (Qt), faster-whisper' },
        { label: 'Provedores IA', value: 'Google Gemini, OpenAI & Groq (BYOK)' },
        { label: 'Página Oficial', value: 'Em breve (em preparação)' },
      ]
    },
    context: {
      eyebrow: '01 · O Problema',
      title: 'Ditado Nativo Lento, Caro ou Invasivo',
      p1: <>Ferramentas comerciais de ditado por voz cobram assinaturas mensais caras, enviam todo o áudio bruto para nuvens de terceiros ou travam quando há ruído ambiente (trânsito, teclado mecânico, ar-condicionado).</>,
      p2: <>O <b>Vocalis</b> nasceu para resolver isso direto no sistema operacional: transcrição local ultrarrápida em memória com <code>faster-whisper</code>, interface translúcida discreta e privacidade total das chaves de API do usuário.</>
    },
    audio: {
      eyebrow: '02 · Engenharia de Áudio & UX',
      title: 'Escuta Inteligente que Ignora Ruído e Hesitações',
      p1: <>Para que o ditado pareça natural e não cole lixo no cursor, projetamos um pipeline de áudio em tempo real antes mesmo da transcrição:</>,
      highlights: [
        { icon: 'mic', title: 'Filtro Passa-Alta (200Hz Low-Cut)', desc: 'Corta até 85% dos graves de trânsito, escapamentos e ar-condicionado antes da detecção de voz.' },
        { icon: 'shield', title: 'Sustained Speech Gate (250ms)', desc: 'Exige vibração vocal contínua para ignorar cliques de teclado mecânico e barulhos curtos.' },
        { icon: 'zap', title: 'Auto-Stop Natural (VAD 0.9s)', desc: 'Detecta pausas naturais na fala, encerra a captura e injeta o texto direto no app em foco via scan-codes.' }
      ]
    },
    modes: {
      eyebrow: '03 · Modos de Uso & Comandos',
      title: 'Do Ditado Puro ao Modo Smart com IA',
      p1: <>O usuário alterna entre velocidade bruta e formatação inteligente usando atalhos globais do Windows — sem tirar a mão do fluxo de trabalho:</>,
      decisionLabel: 'Atalhos Globais & Comando de Voz',
      decisionP: <>
        <ul style={{ margin: '8px 0 8px 20px', paddingLeft: '16px', display: 'grid', gap: '10px' }}>
          <li><b>Ditado Direto (Ctrl + Shift + Espaço):</b> Transcrição local pura via <code>faster-whisper</code> em memória, colando instantaneamente no cursor.</li>
          <li><b>Modo Smart IA (Ctrl + Alt + Espaço):</b> Refina pontuação, remove vícios de fala e estrutura o texto com Gemini, OpenAI ou Groq (BYOK em <code>%APPDATA%\Vocalis\config.json</code>).</li>
          <li><b>Modo Mãos-Livres (Ctrl + Alt + H):</b> Escuta contínua inteligente sem precisar segurar atalhos.</li>
          <li><b>Comando "Enviar" Contextual:</b> Dizer "enviar" no fim da frase pressiona <code>Enter</code> automaticamente; no meio da frase, é digitado normalmente como texto.</li>
        </ul>
      </>
    },
    ui: {
      eyebrow: '04 · Interface & Distribuição',
      title: 'Pílula Translúcida 60fps & Auto-Update',
      p1: <>Desenhado com pílula flutuante translúcida, ondas sonoras a 60fps, ícones vetoriais SVG no padrão Lucide e menu sincronizado no System Tray. Conta ainda com janela dedicada de configuração e instalador <code>Vocalis-Setup.exe</code> com atualização automática via GitHub Releases.</>,
      caption: 'Assistente de configuração inicial e isolamento de credenciais do Vocalis.'
    },
    cta: {
      title: 'Vocalis está ganhando sua página oficial em breve',
      p1: 'Enquanto a landing page dedicada não vai ao ar, me chame se quiser saber mais sobre a arquitetura de áudio, UX desktop ou testar uma build.',
      btnTalk: 'Falar comigo'
    }
  },
  'en': {
    hero: {
      tag: 'Side Project · Desktop AI App (Landing coming soon)',
      tags: ['Product Design', 'Python / Qt', 'Faster-Whisper', 'Audio Engineering'],
      subtitle: 'Smart voice dictation assistant for Windows — 100% free, privacy-first local transcription with optional AI polishing.'
    },
    overview: {
      items: [
        { label: 'Product', value: 'Vocalis (Voice Flow)' },
        { label: 'Role', value: 'Product Design, UI & Desktop Engineering' },
        { label: 'Platform', value: 'Windows (.exe with OTA Auto-Update)' },
        { label: 'Stack', value: 'Python, PySide6 (Qt), faster-whisper' },
        { label: 'AI Providers', value: 'Google Gemini, OpenAI & Groq (BYOK)' },
        { label: 'Official Page', value: 'Coming soon (in progress)' },
      ]
    },
    context: {
      eyebrow: '01 · The Problem',
      title: 'Slow, Expensive, or Invasive Dictation Tools',
      p1: <>Commercial voice dictation apps charge pricey subscriptions, stream raw audio to third-party clouds, or choke on background noise like traffic, AC units, and mechanical keyboards.</>,
      p2: <><b>Vocalis</b> solves this natively on Windows: ultra-fast in-memory transcription with <code>faster-whisper</code>, a subtle translucent floating pill UI, and strict local credential isolation.</>
    },
    audio: {
      eyebrow: '02 · Audio Engineering & UX',
      title: 'Smart Listening That Ignores Noise and False Triggers',
      p1: <>To make dictation feel effortless without pasting garbage into active windows, we built a real-time pre-transcription audio pipeline:</>,
      highlights: [
        { icon: 'mic', title: '200Hz Low-Cut High-Pass Filter', desc: 'Cuts up to 85% of low-frequency traffic, engine rumble, and AC hum before VAD runs.' },
        { icon: 'shield', title: 'Sustained Speech Gate (250ms)', desc: 'Requires continuous vocal energy so mechanical keystrokes and short clicks never trigger recording.' },
        { icon: 'zap', title: 'Natural Auto-Stop (0.9s VAD)', desc: 'Detects natural speech pauses and injects text directly at the cursor via hardware scan-codes.' }
      ]
    },
    modes: {
      eyebrow: '03 · Modes & Voice Commands',
      title: 'From Raw Dictation to AI-Polished Output',
      p1: <>Users switch between raw speed and smart formatting using global Windows hotkeys without breaking focus:</>,
      decisionLabel: 'Global Hotkeys & Contextual Commands',
      decisionP: <>
        <ul style={{ margin: '8px 0 8px 20px', paddingLeft: '16px', display: 'grid', gap: '10px' }}>
          <li><b>Direct Dictation (Ctrl + Shift + Space):</b> Pure local <code>faster-whisper</code> transcription pasted instantly at the cursor.</li>
          <li><b>Smart AI Mode (Ctrl + Alt + Space):</b> Polishes punctuation and removes filler words via Gemini, OpenAI, or Groq (BYOK stored in <code>%APPDATA%\Vocalis\config.json</code>).</li>
          <li><b>Hands-Free Mode (Ctrl + Alt + H):</b> Continuous smart listening without holding keys.</li>
          <li><b>Contextual "Send" Command:</b> Saying "send" at the end of a phrase presses <code>Enter</code>; inside a sentence, it types normally.</li>
        </ul>
      </>
    },
    ui: {
      eyebrow: '04 · Interface & Distribution',
      title: '60fps Translucent Pill & OTA Auto-Update',
      p1: <>Designed with a translucent floating pill, 60fps audio waveforms, Lucide-style SVG vector icons, System Tray controls, and a dedicated <code>Vocalis-Setup.exe</code> installer with GitHub Releases OTA updates.</>,
      caption: 'Vocalis onboarding wizard and isolated API configuration.'
    },
    cta: {
      title: 'Vocalis official page is coming soon',
      p1: 'While the dedicated landing page is being prepared, feel free to reach out about the audio pipeline, desktop UX, or testing a build.',
      btnTalk: 'Get in touch'
    }
  },
  'es': {
    hero: {
      tag: 'Proyecto Propio · App Desktop IA (Landing próximamente)',
      tags: ['Product Design', 'Python / Qt', 'Faster-Whisper', 'Audio Engineering'],
      subtitle: 'Asistente inteligente de dictado por voz para Windows — 100% gratuito, privado, con transcripción local y refinamiento opcional con IA.'
    },
    overview: {
      items: [
        { label: 'Producto', value: 'Vocalis (Voice Flow)' },
        { label: 'Rol', value: 'Product Design, UI & Ingeniería Desktop' },
        { label: 'Plataforma', value: 'Windows (.exe con Auto-Update OTA)' },
        { label: 'Stack', value: 'Python, PySide6 (Qt), faster-whisper' },
        { label: 'Proveedores IA', value: 'Google Gemini, OpenAI & Groq (BYOK)' },
        { label: 'Página Oficial', value: 'Próximamente (en preparación)' },
      ]
    },
    context: {
      eyebrow: '01 · El Problema',
      title: 'Dictado Nativo Lento, Caro o Invasivo',
      p1: <>Las herramientas comerciales de dictado cobran suscripciones caras, envían audio sin procesar a servidores externos o fallan con ruido ambiente.</>,
      p2: <><b>Vocalis</b> resuelve esto de forma nativa en Windows: transcripción local ultrarrápida en memoria con <code>faster-whisper</code>, interfaz translúcida discreta y aislamiento local de credenciales.</>
    },
    audio: {
      eyebrow: '02 · Ingeniería de Audio & UX',
      title: 'Escucha Inteligente que Ignora Ruido y Falsos Disparos',
      p1: <>Construimos un pipeline de audio en tiempo real previo a la transcripción:</>,
      highlights: [
        { icon: 'mic', title: 'Filtro Pasa-Altos (200Hz Low-Cut)', desc: 'Reduce hasta 85% del ruido grave de tráfico y aire acondicionado antes de detectar voz.' },
        { icon: 'shield', title: 'Sustained Speech Gate (250ms)', desc: 'Exige vibración vocal continua para ignorar clics de teclado mecánico.' },
        { icon: 'zap', title: 'Auto-Stop Natural (VAD 0.9s)', desc: 'Detecta pausas naturales e inyecta el texto en el cursor mediante scan-codes.' }
      ]
    },
    modes: {
      eyebrow: '03 · Modos y Comandos',
      title: 'Del Dictado Directo al Modo Smart con IA',
      p1: <>Atajos globales en Windows permiten alternar velocidad y formato inteligente sin perder el foco:</>,
      decisionLabel: 'Atajos Globales y Comando Contextual',
      decisionP: <>
        <ul style={{ margin: '8px 0 8px 20px', paddingLeft: '16px', display: 'grid', gap: '10px' }}>
          <li><b>Dictado Directo (Ctrl + Shift + Espacio):</b> Transcripción local pura con <code>faster-whisper</code> en memoria.</li>
          <li><b>Modo Smart IA (Ctrl + Alt + Espacio):</b> Refina puntuación y estilo con Gemini, OpenAI o Groq (BYOK en <code>%APPDATA%\Vocalis\config.json</code>).</li>
          <li><b>Modo Manos Libres (Ctrl + Alt + H):</b> Escucha continua inteligente sin mantener teclas.</li>
          <li><b>Comando "Enviar" Contextual:</b> Decir "enviar" al final de la frase presiona <code>Enter</code>; en medio de la frase se escribe normal.</li>
        </ul>
      </>
    },
    ui: {
      eyebrow: '04 · Interfaz y Distribución',
      title: 'Píldora Translúcida 60fps & Auto-Update',
      p1: <>Interfaz flotante translúcida con ondas a 60fps, íconos vectoriales SVG, System Tray e instalador <code>Vocalis-Setup.exe</code> con actualizaciones automáticas vía GitHub Releases.</>,
      caption: 'Asistente de configuración inicial y aislamiento de API en Vocalis.'
    },
    cta: {
      title: 'La página oficial de Vocalis llega pronto',
      p1: 'Mientras preparamos su landing dedicada, escríbeme si quieres conocer más sobre la arquitectura de audio o UX desktop.',
      btnTalk: 'Hablar conmigo'
    }
  }
};
