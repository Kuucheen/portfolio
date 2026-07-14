## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Styling

- Use Tailwind CSS utilities for layout, spacing, sizing, typography, responsive behavior, colors, and interaction states whenever practical.
- Prefer existing DaisyUI components and patterns when they fit the interface instead of rebuilding equivalent components from scratch.
- Reuse the project's existing theme tokens, including the route-specific `--accent` color.
- Add custom CSS only when Tailwind or DaisyUI cannot express the requirement clearly. Avoid unnecessary component `<style>` blocks and one-off CSS.
- Preserve accessibility, responsive behavior, and the established visual design when adapting DaisyUI components.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
