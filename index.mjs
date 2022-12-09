import { Constants } from "./constants.mjs";

const state = {
    users: [],
    posts: [],
}

const fetchUsers = async () => {
    try{
     const users = await fetch(Constants.API_USERS_URL);
     state.users = await users.json();
    } catch(error) {  
      console.log(error);
    }
}

const fetchPosts = async () => {
    try{
     const posts = await fetch(Constants.API_POSTS_URL);
     state.posts = await posts.json();
    } catch(error) {  
      console.log(error);
    }
}


const init = async () => {
    await fetchUsers();
    await fetchPosts();
    console.log(state);
}

init();


