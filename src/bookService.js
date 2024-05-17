import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";

export async function loadBooks() {
  try {
    const response = await axios.get("/books");
    return response.data;
  } catch (error) {
    alert('조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}

export async function loadBook(id) {
  try {
    const response = await axios.get("/books/" + id);
    return response.data;
  } catch (error) {
    alert('조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}

export async function saveBook(book) {
  try {
    await axios.put("/books/" + book.id, book);
  } catch (error) {
    alert('저장 에러: ' + (error instanceof Error ? error.message : error));
  }
}
  export async function insertBook(book) {
    try {
      await axios.post("/books/", book);
    } catch (error) {
      alert('등록 에러: ' + (error instanceof Error ? error.message : error));
    }
}
export async function deleteBook(id) {
    try {
      await axios.delete("/books/" + id);
    } catch (error) {
      alert('삭제 에러: ' + (error instanceof Error ? error.message : error));
    }
  }
