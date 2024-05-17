<template>
    <div id="BookEdit">
      <h1>도서 {{ book.id > 0 ? "수정" : "등록" }}</h1>   <!-- 수정뿐만 아니라 등록까지 구현한다면 사용 -->
      <div> 
        <input type="text" placeholder="도서명을 입력하세요," v-model="book.title" />  
      </div>
      <div>
        <input type="text" placeholder="저자를 입력하세요." v-model="book.author" />
      </div>
      <div>
        <input type="phone" v-model="book.price" />
      </div>
      <div>
        <label><input type="radio" value="SunYang" v-model="book.publisher" /> 순양 </label>
        <label><input type="radio" value="NoWatch" v-model="book.publisher" /> 노치 </label>
      </div>
      <div>
        <select v-model="book.category">
          <option value="">카테고리를 선택하세요</option>
          <option value="동화">동화</option>
          <option value="과학">과학</option>
          <option value="애니">애니</option>
        </select>
      </div>
      <div>
        <button type="button" v-on:click="save">저장</button>
        <button type="button" v-on:click="goList">취소</button>
        <button type="button" @click="remove" v-show="book.id > 0">삭제</button>
      </div>
    </div>
  </template>
  
  <script>
  import { loadBook, saveBook, insertBook, deleteBook } from '../bookService';
  
  export default {
    name: "BookEditView",
    data() {
      return {
        book: { }
      }
    },
    async mounted() {
      const id = this.$route.params.id;
      if(id>0)
      this.book = await loadBook(id);
      else
      this.book = {id:0, title: "", price: 0, publisher: "", category: "" };
    },
    methods: {
      async save() {
        if(this.book.id>0)
            await saveBook(this.book);
        else
            await insertBook(this.book);
            this.goList();
      },
      goList() {
        this.$router.push("/book");
      },
      async remove() {
        if (confirm("삭제하시겠습니까?")) {
          await deleteBook(this.book.id);
          this.goList();
        }
      }
    }
  }
  </script>
  
  <style>
  input[type=text], input[type=phone], input[type=email] { padding: 6px; width: 200px; }
  select { padding: 6px; width: 150px }
  div { margin-bottom: 15px; }
  label { margin-right: 15px; }
  button { padding: 5px 20px; margin-right: 10px; }
  </style>
  