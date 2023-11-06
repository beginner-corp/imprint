import { initial, hover, active } from '../lib/section-item-styles.mjs'

export default function ProductSectionLink ({ html, state }) {
  const { attrs } = state
  const { href } = attrs

  const isActive = Object.keys(attrs).includes('active')

  return html`
    <style>
      a {
        ${initial}
        padding-block: 0.25em;
        padding-inline: 0.75em;
      }

      a:not(.active):hover {
        ${hover}
      }

      a.active {
        ${active}
      }
    </style>
    <a href="${href}" class="inline-block ${isActive ? 'active' : ''}">
      <slot></slot>
    </a>
  `
}
