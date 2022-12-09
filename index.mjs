import { Constants } from "./constants.mjs";
import { generateDataTemplateHTML } from "./dom.mjs";

const $table = document.querySelector("#table");

const state = {
  users: [],
  posts: [],
  _data: [],    // Copia di backup(bk) dei dati 
  data: [],     // Dati di rendering
  paginationInfo: {
    limit: 10,
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    hasNextPage: false,
    hasPrevPage: false,
  },
}

const fetchUsers = async () => {
  try {
    const users = await fetch(Constants.API_USERS_URL);
    state.users = await users.json();
  } catch (error) {
    console.log(error);
  }
}

const fetchPosts = async () => {
  try {
    const posts = await fetch(Constants.API_POSTS_URL);
    state.posts = await posts.json();
  } catch (error) {
    console.log(error);
  }
}

const manipulateData = () => {
  const data = state.posts.map((post) => {
    const user = state.users.find(user => user.id == post.userId)
    return {
      ...post, 
      author: user.name
    }
  });

  state._data = data;
  state.data = data;
}

const getPaginatedData = () => {
    const startIndex = state.paginationInfo.limit * (state.paginationInfo.currentPage - 1);
    // 1 = 0
    // 2 = 10   
    const data = [...state._data].splice(startIndex, state.paginationInfo.limit);
    state.data = data;

    state.paginationInfo.totalItems = state._data.length;
    state.paginationInfo.totalPages = Math.floor(state.paginationInfo.totalItems / state.paginationInfo.limit);
    state.paginationInfo.hasPrevPage = state.paginationInfo.currentPage > 1;
    state.paginationInfo.hasNextPage = state.paginationInfo.currentPage < state.paginationInfo.totalPages;
}

const updateData = async () => {
  await fetchUsers();
  await fetchPosts();
  manipulateData();
  getPaginatedData();
}

const renderData = () => {
    const html = state.data.map(item => generateDataTemplateHTML(item)).join("");
    
    $table.innerHTML = html;
}

const init = async () => {
  await updateData();
  renderData();
}

init();



