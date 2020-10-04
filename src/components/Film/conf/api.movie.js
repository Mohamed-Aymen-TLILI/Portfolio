import * as axios from 'axios';

const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
  req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2YyMDg2MTljZjQ0Y2E0OTEwOTAzN2Q3NWE2NGNkZiIsInN1YiI6IjVlYjk1ZGFiN2QyYmMxMDAxZDAwMzI5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MrZiwPBOYYIMuZt3TOoboF-eOa6KBMo8atx-BRQqlJo'
  return req;
})

export default apiMovie;


export const apiMovieMap = (m) => ({
  img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
  title: m.title,
  details: `${ m.release_date } | ${ m.vote_average }/10 (${ m.vote_count })`,
  description: m.overview
})