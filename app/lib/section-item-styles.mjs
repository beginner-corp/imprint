const transition = '0.1s ease'

const initial =
`border: 1px solid transparent;
border-radius: 9999px;
cursor: pointer;
transition: ${transition} border-color, ${transition} color;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
`

const hover =
`border-color: var(--accent);
color: var(--accent);`

const active =
`background-color: var(--accent);
color: white;`

export {
  initial,
  hover,
  active,
}
