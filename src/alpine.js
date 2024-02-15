import masonry from 'alpinejs-masonry'

export default (Alpine) => {
  Alpine.plugin(masonry)
  /*  Alpine.data('search', () => ({
      searchPattern: '',
      showBox: false,
      selectedIndex: null,
      get searchResults() {
        if (!this.searchPattern) return []
        this.showBox = true
        return fuse.search(this.searchPattern).slice(0, 5)
      },
    })) */
}
