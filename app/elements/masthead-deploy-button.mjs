export default function DeployButton ({ html }) {
  return html`
    <style>
      :host {
        font-weight: 700;
      }

      @keyframes deploy-hover {
        0% {
          scale: 1 1;
        }
        33% {
          scale: 1.125 0.75;
        }
        66% {
          scale: 0.75 1.125;
        }
        100% {
          scale: 1 1;
        }
      }

      a {
        background-color: var(--deploy-button-background, #f7eeff);
        filter: drop-shadow(var(--deploy-button-shadow, #f088fe) 0.25em 0.25em);
        color: var(--deploy-button-color, #9556e1);
        border-radius: 0.333em;
        padding-block: 0.333em;
        padding-inline: 1em;
      }

      a:hover {
        animation: 0.4s ease deploy-hover;
      }
    </style>
    <a href="https://begin.com" class="inline-block">
      Deploy!
    </a>
  `
}
