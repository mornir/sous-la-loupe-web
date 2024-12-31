import masonry from 'alpinejs-masonry'
import Fuse from 'fuse.js'

import list from './data/vedettes.json'

const fuseOptions = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.2,
  distance: 25,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: ['vedette'],
}

const fuse = new Fuse(list, fuseOptions)

export default (Alpine) => {
  Alpine.plugin(masonry)

  Alpine.data('search', () => ({
    searchPattern: '',
    showBox: false,
    selectedIndex: 0,
    moveUpList() {
      this.selectedIndex > 0
        ? this.selectedIndex--
        : (this.selectedIndex = this.searchResults.length - 1)
    },
    moveDownList() {
      this.selectedIndex < this.searchResults.length - 1
        ? this.selectedIndex++
        : (this.selectedIndex = 0)
    },
    goToFiche() {
      if (this.searchResults.length) {
        window.location.href = `/fiches/${
          this.searchResults[this.selectedIndex].item.slug
        }/`
      }
    },
    get searchResults() {
      if (!this.searchPattern) return []
      this.showBox = true
      return fuse.search(this.searchPattern.trim()).slice(0, 7)
    },
  }))
}
