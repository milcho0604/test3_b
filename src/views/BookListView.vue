<template>
    <div id="BookListView">
        <div class="header">
      <h1>도서 목록</h1>
      <button type="button" @click="goEdit(0)">등록</button>
    </div>
      <table>
        <tr>
          <td>id</td>
          <td>도서명</td>
          <td>저자</td>
          <td>가격</td>
          <td>출판사</td>
          <td>카테고리</td>
        </tr>
        <tr v-for="book in books" :key="book.id" @click="goEdit(book.id)">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.price }}</td>
          <td>{{ book.publisher}}</td>
          <td>{{ book.category }}</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  import { loadBooks } from '../bookService';
  
  export default {
    name: "BookListView",
    data() {
      return {
        books: []
      };
    },
    async mounted() {
      this.books = await loadBooks();
    },
    methods: {
      async reload() {
        this.books = await loadBooks();
      },
      goEdit(id) {
        this.$router.push("/edit/" + id);
      }
    }
}
  </script>
  
  <style scoped> 
 div.header { display: flex; justify-content: space-between; align-items: baseline; }
  button { padding: 5px 20px; margin-right: 300px; }
  h1 { font-size: 35px; margin-left: 280px; }
  table { border-collapse: collapse; width: 60%; margin : auto; }
  tr:nth-child(1) { background-color: #eee; text-align: center; }
  td { border: 1px solid gray; padding: 6px; }
  td:nth-child(1) { text-align: center; width: 30px; }
  tr:hover { background-color: #ffd; cursor: pointer }
  </style>
  