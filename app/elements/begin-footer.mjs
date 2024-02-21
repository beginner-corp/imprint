const links = {
  staging: {
    ARCHITECT_URL: 'https://staging.arc.codes',
    AWS_LITE_URL: 'https://aws-lite.org',
    BEGIN_URL: 'https://staging.begin.com',
    DEPLOY_URL: 'https://staging.begin.com/deploy',
    ENHANCE_URL: 'https://staging.enhance.dev',
  },
  production: {
    ARCHITECT_URL: 'https://arc.codes',
    AWS_LITE_URL: 'https://aws-lite.org',
    BEGIN_URL: 'https://begin.com',
    DEPLOY_URL: 'https://begin.com/deploy/',
    ENHANCE_URL: 'https://enhance.dev',
  }
}

const year = new Date().getFullYear()

export default function BeginFooter ({ html, state }) {
  const { attrs } = state
  const { breakpoint = '56em' } = attrs

  const environment = process.env.ARC_ENV === 'production' ? 'production' : 'staging'

  return html`
    <style>
      :host {
        --_accent: var(--accent, rebeccapurple);
        --_color: var(--color, #333);
        --_background-color: var(--background-color, #f0f0f0);
        --_inline-padding: var(--inline-padding, 1em);
        --_max-inline-size: var(--max-inline-size, 1240px);
        color: var(--_color);
        background-color: var(--_background-color);
        padding-block: 2em;
        display: block;
      }

      footer {
        max-inline-size: var(--_max-inline-size);
        padding-inline: var(--_inline-padding);
      }

      nav {
        gap: 1em;
        line-height: 2;
        margin-block-end: 2em;
      }

      masthead-begin-logo {
        margin-block-end: 0.5em;
      }

      h2 {
        margin-block-end: 0.25em;
      }

      a {
        color: var(--_accent);
        font-size: 0.875em;
      }

      a:hover {
        text-decoration: underline;
      }

      hr {
        border-block-start: 1px solid var(--accent);
        opacity: 0.25;
      }

      small {
        font-size: 0.87em;
        line-height: 1.5;
        margin-block-start: 2em;
      }

      footer-made-with {
        display: block;
      }

      @media (min-width: ${breakpoint}) {
        nav {
          align-items: baseline;
          grid-template-columns: repeat(4, 1fr);
        }

        masthead-begin-logo {
          margin-block-end: 0;
          position: relative;
          inset-block-start: 7px;
        }
        
        footer-made-with {
          display: inline;
          padding-inline-start: 0.5ch;
        }
      }

    </style>
    <footer class="mi-auto">
      <nav class="grid">
        <masthead-begin-logo></masthead-begin-logo>
        <section>
          <h2 class="font-semibold">Begin</h2>
          <ul class="list-none">
            <li><a href="${links[environment].BEGIN_URL}">Home</a></li>
            <li><a href="${links[environment].BEGIN_URL}/about">About</a></li>
            <li><a href="https://enhance.dev/showcase">Showcase</a></li>
            <li>
              <a href="${links[environment].BEGIN_URL}/blog">Blog</a> /
              <a href="${links[environment].BEGIN_URL}/blog/rss">RSS</a>
            </li>
          </ul>
        </section>
        <section>
          <h2 class="font-semibold">Products</h2>
          <ul class="list-none">
            <li><a href="${links[environment].DEPLOY_URL}">Deploy</a></li>
            <li><a href="${links[environment].ENHANCE_URL}">Enhance</a></li>
            <li><a href="${links[environment].ARCHITECT_URL}">Architect</a></li>
            <li><a href="${links[environment].AWS_LITE_URL}">aws-lite</a></li>
          </ul>
        </section>
        <section>
          <h2 class="font-semibold">Et cetera</h2>
          <ul class="list-none">
            <li><a href="https://github.com/beginner-corp/policy/blob/main/begin-privacy-policy.md">Privacy policy</a></li>
            <li><a href="https://github.com/beginner-corp/policy/blob/main/begin-community-code-of-conduct.md">Code of conduct</a></li>
          </ul>
        </section>
      </nav>
      <hr />
      <small class="block">
        © ${year} Beginner Web Corp.
        <footer-made-with></footer-made-with>
      </small>
    </footer>
  `
}
