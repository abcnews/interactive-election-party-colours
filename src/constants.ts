export interface PartyConfig {
  keywords: string[];
  bg: string;
  fg: string;
}

export const PARTIES: Record<string, PartyConfig> = {
  onp: {
    keywords: ['one nation', 'pauline hanson', 'barnaby joyce', 'cory bernadi'],
    bg: '#e5660b',
    fg: '#f1f1f1'
  },
  labor: {
    keywords: ['labor', 'alp', 'australian labor party'],
    bg: '#e11f30',
    fg: '#f1f1f1'
  },
  coalition: {
    keywords: ['liberal', 'coalition'],
    bg: '#0a52bf',
    fg: '#f1f1f1'
  },
  nationals: {
    keywords: ['nationals', 'national party', 'national'],
    bg: '#007056',
    fg: '#f1f1f1'
  },
  greens: {
    keywords: ['the greens', 'greens'],
    bg: '#51a802',
    fg: '#f1f1f1'
  },
  independents: {
    keywords: ['independents', 'other'],
    bg: '#757575',
    fg: '#f1f1f1'
  }
};
