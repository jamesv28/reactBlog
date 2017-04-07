// reach out and grab all of the blog posts from the api
import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=8888';

export function fetchPosts() {

    const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}