import React from 'react';
import {
  Link2,
  Settings,
  ShieldCheck,
  CreditCard,
  FileText,
  CheckCircle2,
  BarChart3,
  Search,
  Banknote,
  Award,
  Lock,
  TrendingUp,
  Handshake,
  Users,
  MessageSquare,
  Zap,
  Target,
  Palette,
  Brain,
  Timer,
  CircleDollarSign,
  Rocket,
  Download,
  Sparkles
} from 'lucide-react';

const ICON_MAP = {
  '🔗': Link2,
  '⚙': Settings,
  '⚙️': Settings,
  '🛡': ShieldCheck,
  '🛡️': ShieldCheck,
  '💳': CreditCard,
  '📄': FileText,
  '✅': CheckCircle2,
  '📊': BarChart3,
  '🔍': Search,
  '💸': Banknote,
  '🥇': Award,
  '🔒': Lock,
  '📈': TrendingUp,
  '🤝': Handshake,
  '👥': Users,
  '🗣': MessageSquare,
  '🗣️': MessageSquare,
  '⚡': Zap,
  '🎯': Target,
  '🎨': Palette,
  '🧠': Brain,
  '⏱': Timer,
  '⏱️': Timer,
  '💰': CircleDollarSign,
  '🚀': Rocket,
  '⬇': Download,
};

const EMOJI_PREFIX_RE = /^([\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{2300}-\u{23FF}]\uFE0F?)\s*/u;

export function parseEmojiTitle(text = '') {
  const match = text.match(EMOJI_PREFIX_RE);
  if (!match) return { emoji: null, label: text };
  return {
    emoji: match[1],
    label: text.slice(match[0].length)
  };
}

export function stripDownloadArrow(text = '') {
  return text.replace(/^⬇\s*/, '');
}

const CaseIcon = ({ icon, size = 22, strokeWidth = 1.75, className = '' }) => {
  const normalized = typeof icon === 'string' ? icon.trim() : '';
  const IconComponent = ICON_MAP[normalized] || ICON_MAP[normalized.replace(/\uFE0F/g, '')] || Sparkles;
  return <IconComponent size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />;
};

export default CaseIcon;
