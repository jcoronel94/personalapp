<template>
  <div>
    <carousel
      v-if="pageLoader_isDataLoaded"
      :navigationEnabled="true"
      :paginationEnabled = "false"
      :perPageCustom="[
        [768, 4],
        [1024, 8],
      ]"
    >
      <slide v-for="book of books" :key="book.id">
        <img
          class="slide-item"
          :src="book.book.image_url ? book.book.image_url : book.book.image_url"
          alt="People"
        />
      </slide>
    </carousel>
    <carousel
      v-else
      :perPageCustom="[
        [768, 4],
        [1024, 8],
      ]"
    >
      <slide
        v-for="(book, index) in [1, 2, 3, 4, 5, 6, 7, 8]"
        :key="`book-${index}`"
      >
        <md-card>
          <md-card-media>
            <img
              class="slide-item"
              src="https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png"
            />
          </md-card-media>
        </md-card>
      </slide>
    </carousel>
  </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex';
import pageLoader from '@/mixins/pageLoader';

export default {
  computed: {
    ...mapState({
      books: (state) => state.books.items,
    }),
  },
  mixins: [pageLoader],
  data() {
    return {};
  },
  methods: {
    ...mapActions('books', ['fetchReadBooks']),
  },
  created() {
    Promise.all([this.fetchReadBooks()])
      .then(() => this.pageLoader_resolveData())
      .catch((err) => {
        console.error(err);
        this.pageLoader_resolveData();
      });
  },
};
</script>

<style lang="scss" scoped>
.slide-item {
  height: 130px;
  width: 85px;
}
</style>
