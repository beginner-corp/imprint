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
    DEPLOY_URL: 'https://begin.com/deploy',
    ENHANCE_URL: 'https://enhance.dev',
  }
}

const svgIcon = `
<svg class="inline-block external-link-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.9458 1.41548C14.8386 1.16587 14.5942 1.00297 14.3226 1H9.80645C9.43232 1 9.12903 1.30329 9.12903 1.67742C9.12903 2.05155 9.43232 2.35484 9.80645 2.35484H12.6877L7.52129 7.52129C7.25714 7.78577 7.25714 8.21423 7.52129 8.47871C7.78577 8.74286 8.21423 8.74286 8.47871 8.47871L13.6452 3.31226V6.19355C13.6452 6.56768 13.9485 6.87097 14.3226 6.87097C14.6967 6.87097 15 6.56768 15 6.19355V1.67742C14.9995 1.58737 14.9811 1.49833 14.9458 1.41548Z" />
  <path d="M14.3226 10.0323C13.9505 10.0371 13.65 10.3376 13.6452 10.7097C13.6402 12.3288 12.3288 13.6402 10.7097 13.6452H5.29032C3.67116 13.6402 2.3598 12.3288 2.35484 10.7097V5.29032C2.3598 3.67116 3.67116 2.3598 5.29032 2.35484C5.66445 2.35484 5.96774 2.05155 5.96774 1.67742C5.96774 1.30329 5.66445 1 5.29032 1C2.92084 1 1 2.92084 1 5.29032V10.7097C1 13.0792 2.92084 15 5.29032 15H10.7097C13.0792 15 15 13.0792 15 10.7097C14.9951 10.3376 14.6947 10.0371 14.3226 10.0323Z" />
  <path d="M14.9458 1.41548C14.8386 1.16587 14.5942 1.00297 14.3226 1H9.80645C9.43232 1 9.12903 1.30329 9.12903 1.67742C9.12903 2.05155 9.43232 2.35484 9.80645 2.35484H12.6877L7.52129 7.52129C7.25714 7.78577 7.25714 8.21423 7.52129 8.47871C7.78577 8.74286 8.21423 8.74286 8.47871 8.47871L13.6452 3.31226V6.19355C13.6452 6.56768 13.9485 6.87097 14.3226 6.87097C14.6967 6.87097 15 6.56768 15 6.19355V1.67742C14.9995 1.58737 14.9811 1.49833 14.9458 1.41548Z" stroke="black" stroke-width="0.5"/>
  <path d="M14.3226 10.0323C13.9505 10.0371 13.65 10.3376 13.6452 10.7097C13.6402 12.3288 12.3288 13.6402 10.7097 13.6452H5.29032C3.67116 13.6402 2.3598 12.3288 2.35484 10.7097V5.29032C2.3598 3.67116 3.67116 2.3598 5.29032 2.35484C5.66445 2.35484 5.96774 2.05155 5.96774 1.67742C5.96774 1.30329 5.66445 1 5.29032 1C2.92084 1 1 2.92084 1 5.29032V10.7097C1 13.0792 2.92084 15 5.29032 15H10.7097C13.0792 15 15 13.0792 15 10.7097C14.9951 10.3376 14.6947 10.0371 14.3226 10.0323Z" stroke="black" stroke-width="0.5"/>
</svg>
`

export default function BeginMasthead({ html, state }) {
  const { attrs } = state
  const { breakpoint = '56em', product, active = '' } = attrs

  const from = product ? product.toLowerCase().replaceAll(' ', '-') : ''
  const environment = process.env.ARC_ENV === 'production' ? 'production' : 'staging'

  return html`
    <style scope='global'>
      :root {
        --global-bar-height: 4em;
        --product-bar-height: 3em;
        --masthead-max-height: calc(var(--global-bar-height) + var(--product-bar-height));
      }

      @media (min-width: ${breakpoint}) {
        :root { --global-bar-height: 5em; }
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
        position: fixed;
        inset-block-start: 0;
        inset-inline: 0;
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

      @media (min-width: ${breakpoint}) {
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
        gap: 0.75em;
      }

      #begin-logo {
        translate: -0.25em 0.125em;
      }

      #product-bar {
        background-color: var(--_accent);
        block-size: var(--product-bar-height);
        color: white;
      }

      #product-bar > nav {
        inline-size: min(100vw, var(--_max-inline-size));
        gap: 1em;
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

      .external-link-icon {
        vertical-align: middle;
        inline-size: 0.625em;
        aspect-ratio: 1 / 1;
      }

      .external-link-icon path {
        fill: #777;
        stroke: #777;
      }

      /* ==========================
       * MOBILE MENU
       * ======================= */

      #mobile-menu {
        display: none;
        background: hsla(0deg 0% 100% / 0.95);
        backdrop-filter: blur(3px);
        block-size: ${Object.keys(attrs).includes('product')
    ? 'calc(100dvh - var(--global-bar-height) - var(--product-bar-height))'
    : 'calc(100dvh - var(--global-bar-height))'
};
        inset-block-start: ${Object.keys(attrs).includes('product')
    ? 'calc(var(--global-bar-height) + var(--product-bar-height))'
    : 'var(--global-bar-height)'
};
      }

      @media (width < ${breakpoint}) {
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
          <a href="${links[environment].BEGIN_URL}" class="inline-block">
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

        <nav id="mobile-menu" class="lg-hidden fixed overflow-y-scroll inset-i-0">
          ${product
    ? `
          <section>
            <h1 class="clip">${product}</h1>
            <slot name="product-nav"></slot>
          </section>
            ` : ''}

          <section>
            <masthead-slice>
              <h2 class="semibold mbe">Products</h2>
              <ul>
                <li class="mbe">
                  <a href="${links[environment].DEPLOY_URL}">
                    <span class="semibold accent">Deploy</span><br />
                    <span class='small'>Global deployment made simple</span>
                  </a>
                </li>
                <li class="mbe">
                  <a href="${links[environment].ENHANCE_URL}">
                    <span class="semibold accent">Enhance</span><br />
                    <span class='small'>Resilient fullstack web apps</span>
                  </a>
                </li>
                <li class="mbe">
                  <a href="${links[environment].ARCHITECT_URL}">
                    <span class="semibold accent">
                      Architect ${svgIcon}
                    </span><br />
                    <span class='small'>Declarative deployment</span>
                  </a>
                </li>
                <li class="mbe">
                  <a href="${links[environment].AWS_LITE_URL}">
                    <span class="semibold accent">
                      aws-lite
                    </span><br />
                    <span class='small'>Community driven AWS client</span>
                  </a>
                </li>
              </ul>
            </masthead-slice>
          </section>

          <section>
            <masthead-slice>
              <a href="${links[environment].ENHANCE_URL}/showcase">
                <h2 class="semibold">Showcase</h2>
              </a>
            </masthead-slice>
            <masthead-slice>
              <a href="${links[environment].BEGIN_URL}/blog">
                <h2 class="semibold">Blog</h2>
              </a>
            </masthead-slice>

            <masthead-slice>
              <h2 class="mbe semibold">Resources</h2>
              <div id="resources-mobile" class="small">
                <article>
                  <h3 class="semibold mbe-half">Developer Docs</h3>
                  <ul>
                    <li><a href="${links[environment].DEPLOY_URL}/docs">Deploy</a></li>
                    <li><a href="${links[environment].ENHANCE_URL}/docs">Enhance</a></li>
                    <li><a href="${links[environment].ARCHITECT_URL}">Architect</a></li>
                    <li><a href="${links[environment].AWS_LITE_URL}">aws-lite</a></li>
                  </ul>
                </article>

                <article>
                  <h3 class="semibold mbe-half">Support</h3>
                  <ul>
                    <li><a href="https://begin-help.zendesk.com/hc/en-us/requests/new">Submit a Ticket</a></li>
                    <li><a href="${links[environment].ENHANCE_URL}/discord">Enhance Chat</a></li>
                    <li><a href="https://discord.gg/y5A2eTsCRX">Architect Chat</a></li>
                  </ul>
                </article>

                <article>
                  <h3 class="semibold mbe-half">GitHub</h3>
                  <ul>
                    <li><a href="https://github.com/beginner-corp">Begin</a></li>
                    <li><a href="https://github.com/enhance-dev">Enhance</a></li>
                    <li><a href="https://github.com/architect">Architect</a></li>
                  </ul>
                </article>

                <article>
                  <h3 class="semibold mbe-half">Mastodon</h3>
                  <ul>
                    <li><a href="https://fosstodon.org/@enhance_dev">Enhance</a></li>
                    <li><a href="https://fosstodon.org/@arcserverless">Architect</a></li>
                  </ul>
                </article>
              </div>
            </masthead-slice>
          </section>

          <div id="nav-footer" class="flex align-items-center justify-content-center pi mbs-auto">
            <masthead-deploy-button from="${from}"></masthead-deploy-button>
          </div>
        </nav>

        <!-- -------------- -->
        <!-- Widescreen nav -->
        <!-- -------------- -->
        <nav aria-label="Begin platform navigation" class="sm-hidden lg-flex align-items-center flex-grow">
          <div id="widescreen-nav" class="flex justify-content-center flex-grow">
            <masthead-section-dropdown label="Products" ${active === "products" ? "active" : ""}>
              <div>
                <h3 class="semibold"><a href="${links[environment].DEPLOY_URL}">Deploy</a></h3>
                <p class="small">Global deployment made simple</p>
              </div>
              <div>
                <h3 class="semibold"><a href="${links[environment].ENHANCE_URL}">Enhance</a></h3>
                <p class="small">Resilient fullstack web apps</p>
              </div>
              <div>
                <h3 class="semibold">
                  <a href="${links[environment].ARCHITECT_URL}">
                    Architect ${svgIcon}
                  </a>
                </h3>
                <p class="small">Declarative deployment</p>
              </div>
              <div>
                <h3 class="semibold"><a href="${links[environment].AWS_LITE_URL}">aws-lite</a></h3>
                <p class="small">Community driven AWS client</p>
              </div>
            </masthead-section-dropdown>

            <masthead-section-link href="${links[environment].ENHANCE_URL}/showcase" ${active === "showcase" ? "active" : ""}>Showcase</masthead-section-link>

            <masthead-section-link href="${links[environment].BEGIN_URL}/blog" ${active === "blog" ? "active" : ""}>Blog</masthead-section-link>

            <masthead-section-dropdown label="Resources">
              <article>
                <h2 class="small muted semibold mbe">Developer Docs</h2>
                <ul>
                  <li><a href="${links[environment].DEPLOY_URL}/docs">Deploy</a></li>
                  <li><a href="${links[environment].ENHANCE_URL}/docs">Enhance</a></li>
                  <li><a href="${links[environment].ARCHITECT_URL}">Architect</a></li>
                  <li><a href="${links[environment].AWS_LITE_URL}">aws-lite</a></li>
                </ul>
              </article>

              <article>
                <h2 class="small muted semibold mbe">Support</h2>
                <ul>
                  <li><a href="https://begin-help.zendesk.com/hc/en-us/requests/new">Submit a Ticket</a></li>
                  <li><a href="${links[environment].ENHANCE_URL}/discord">Enhance Chat</a></li>
                  <li><a href="https://discord.gg/y5A2eTsCRX">Architect Chat</a></li>
                </ul>
              </article>

              <article>
                <h2 class="small muted semibold mbe">GitHub</h2>
                <ul>
                  <li><a href="https://github.com/beginner-corp">Begin</a></li>
                  <li><a href="https://github.com/enhance-dev">Enhance</a></li>
                  <li><a href="https://github.com/architect">Architect</a></li>
                </ul>
              </article>

              <article>
                <h2 class="small muted semibold mbe">Mastodon</h2>
                <ul>
                  <li><a href="https://fosstodon.org/@enhance_dev">Enhance</a></li>
                  <li><a href="https://fosstodon.org/@arcserverless">Architect</a></li>
                </ul>
              </article>
            </masthead-section-dropdown>
          </div>

          <masthead-deploy-button from="${from}"></masthead-deploy-button>
        </nav>
      </div>
    </header>

    ${product
    ? `
        <div id="product-bar" class="flex align-items-center relative">
          <!-- Mobile product bar -->
          <nav aria-label="${product} navigation" class="flex lg-hidden align-items-center pi mi-auto">
            <h2>
              <span class="semibold">${product}:</span>
              <slot name="product-page"></slot>

            </h2>
          </nav>

          <!-- Widescreen product bar -->
          <nav aria-label="${product} navigation" class="sm-hidden lg-flex align-items-center pi mi-auto">
            <h2>
              <span class="semibold">${product}</span>
            </h2>
            <slot name="product-nav-lg"></slot>
          </nav>
        </div>
      `
    : ''
}`
}
