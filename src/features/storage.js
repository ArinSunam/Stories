

export const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
}

export const setPosts = (post) => {
  localStorage.setItem('post', JSON.stringify(post));
}

export const getPosts = () => {
  const data = localStorage.getItem('post');
  return data === null ? [] : JSON.parse(data);
}



export const getUser = () => {
  const data = localStorage.getItem('user');
  return data === null ? null : JSON.parse(data);
}


export const clearAllData = () => {
  localStorage.clear();
}