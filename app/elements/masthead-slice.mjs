export default function Slice ({ html, state }) {
  const { attrs } = state
  const hideBorder = Object.keys(attrs).includes('hide-border')

  return html`
    <style>
      :host > div {
        display: block;
        padding-block: 1em;
        border-block-end: 1px solid;
      }

      .color-border {
        border-color: gainsboro;
      }

      .transparent-border {
        border-color: transparent;
      }
    </style>
    <div class="${hideBorder ? 'transparent-border' : 'color-border'} pi">
      <slot></slot>
    </div>
  `
}
