import { initial, hover, active } from '../lib/section-item-styles.mjs'

export default function MastheadSectionLink ({ html, state }) {
  const { attrs } = state
  const { href } = attrs

  const isActive = Object.keys(attrs).includes('active')

  return html`
    <style>
      a {
        ${initial}
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      a:not(.active):hover {
        ${hover}
      }

      a.active {
        ${active}
      }
    </style>
    <a href="${href}" class="inline-block semibold ${isActive ? 'active' : ''}">
      <slot></slot>
    </a>
  `
}
