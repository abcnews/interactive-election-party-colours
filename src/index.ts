import { whenDOMReady } from '@abcnews/env-utils';
import { mount } from 'svelte';
import InlineHighlights from './components/InlineHighlights/InlineHighlights.svelte';
import { PARTIES } from './constants';
import type { PartyConfig } from './constants';

function getPartyConfig(text: string): PartyConfig | null {
  const normalizedText = text.toLowerCase().trim();
  for (const config of Object.values(PARTIES)) {
    if (config.keywords.some(keyword => normalizedText.includes(keyword))) {
      return config;
    }
  }
  return null;
}

/**
 * Automatically find all <strong> tags and replace them with InlineHighlights components
 * if they match any party keywords.
 */
function autoColorStrongTags() {
  const strongTags = document.querySelectorAll('strong');
  strongTags.forEach(strong => {
    const text = strong.textContent || '';
    const config = getPartyConfig(text);

    if (config) {
      const wrapper = document.createElement('span');
      strong.parentNode?.replaceChild(wrapper, strong);

      mount(InlineHighlights, {
        target: wrapper,
        props: {
          name: text,
          bg: config.bg,
          fg: config.fg
        }
      });
    }
  });
}

// Ensure DOM is ready before running auto-replacement
whenDOMReady.then(() => {
  autoColorStrongTags();
});

if (process.env.NODE_ENV === 'development') {
  console.debug(`[interactive-election-party-colours] public path: ${__webpack_public_path__}`);
}
