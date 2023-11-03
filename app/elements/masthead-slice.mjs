export default function MastheadSlice ({ html, state }) {
  const { attrs } = state
  const hideBorder = Object.keys(attrs).includes('hide-border')

  return html`
    <style>
      :host > div {
        display: block;
        padding: 1em;
        border-block-end: 1px solid;
      }

      .color-border {
        border-color: gainsboro;
      }

      .transparent-border {
        border-color: transparent;
      }
    </style>
    <div class="${hideBorder ? 'transparent-border' : 'color-border'}">
      <slot></slot>
    </div>
  `
}
