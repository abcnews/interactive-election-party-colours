import { whenDOMReady } from '@abcnews/env-utils';
import('./style.scss');

const CLASS_NAME = 'interactive-election-party-colours';

function renderApp() {
  document.querySelectorAll('[data-component="Anchor"][id^=partycolour]').forEach(partyStarter => {
    const party = (partyStarter.getAttribute('id') || '').replace('partycolour', '').toLowerCase();
    console.log('starting party with', party);

    const classes = [CLASS_NAME, `${CLASS_NAME}__${party}`];
    let node = partyStarter.nextSibling;

    if (node instanceof HTMLHeadingElement) {
      node.classList.add(...classes);
      node = node?.nextSibling;
    }
    while (node) {
      if (node instanceof HTMLParagraphElement) {
        node.querySelectorAll('strong').forEach(strong => strong.classList.add(...classes));
        node = node.nextSibling;
      } else {
        break;
      }
    }
  });
}

whenDOMReady.then(() => {
  renderApp();
});

if (process.env.NODE_ENV === 'development') {
  console.debug(`[interactive-election-party-colours] public path: ${__webpack_public_path__}`);
}
