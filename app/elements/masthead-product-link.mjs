import { initial } from '../lib/section-item-styles.mjs'

export default function ProductLink ({ html, state }) {
  const { attrs } = state
  const { href } = attrs

  const isActive = Object.keys(attrs).includes('active')

  return html`
    <style>
      a {
        ${initial}
        color: white;
        padding-block: 0.25em;
        padding-inline: 1em;
      }

      a:hover {
        border-color: white;
        color: white;
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
