export default function BeginMasthead ({ html, state }) {
  const { attrs } = state
  const { breakpoint = '56em', product } = attrs

  return html`
    <style scope='global'>
      :root {
        --global-bar-height: 4em;
        --product-bar-height: 3em;
      }
    </style>
    <style>
      :host {
        --color: #003451;
        --_muted: var(--muted, #5f5f5f);
        --_accent: var(--accent, #9556e1);
        --_max-inline-size: var(--max-inline-size, 1240px);
        --_inline-padding: var(--inline-padding, 1em);
        display: block;
        position: sticky;
        inset-block-start: 0;
        z-index: 10;
        color: var(--color);
        line-height: 1.5;
      }

      /* ==========================
       * UTILITIES
       * ======================= */

      .mbe { margin-block-end: 1em; }
      .mbe-half { margin-block-end: 0.5em; }
      .pi { padding-inline: var(--_inline-padding); }

      .muted { color: var(--_muted); }

      .sm-hidden { display: none; }

      @media screen and (min-width: ${breakpoint}) {
        :host { --global-bar-height: 5em; }
        .lg-hidden { display: none; }
        .lg-inline { display: inline; }
        .lg-block  { display: block; }
        .lg-flex   { display: flex; }
      }

      .accent { color: var(--_accent); }
      .semibold { font-weight: 600; }
      .small { font-size: 0.875em; }

      .clip {
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        width: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
      }

      /* ==========================
       * GENERAL STYLES
       * ======================= */

      header {
        background: white;
        border-bottom: 1px solid var(--_accent);
        z-index: 1;
      }

      #global-bar {
        block-size: var(--global-bar-height);
        max-inline-size: var(--_max-inline-size);
      }

      #widescreen-nav {
        gap: 0.125em;
      }

      #product-bar {
        background-color: var(--_accent);
        block-size: var(--product-bar-height);
        color: white;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      #product-bar > nav {
        inline-size: min(100vw, var(--_max-inline-size));
        gap: 1em;
      }

      .product-name {
        margin-inline-start: 0.25em;
      }

      #product-bar [slot="product-nav-lg"] {
        gap: 0.125em;
      }

      #nav-footer {
        background: black;
        color: white;
        padding-block: 3em;
      }

      li {
        list-style: none;
      }

      /* ==========================
       * MOBILE MENU
       * ======================= */

      #mobile-menu {
        display: none;
        background: white;
        block-size: ${Object.keys(attrs).includes('product')
    ? 'calc(100dvh - var(--global-bar-height) - var(--product-bar-height))'
    : 'calc(100dvh - var(--global-bar-height))'
};
        inset-block-start: ${Object.keys(attrs).includes('product')
    ? 'calc(var(--global-bar-height) + var(--product-bar-height))'
    : 'var(--global-bar-height)'
};
      }

      @media screen and (width < ${breakpoint}) {
        #mobile-menu-toggle:checked ~ #mobile-menu {
          display: flex;
          flex-direction: column;
        }
      }

      #mobile-menu-toggle:focus-visible ~ label {
        outline: 2px solid;
        outline-offset: 2px;
      }

      label[for="mobile-menu-toggle"] figure:after {
        content: url("data:image/svg+xml,%3Csvg width='22' height='21' viewBox='0 0 22 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.830078' y='-0.00317383' width='21.0552' height='2.95288' rx='1.47644' fill='%23003451'/%3E%3Crect x='0.830078' y='8.60938' width='21.0552' height='2.95288' rx='1.47644' fill='%23003451'/%3E%3Crect x='0.830078' y='17.2219' width='21.0552' height='2.95288' rx='1.47644' fill='%23003451'/%3E%3C/svg%3E%0A");
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: end;
        inline-size: 2.75em;
        aspect-ratio: 1 / 1;
      }

      #mobile-menu-toggle:checked ~ label[for="mobile-menu-toggle"] figure:after {
        content: url("data:image/svg+xml,%3Csvg width='15' height='16' viewBox='0 0 15 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.3717 11.8736L3.64752 4.14941' stroke='%23003451' stroke-width='4.86818' stroke-miterlimit='10' stroke-linecap='square' stroke-linejoin='round'/%3E%3Cpath d='M11.3067 4.21436L3.58252 11.9385' stroke='%23003451' stroke-width='4.86818' stroke-miterlimit='10' stroke-linecap='square' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      }

      #mobile-menu-toggle:checked ~ label .expanded { display: inline; }
      #mobile-menu-toggle:checked ~ label .collapsed { display: none; }
      #mobile-menu-toggle:not(:checked) ~ label .expanded { display: none; }
      #mobile-menu-toggle:not(:checked) ~ label .collapsed { display: inline; }

      #resources-mobile {
        display: grid;
        grid-gap: 1em;
        grid-template-columns: repeat(auto-fit, minmax(max(calc(50% - 1em), 120px), 1fr));
      }

      #resources-mobile h3 {
        color: var(--_muted);
      }

      #resources-mobile a {
        color: var(--_accent);
        display: inline-block;
        padding-block: 0.125em;
      }
    </style>

    <masthead-symbols></masthead-symbols>

    <header class="relative">
      <div id="global-bar" class="flex align-items-center pi mi-auto">
        <div id="begin-logo">
          <a href="https://begin.com">
            <figure>
              <masthead-begin-logo></masthead-begin-logo>
              <figcaption class="clip">Begin</figcaption>
            </figure>
          </a>
        </div>

        <!-- -------------- -->
        <!--   Mobile nav   -->
        <!-- -------------- -->
        <input
          type="checkbox"
          role="button"
          aria-haspopup="true"
          id="mobile-menu-toggle"
          name="mobile-menu-toggle"
          class="clip absolute opacity-0 lg-hidden"
          autocomplete="off"
        />
        <label for="mobile-menu-toggle" class="mis-auto lg-hidden">
          <figure aria-hidden="true"></figure>
          <span class="clip">Site navigation</span>
          <span class="clip expanded">expanded</span>
          <span class="clip collapsed">collapsed</span>
        </label>

        <nav id="mobile-menu" aria-label="${product} navigation" class="lg-hidden fixed overflow-y-scroll inset-i-0">
          <section>
            <h1 class="clip">${product}</h1>
            <slot name="product-nav"></slot>
          </section>

          <section>
            <masthead-slice>
              <h2 class="semibold mbe">Products</h2>
              <ul>
                <li class="mbe">
                  <a href="https://begin.com">
                    <span class="semibold accent">Begin CLI</span><br />
                    <span class='small'>Cloud distribution</span>
                  </a>
                </li>
                <li class="mbe">
                  <a href="https://enhance.dev">
                    <span class="semibold accent">Enhance</span><br />
                    <span class='small'>Resilient fullstack web apps</span>
                  </a>
                </li>
                <li class="mbe">
                  <a href="https://arc.codes">
                    <span class="semibold accent">Architect</span><br />
                    <span class='small'>Declarative deployment</span>
                  </a>
                </li>
              </ul>
            </masthead-slice>
          </section>

          <section>
            <masthead-slice>
              <a href="showcase">
                <h2 class="semibold">Showcase</h2>
              </a>
            </masthead-slice>
            <masthead-slice>
              <a href="blog">
                <h2 class="semibold">Blog</h2>
              </a>
            </masthead-slice>

            <masthead-slice>
              <h2 class="mbe semibold">Resources</h2>
              <div id="resources-mobile" class="small">
                <article>
                  <h3 class="semibold mbe-half">Developer Docs</h3>
                  <ul>
                    <li><a href="/">Begin CLI</a></li>
                    <li><a href="/">Enhance</a></li>
                    <li><a href="/">Architect</a></li>
                  </ul>
                </article>

                <article>
                  <h3 class="semibold mbe-half">Learning</h3>
                  <ul>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Youtube</a></li>
                  </ul>
                </article>

                <article>
                  <h3 class="semibold mbe-half">Issues & Help</h3>
                  <ul>
                    <li><a href="/">Support</a></li>
                    <li><a href="/">Github</a></li>
                  </ul>
                </article>

                <article>
                  <h3 class="semibold mbe-half">Community</h3>
                  <ul>
                    <li><a href="/">Mastodon</a></li>
                    <li><a href="/">Twitter</a></li>
                    <li><a href="/">Discord</a></li>
                  </ul>
                </article>
              </div>
            </masthead-slice>
          </section>

          <div id="nav-footer" class="flex align-items-center justify-content-between pi mbs-auto">
            <masthead-deploy-button></masthead-deploy-button>
          </div>
        </nav>

        <!-- -------------- -->
        <!-- Widescreen nav -->
        <!-- -------------- -->
        <nav aria-label="Begin platform navigation" class="sm-hidden lg-flex align-items-center flex-grow">
          <div id="widescreen-nav" class="flex justify-content-center flex-grow">
            <masthead-section-dropdown label="Products" ${Object.keys(attrs).includes("product") ? "active" : ""}>
              <div>
                <h3 class="semibold"><a href="https://begin.com">Begin CLI</a></h3>
                <p class="small">Cloud distribution</p>
              </div>
              <div>
                <h3 class="semibold"><a href="https://enhance.dev">Enhance</a></h3>
                <p class="small">Resilient fullstack web apps</p>
              </div>
              <div>
                <h3 class="semibold"><a href="https://arc.codes">Architect</a></h3>
                <p class="small">Declarative deployment</p>
              </div>
            </masthead-section-dropdown>

            <masthead-section-link href="showcase">Showcase</masthead-section-link>

            <masthead-section-link href="blog">Blog</masthead-section-link>

            <masthead-section-dropdown label="Resources">
              <article>
                <h2 class="small muted semibold mbe">Developer Docs</h2>
                <ul>
                  <li><a href="https://begin.com/docs">Begin CLI</a></li>
                  <li><a href="https://enhance.dev/docs">Enhance</a></li>
                  <li><a href="https://arc.codes">Architect</a></li>
                </ul>
              </article>

              <article>
                <h2 class="small muted semibold mbe">Support</h2>
                <ul>
                  <li><a href="/">Submit a Ticket</a></li>
                  <li><a href="/">Enhance Chat</a></li>
                  <li><a href="/">Architect Chat</a></li>
                </ul>
              </article>

              <article>
                <h2 class="small muted semibold mbe">GitHub</h2>
                <ul>
                  <li><a href="/">Begin</a></li>
                  <li><a href="/">Enhance</a></li>
                  <li><a href="/">Architect</a></li>
                </ul>
              </article>

              <article>
                <h2 class="small muted semibold mbe">Mastodon</h2>
                <ul>
                  <li><a href="https://fosstodon.org/@enhance_dev">Enhance</a></li>
                  <li><a href="https://fosstodon.org/@enhance_dev">Architect</a></li>
                </ul>
              </article>
            </masthead-section-dropdown>
          </div>

          <div class="flex">
            <masthead-deploy-button></masthead-deploy-button>
          </div>
        </nav>
      </div>
    </header>

    ${ product
    ? `
        <div id="product-bar" class="flex align-items-center relative">
          <!-- Mobile product bar -->
          <nav aria-label="${product} navigation" class="flex lg-hidden align-items-center pi">
            <h2 class="product-name">
              <span class="semibold">${product}:</span>
              <slot name="product-page"></slot>

            </h2>
          </nav>

          <!-- Widescreen product bar -->
          <nav aria-label="${product} navigation" class="sm-hidden lg-flex align-items-center pi mi-auto">
            <h2 class="product-name">
              <span class="semibold">${product}</span>
            </h2>
            <slot name="product-nav-lg"></slot>
          </nav>
        </div>
      `
    : ''
}
  `
}
