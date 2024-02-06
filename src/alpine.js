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
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: ['vedette'],
}
const fuse = new Fuse(list, fuseOptions)

export default (Alpine) => {
  Alpine.data('search', () => ({
    searchPattern: '',
    showBox: false,
    selectedIndex: null,
    get searchResults() {
      if (!this.searchPattern) return []
      this.showBox = true
      return fuse.search(this.searchPattern).slice(0, 5)
    },
  }))
}
