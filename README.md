# interactive-election-party-colours

This project automatically highlights party names in an article when they are wrapped in `<strong>` tags. It replaces them with a Svelte component that applies the official party colours.

## How it works

The script scans the DOM for all `<strong>` tags. If the text content matches a keyword defined for a party, it mounts the `InlineHighlights` component to replace the element with a styled "pill" representation.

## Configuration

Parties, their keywords, and their associated background/foreground colours are configured in `src/constants.ts`.

### Example Configuration:

```typescript
export const PARTIES: Record<string, PartyConfig> = {
  labor: {
    keywords: ['labor', 'alp', 'australian labor party'],
    bg: '#e11f30',
    fg: 'white'
  }
  // ...
};
```

## Adding new parties

To add a new party or modify existing ones, edit the `PARTIES` object in `src/constants.ts`.

1.  **key**: A semantic name for the party.
2.  **keywords**: An array of strings used to match text in `<strong>` tags (case-insensitive).
3.  **bg**: The background hex colour.
4.  **fg**: The text colour (use something with high contrast against the background).
