
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
    }
  },
  computed: {
    searchResults() {
      return fuse.search(this.searchPattern).slice(0, 5)
    },
  },
}
</script>



<template>
  <div>
    <div class="flex flex-wrap items-stretch">
      <input
        autocomplete="off"
        type="search"
        class="m-0 min-w-0 flex-auto rounded-l border border-solid border-neutral-300 px-3 py-2 text-neutral-700 outline-none transition duration-200 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-500 dark:placeholder:text-neutral-500 dark:focus:border-primary"
        placeholder="Rechercher un mot allemand"
        aria-label="Rechercher"
        v-model="searchPattern"
      />

      <!--Search button-->
      <button
        class="flex items-center rounded-r bg-primary px-6 py-2 text-xs font-medium uppercase text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
        type="button"
      >
        <!--     <Icon name="mdi:search" /> -->
      </button>
    </div>
    <ul>
      <li v-for="result in searchResults" :key="result.item.id">
        <a :href="'/fiches/' + result.item.slug">{{ result.item.vedette }}</a>
      </li>
    </ul>
  </div>
</template>