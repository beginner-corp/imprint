import { initial, hover, active } from '../lib/section-item-styles.mjs'

export default function MastheadSectionDropdown ({ html, state }) {
  const { attrs } = state
  const { label } = attrs

  const isActive = Object.keys(attrs).includes('active')

  return html`
    <style>
      summary {
        ${initial}
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        gap: 0.5em;
      }

      summary:not(.active):hover,
      details[open] summary {
        ${hover}
      }

      details[open] summary:before {
        content: '';
        position: absolute;
        inset-inline: 0;
        inset-block: -100%;
      }

      details[open] summary:after {
        content: '';
        inline-size: 0.75em;
        aspect-ratio: 1 / 1;
        background: white;
        border-inline-start: 1px solid var(--accent);
        border-block-start: 1px solid var(--accent);
        position: absolute;
        rotate: 45deg;
        transform: skew(-10deg, -10deg);
        inset-inline: 0;
        inset-block-end: -1.8em;
        margin-inline: auto;
        z-index: 1;
      }

      summary.active {
        ${active}
      }

      summary::marker {
        content: none;
      }

      /* love u webkit >_> */
      summary::-webkit-details-marker {
        display: none;
      }

      svg {
        display: inline;
        margin-inline-end: -0.25em;
      }

      .dropdown {
        inset-block-start: var(--global-bar-height);
        inline-size: min(100vw, var(--max-inline-size));
        background: white;
        border-block-start: 1px solid var(--accent);
        box-shadow: 0 4px 4px hsla(0deg 0% 0% / 0.25);
        padding-block: 1.5em 2em;
        gap: 1em;
      }

      .dropdown a {
        display: inline-block;
        padding-block: 0.25em;
        color: var(--accent);
      }

      .dropdown a:hover {
        text-decoration: underline;
      }

    </style>
    <details>
      <summary class="inline-flex align-items-center semibold relative ${isActive ? 'active' : ''}">
        ${label}
        <svg width="12" height="9">
          <use xlink:href="#svg-caret"></use>
        </svg>
      </summary>
      <div class="dropdown absolute inset-i-0 mi-auto pi lg-pi-double flex justify-content-between">
        <slot></slot>
      </div>
    </details>

    <script>
      const details = document.querySelectorAll('masthead-section-dropdown details')
      details.forEach(detail => {
        detail.addEventListener('mouseover', () => detail.setAttribute('open', 'open'))
        detail.addEventListener('mouseout', () => detail.removeAttribute('open'))
      })
    </script>
  `
}
