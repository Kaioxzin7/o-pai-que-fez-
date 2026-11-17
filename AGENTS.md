<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Brand facts live in src/lib/brand.ts and the menu in src/data/menu.ts (copied from the official store); edit there, never hardcode in pages — single source of truth.
- Site chrome (SiteHeader/SiteFooter) is mounted once in __root; GSAP is dynamically imported inside effects — keeps SSR safe.
