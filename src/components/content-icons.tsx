import {
  Blocks,
  Bot,
  Code2,
  Gamepad2,
  Globe,
  Mail,
  Sparkles,
  TerminalSquare,
  type LucideIcon,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

type CustomIconProps = SVGProps<SVGSVGElement> & {
  'aria-hidden'?: boolean | 'true' | 'false';
};

type ProgramIcon = LucideIcon | ComponentType<CustomIconProps>;

const ScratchCatIcon = (props: CustomIconProps) => (
  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7.4 7.3 9.1 4.8l2 2.1h1.8l2-2.1 1.7 2.5c1.9.9 3.2 2.9 3.2 5.3 0 4-3.5 7.2-7.8 7.2S4.2 16.6 4.2 12.6c0-2.4 1.3-4.4 3.2-5.3Z" fill="#F59E0B" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4"/>
    <path d="M9.2 11.1c.4 0 .7-.3.7-.7s-.3-.7-.7-.7-.7.3-.7.7.3.7.7.7Zm5.6 0c.4 0 .7-.3.7-.7s-.3-.7-.7-.7-.7.3-.7.7.3.7.7.7Z" fill="currentColor"/>
    <path d="M10.2 13.2c.8.6 2.8.6 3.6 0" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4"/>
    <path d="M11.3 12.1 12 11l.7 1.1-.7.5-.7-.5Z" fill="#FFF7ED" stroke="currentColor" strokeLinejoin="round" strokeWidth="1"/>
    <path d="M6.7 15.6c.8.4 1.3 1 1.6 1.8M17.3 15.6c-.8.4-1.3 1-1.6 1.8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.2"/>
  </svg>
);

const PythonIcon = (props: CustomIconProps) => (
  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M11.3 3.5c-3.8 0-3.5 1.7-3.5 1.7V7h5.3v.6H5.7c-2 0-3.7 1.2-4.2 3.4-.6 2.5-.6 4.1 0 6.7.5 2 1.7 3.4 3.7 3.4h2.4v-3.2s-.1-3.7 3.6-3.7h6c1.7 0 3.1-1.4 3.1-3.1V6.6c0-3.2-2.7-3.1-2.7-3.1H11.3Z" fill="#3776AB"/>
    <path d="M10.2 5.2a1 1 0 1 1-2.1 0 1 1 0 0 1 2.1 0Z" fill="#fff"/>
    <path d="M12.7 20.5c3.8 0 3.5-1.7 3.5-1.7V17h-5.3v-.6h7.4c2 0 2.8-1.4 3.4-3.4.6-2.1.5-4.1 0-6.7-.4-1.9-1.4-3.4-3.4-3.4H16V6s.1 3.7-3.6 3.7h-6C4.7 9.7 3.3 11 3.3 12.8v4.5c0 3.2 2.8 3.2 2.8 3.2h6.6Z" fill="#FFD343"/>
    <path d="M13.8 18.8a1 1 0 1 1 2.1 0 1 1 0 0 1-2.1 0Z" fill="#fff"/>
  </svg>
);

const WhatsAppIcon = (props: CustomIconProps) => (
  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2.8a8.7 8.7 0 0 0-7.5 13.1l-1.1 4.1 4.2-1.1A8.7 8.7 0 1 0 12 2.8Z" fill="#25D366"/>
    <path d="m7.6 19-2.3.6.6-2.2" stroke="#128C7E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
    <path d="M15.8 13.7c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.5.1l-.4.5c-.1.2-.3.2-.4.1-.8-.4-1.5-1-2-1.8-.1-.2 0-.3.1-.4l.4-.4c.1-.1.1-.3.1-.4l-.6-1.4c-.1-.2-.3-.3-.5-.3h-.4c-.1 0-.3.1-.4.2-.4.4-.7 1-.6 1.6.1.7.5 1.4 1 2.1a7.4 7.4 0 0 0 2.9 2.5c.9.4 1.8.6 2.4.4.4-.1.8-.4 1-.8.1-.2.2-.6.1-.7-.1-.1-.3-.1-.4-.2Z" fill="#fff"/>
  </svg>
);

const WeChatIcon = (props: CustomIconProps) => (
  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9.4 4.2c-4 0-7.2 2.7-7.2 6.1 0 1.9 1 3.6 2.8 4.8l-.8 2.4 2.8-1.4c.7.1 1.2.2 1.8.2 4 0 7.2-2.7 7.2-6s-3.2-6.1-6.6-6.1Z" fill="#10B981"/>
    <path d="M15.9 9.1c3.3 0 5.9 2.1 5.9 4.8 0 1.5-.8 2.8-2.1 3.7l.6 2-2.3-1.2c-.5.1-1 .1-1.5.1-3.3 0-5.9-2.1-5.9-4.7 0-2.7 2.6-4.7 5.3-4.7Z" fill="#34D399"/>
    <path d="M7.4 9.5a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Zm3.1 0a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Zm4.5 5.2a.85.85 0 1 1 0-1.7.85.85 0 0 1 0 1.7Zm2.8 0a.85.85 0 1 1 0-1.7.85.85 0 0 1 0 1.7Z" fill="#064E3B"/>
  </svg>
);

const programIcons: Record<string, ProgramIcon> = {
  blocks: Blocks,
  'gamepad-2': Gamepad2,
  bot: Bot,
  globe: Globe,
  'terminal-square': TerminalSquare,
  sparkles: Sparkles,
  'scratch-cat': ScratchCatIcon,
  python: PythonIcon,
};

const socialIcons: Record<string, ProgramIcon> = {
  mail: Mail,
  whatsapp: WhatsAppIcon,
  wechat: WeChatIcon,
};

export const getProgramIcon = (iconName: string) => programIcons[iconName] ?? Code2;

export const getSocialIcon = (iconName: string) => socialIcons[iconName] ?? Mail;
