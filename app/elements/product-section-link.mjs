import { initial, hover } from '../lib/section-item-styles.mjs'

export default function ProductSectionLink ({ html, state }) {
  const { attrs } = state
  const { href } = attrs

  const isActive = Object.keys(attrs).includes('active')

  return html`
    <style>
      a {
        ${initial}
        padding-block: 0.25em;
        padding-inline: 1em;
      }

      a:hover {
        ${hover}
      }

      a.active {
        background: hsla(0deg 0% 0% / 0.2);
      }
    </style>
    <a href="${href}" class="inline-block ${isActive ? 'active' : ''}">
      <slot></slot>
    </a>
  `
}
