# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Nim / Huppeldepup site notes

Built from the Figma file "Showcase (Copy)", page "Design all pages" (6 desktop frames).

| Route | Figma frame |
| --- | --- |
| `/` | Home |
| `/all-inclusive-groups/` | Diensten overzicht (groups) |
| `/private-dining/` | Diensten Detailpagina (canals) |
| `/menu/` | Diensten overzicht (menu) |
| `/reservation/` | Reservering / contact / offerte pagina |
| `/thank-you/` | Bedankt pagina |

Open items:

- **Fonts**: the design uses Cako, PP Neue Montreal and Helvetica Neue (licensed). They are used when
  installed locally; otherwise Gilda Display / Inter Tight from Google Fonts stand in. See the note at
  the top of `src/styles/global.css` to self-host the licensed files.
- **Reservations**: there is no booking backend. Set `PUBLIC_RESERVATION_ENDPOINT` to a URL that
  accepts a JSON POST; on success the form redirects to `/thank-you/`. Without it, the form validates
  and then asks visitors to call or mail.
- **Content gaps in the design**: social account URLs (`src/data/site.ts`), FAQ answers and most body
  copy are still placeholder text.
