/* globals document HTMLElement window customElements */
class MadeWith extends HTMLElement {
  constructor() {
    super()
    this.template = document.createElement('template')
    this.template.innerHTML = `
      Made with <span class="js-made-with-emoji">&#128150;</span>
      <span class="inline-block">in <span class='js-made-with-place'>California</span></span>
    `
    this.replaceChildren(this.template.content.cloneNode(true))
    this.getRandomItem = this.getRandomItem.bind(this)
    this.placeContainer = this.querySelector('.js-made-with-place')
    this.emojiContainer = this.querySelector('.js-made-with-emoji')
    this.swap = this.swap.bind(this)
    this.selectedVariant = null

    this.variants = [
      {
        place: 'Longmont, CO',
        emojis: [
          '&#127957;', // camping
          '&#129452;', // bison
          '&#127784;', // snow cloud
        ],
      },
      {
        place: 'Maine',
        emojis: [
          '&#129438;', // lobster
          '&#128758;', // canoe
          '&#128054;', // dog face
        ],
      },
      {
        place: 'Treaty 1 territory',
        emojis: [
          '&#127861;', // 抹茶
          '&#129304;', // horns
          '&#127912;', // paint palette
        ],
      },
      {
        place: 'Ottawa',
        emojis: [
          '&#128579;', // upside down face
          '&#127809;', // maple leaf
          '&#129398;', // freezing face
        ],
      },
      {
        place: 'the Bay Area',
        emojis: [
          '&#128008;', // cat
          '&#128149;', // two hearts
          '&#10024;', // sparkles
        ],
      },
      {
        place: 'Unceded Coast Salish territory',
        emojis: [
          '&#127812;', // mushroom
          '&#127794;', // evergreen tree
          '&#127752;', // rainbow
        ],
      },
    ]
  }

  getRandomItem(array = []) {
    return array[Math.floor(Math.random() * array.length)]
  }

  async getNewVariant() {
    let selection = this.getRandomItem(this.variants)

    // avoid selecting the same variant twice in a row
    if (selection.place === this.selectedVariant?.place) {
      this.getNewVariant()
    } else {
      this.selectedVariant = selection
      return
    }
  }

  async swap() {
    await this.getNewVariant()
    this.placeContainer.innerHTML = this.selectedVariant.place
    this.emojiContainer.innerHTML = this.getRandomItem(
      this.selectedVariant.emojis
    )
  }

  connectedCallback() {
    this.interval = setInterval(this.swap, 2000)
  }

  disconnectedCallback() {
    window.cancelIterval(this.interval)
  }
}

customElements.define('footer-made-with', MadeWith)
