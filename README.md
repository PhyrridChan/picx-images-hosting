# Zhang Lab — Image Hosting & Data Repository

This repository hosts all static images and JSON data used by the Zhang Lab website (`zhang_lab`). All content is delivered via [jsDelivr](https://www.jsdelivr.com) from this GitHub repository.

The site frontend lives in a separate `zhang_lab` project. The data flow is:

```
picx-images-hosting (this repo)
└── JSONData/
    ├── content.json     ← site copy, menus, hero, homeContent, announcements
    ├── news.json
    ├── publications.json
    ├── members.json
    ├── research.json
    ├── join_us.json
    ├── contact.json
    └── manifest.json    ← { version, lastUpdated }
```

---

## Quick Start

### Update site data
1. Edit the relevant JSON file under `JSONData/`.
2. Bump `version` and `lastUpdated` in `JSONData/manifest.json`.
3. Commit & push to `master`.
4. Purge the jsDelivr cache: <https://www.jsdelivr.com/tools/purge>

### Add / update an image
Images are organized by section (`ZhangLab/`, `Emblem/`). Upload via the [PicX](https://github.com/XPoet/picx) web tool, then reference the path returned by PicX (e.g. `ZhangLab/news/260512-onlineGold.2vfdb6opwg.webp`).

---

## Announcements

The home page renders a **Bulletin Board** of up to ~6 latest items from `JSONData/content.json` → `announcements[]`. Each item is rendered by `src/components/AnnouncementSection.vue` in the `zhang_lab` frontend.

### Schema

Each announcement is an object with the following fields. **Bold** fields are required.

| Field | Type | Required | Notes |
|---|---|---|---|
| **`type`** | `string` | ✅ | One of: `recruitment`, `publication`, `award`, `event`, `general`. Determines the card color, badge icon, and label. |
| **`date`** | `string` | ✅ | Human-readable date. Free-form, but follow the existing style — e.g. `"May 12th, 2026"` or `"November 2025"`. |
| **`title`** | `string` | ✅ | Short title. HTML is allowed and rendered via `v-html` (e.g. `<span class="highlight">…</span>` for the publication type). |
| `description` | `string` | ⚠️ for non-publication types | One- or two-sentence summary. Clamped to 3 lines. |
| `link` | `object` | optional | `{ text, url, external }`. `external: true` opens in a new tab with `rel="noopener noreferrer"`. |
| `journal` | `string` | publication only | Journal name, shown in italic purple. |
| `authors` | `string` | publication only | Author list, clamped to 2 lines. |
| `journalCover` | `string` | optional | Absolute or repo-relative image URL. Falls back to a purple placeholder icon. |

#### `type` reference

| `type` | Badge icon | Badge label | Card color |
|---|---|---|---|
| `recruitment` | 👥 | Recruitment | teal `#4ecdc4` |
| `publication` | 📄 | Publication | purple `#6c5ce7` |
| `award` | 🏆 | Award | yellow `#f9ca24` |
| `event` | 📅 | Event | pink `#fd79a8` |
| `general` | 📢 | Announcement | orange `#ff7f32` (default) |

### Constraints

1. **Order**: items are rendered in array order. **Newest first** is the convention. Place the most recent announcement at index `0`.
2. **Count**: the bulletin board uses a CSS grid (`auto-fill, minmax(380px, 1fr)`). On a wide screen ~3–4 cards fit per row. Aim for **3–6 items**; archive older ones to `news.json` instead of keeping them here forever.
3. **Length**:
   - `title`: clamped to 3 lines. Keep under ~80 characters.
   - `description`: clamped to 3 lines. Keep under ~180 characters.
4. **Language**: site copy is English-only (matches `homeContent`, `news.json`, etc.). Mixed CN/EN is fine for proper nouns / award names.
5. **HTML safety**: `title` is rendered with `v-html`. **Do not** inject user-controlled content. Internal use only — trust the author.
6. **Source of truth**: detailed entries (with images, full descriptions) live in `news.json`. Announcements are a **digest** — link to `/news` for the full story via `link.url = "/news"`.
7. **No icons field**: the component maps `type` → icon internally. Do **not** add an `icon` key to the JSON — it will be ignored.

### Templates

#### Award
```json
{
  "type": "award",
  "date": "May 12th, 2026",
  "title": "Another Gold! Gold Prize at the 2026 Evaluations Days",
  "description": "Our team's project \"Intelligent Manufacturing System for Colon-Targeted Oral Probiotics\" won the gold prize in the online participation category of the 2026 Evaluations Days. Congratulations to He Yumao, Huang Yuqing, Liu Junyu, Gao Dan, Zhang Xiaopeng, and Prof. Zhang!",
  "link": { "text": "Learn more", "url": "/news", "external": false }
}
```

#### Event
```json
{
  "type": "event",
  "date": "February 6th, 2026",
  "title": "Team Building & New Year Celebration",
  "description": "The Zhang Lab gathered for a team-building activity and New Year celebration, reflecting on the achievements of the past year and looking forward to new opportunities ahead.",
  "link": { "text": "Learn more", "url": "/news", "external": false }
}
```

#### Publication
```json
{
  "type": "publication",
  "date": "November 2025",
  "title": "<span class=\"highlight\">New Publication!</span> Paper title in full",
  "journal": "Nature",
  "authors": "Can Yang Zhang*",
  "journalCover": "ZhangLab/publications/fc1.8adpqudlzq.webp",
  "link": { "text": "Read paper", "url": "https://doi.org/...", "external": true }
}
```

#### Recruitment
```json
{
  "type": "recruitment",
  "date": "December 2025",
  "title": "Recruiting PhD Students and Postdocs",
  "description": "We are looking for motivated PhD students and postdoctoral researchers to join our team. Excellent opportunities in biomaterials and drug delivery research.",
  "link": { "text": "View positions", "url": "/join-us", "external": false }
}
```

#### General
```json
{
  "type": "general",
  "date": "June 10th, 2026",
  "title": "Lab website refreshed",
  "description": "We have rolled out a new publications filter and a refreshed member gallery.",
  "link": { "text": "Learn more", "url": "/news", "external": false }
}
```

### Authoring checklist

Before committing changes to `announcements[]`:

- [ ] `type` is one of the five valid values.
- [ ] `date` and `title` are present.
- [ ] Non-publication items have a `description`.
- [ ] `link.url` points to an existing route (`/news`, `/publications`, `/join-us`, `/contact`, `/research`, `/members`) or an absolute `https://` URL.
- [ ] External links set `link.external: true`.
- [ ] Title ≤ 80 chars, description ≤ 180 chars.
- [ ] Items are ordered newest-first.
- [ ] Full story (with images) exists in `news.json`.
- [ ] `manifest.json` `version` is bumped and `lastUpdated` is set to today (ISO 8601 UTC).
- [ ] JSON is valid (no trailing commas; double quotes only).

### Reference: how the component reads the data

```vue
<!-- zhang_lab/src/views/HomeView.vue -->
<AnnouncementSection :announcements="content.announcements" />
```

```js
// zhang_lab/src/data/content.js
announcements: [
  { type: 'publication', date: 'November 2025', title: '…', journal: 'Nature', authors: '…' }
]
```

The component picks the icon and badge label from the `type` map; the JSON must **not** repeat these.

---

## Other JSON files

| File | Consumed by | Schema notes |
|---|---|---|
| `news.json` | `News` page + `CelebrationEffect` | `items[]` with `date`, `title`, `description`, optional `images[]`, `celebrate`, `celebrationType` (`award` / `confetti` / `fireworks`). Newest first. |
| `publications.json` | `Publications` page | `publications[]` with `year`, `title`, `authors`, `journal`, `type`, `url`, `abstract`, optional `note`, `acknowledgement`. |
| `members.json` | `Members` page | `groups[]` (Postdoctoral Fellows / PhD Candidates / Graduate Students / Undergraduates / Alumni) each with `members[]`. Each member has `name`, `image`, `joinDate`, `description`, optional `tags`, `researchText`, `imagePosition`, `imageScale`. |
| `research.json` | `Research` page | `interests[]` with `text` and `image`. |
| `join_us.json` | `Join Us` page | `positions[]` with `title`, `icon`, `description`, `requirements[]`, `materials[]`, `contact`. |
| `contact.json` | `Contact` page | Free-form contact info. |
| `manifest.json` | `config/index.js` | `{ version, lastUpdated }` — bump on every content change. |

---

## Cache busting

The site reads JSON via jsDelivr CDN. After every push, purge the cache:

1. Open <https://www.jsdelivr.com/tools/purge>.
2. Enter the URL of the changed file, e.g. `https://cdn.jsdelivr.net/gh/PhyrridChan/picx-images-hosting@master/JSONData/content.json`.
3. Click **Purge**.

Wait ~30 s before hard-reloading the site to verify the new content.

---

## Related repos

- `zhang_lab` — Vue 3 + Vite frontend that consumes this repo's JSON via `src/data/*.js` (the Vue source) and the converted JSON in `dist/data/`.
- Build & deploy instructions for the frontend are in `zhang_lab/README.md`.
        