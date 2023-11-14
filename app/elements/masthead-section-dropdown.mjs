import { initial, hover, active } from '../lib/section-item-styles.mjs'

export default function SectionDropdown ({ html, state }) {
  const { attrs } = state
  const { label } = attrs

  const isActive = Object.keys(attrs).includes('active')

  return html`
    <style>
      summary {
        ${initial}
        padding-block: 0.333em;
        padding-inline: 1em;
        gap: 0.5em;
      }

      summary:not(.active):hover,
      details[open] summary:not(.active) {
        ${hover}
      }

      /* Expanded hit area for open dropdowns on hover */
      details[open] summary:before {
        content: '';
        position: absolute;
        inset-inline: 0;
        inset-block: -100%;
        transform: perspective(80px) rotateX(45deg) scaleX(1.125);
      }

      /* Notch design for opens dropdowns */
      details[open] summary:after {
        content: '';
        inline-size: 0.75em;
        aspect-ratio: 1 / 1;
        background: white;
        border-inline-start: 1px solid var(--_accent);
        border-block-start: 1px solid var(--_accent);
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
        border-block-start: 1px solid var(--_accent);
        box-shadow: 0 6px 6px hsla(0deg 0% 0% / 0.125);
        padding-block: 1.5em 2em;
        gap: 1em;
      }

      .dropdown a {
        display: inline-block;
        padding-block: 0.25em;
        color: var(--_accent);
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
      <div class="dropdown absolute inset-i-0 mi-auto pi lg-pi-double flex justify-content-around">
        <slot></slot>
      </div>
    </details>

    <script>
      const details = document.querySelectorAll('masthead-section-dropdown details')

      const preventDefault = e => e.preventDefault()

      details.forEach(detail => {
        detail.addEventListener('pointerenter', function(e) {
          if (e.pointerType === 'mouse') {
            detail.setAttribute('open', 'open')
            detail.querySelector('summary').addEventListener('click', preventDefault)
          }
        })

        detail.addEventListener('pointerleave', function(e) {
          if (e.pointerType === 'mouse') {
            detail.removeAttribute('open')
            detail.querySelector('summary').removeEventListener('click', preventDefault)
          }
        })
      })
    </script>
  `
}
