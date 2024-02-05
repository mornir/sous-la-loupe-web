
<script>
import Fuse from 'fuse.js'
import list from '../data/vedettes.json'

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

export default {
  data() {
    return {
      searchPattern: '',
      showResult: false,
    }
  },
  computed: {
    searchResults() {
      if (!this.searchPattern) return []
      return fuse.search(this.searchPattern).slice(0, 5)
    },
  },
  methods: {
    closeResults() {
      this.showResult = false
    },
  },
}
</script>



<template>
  <div class="relative">
    <div class="flex flex-wrap items-stretch">
      <input
        autocomplete="off"
        type="search"
        class="flex-auto rounded-l border border-solid border-neutral-300 px-3 py-2 text-neutral-700 outline-none transition duration-200 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-inner focus:outline-none dark:border-neutral-600 dark:text-neutral-500 dark:placeholder:text-neutral-500 dark:focus:border-primary"
        placeholder="Rechercher un mot allemand"
        aria-label="Rechercher"
        v-model="searchPattern"
      />

      <!--Search button-->
      <button
        class="flex items-center rounded-r bg-primary px-6 py-2 text-xs font-medium uppercase text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
    <ul
      class="border-2 mt-2 shadow-lg p-2 absolute w-full"
      v-show="searchResults.length"
    >
      <li
        v-for="result in searchResults"
        :key="result.item.id"
        class="py-2 text-lg"
      >
        <a :href="'/fiches/' + result.item.slug">{{ result.item.vedette }}</a>
      </li>
    </ul>
  </div>
</template>