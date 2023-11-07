export default function DeployButton ({ html }) {
  return html`
    <style>
      :host {
        font-weight: 700;
      }

      a {
        background-color: var(--deploy-button-background, #f7eeff);
        filter: drop-shadow(var(--deploy-button-shadow, #f088fe) 0.25em 0.25em);
        color: var(--deploy-button-color, #9556e1);
        border-radius: 0.333em;
        padding-block: 0.333em;
        padding-inline: 1em;
      }
    </style>
    <a href="https://begin.com">
      Deploy!
    </a>
  `
}
