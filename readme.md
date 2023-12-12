# Imprint

Nameplate and navigation for the Begin ecosystem.

## Usage

Install via the GitHub repo, preferably with a version tag:

```shell
npm i git@github.com:beginner-corp/imprint.git#v<N.N.N>
```

Reexport the component(s) from within your Enhance app:

```js
// app/elements/begin-masthead.mjs
import { Masthead } from '@begin/imprint'
export default Masthead
```

## Available imports

### Masthead

**All** of the following need to be exposed as elements when using the Masthead:

| export name | element name |
|-|-|
| Masthead | begin-masthead |
| BeginLogo | masthead-begin-logo |
| DeployButton | masthead-deploy-button |
| ProductLink | masthead-product-link |
| SectionDropdown | masthead-section-dropdown |
| SectionLink | masthead-section-link |
| Slice | masthead-slice |
| Symbols | masthead-symbols |

### Footer

**All** of the following need to be exposed as elements when using the Footer:

| export name | element name |
|-|-|
| BeginFooter | begin-footer |
| BeginLogo | masthead-begin-logo |
| MadeWith | footer-made-with |

**`MadeWith`** is a component and must be reexported in your app's `components` directory:

```js
// app/components/footer-made-with.mjs
import { MadeWith } from '@begin/imprint'
export default MadeWith
```

Additionally, you'll need to import this component into a browser module:

```js
// app/browser/footer-made-with.mjs
import MadeWith from '../components/footer-made-with.mjs'
```

## Custom properties

The Masthead and Footer styling can be customized via the use of custom properties. Each comes with a default value baked in.

### Masthead

| Custom property | Application |
|-|-|
| `--accent` | Links and other colour accents |
| `--inline-padding` | Inline padding on masthead contents |
| `--muted` | Nav section headings |
| `--max-inline-size` | Maximum width of the masthead contents |

The Masthead also exposes several custom properties that can be used for layouts in your app:

- `--global-bar-height`: The height of the global bar
- `--product-bar-height`: The product bar height
- `--masthead-max-height`: The height of the global bar + product bar

### Footer

| Custom property | Application |
|-|-|
| `--accent` | Link colour, and basis for horizontal rule |
| `--color` | Text colour |
| `--background-color` | Background colour |
| `--inline-padding` | Inline padding on footer contents |
| `--max-inline-size` | Maximum width of the footer contents |

## Attributes

### Masthead

- `breakpoint`: Minimum width (ideally in `em`s) at which to switch from single column to multicolumn layout
- `product`: Optional; name of the product the site is for
- `active`: Optional; name of the global section that should show as active (usually `'products'`)

### Footer
- `breakpoint`: Minimum width (ideally in `em`s) at which to switch from single column to multicolumn layout
