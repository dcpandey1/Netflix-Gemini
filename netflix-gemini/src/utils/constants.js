export const photoURL = "https://avatars.githubusercontent.com/u/65281407?v=4";
export const NeflixBG = 'https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg';
export const NeflixLogo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const TMDB_API = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
export const Populer_TMDB_API = "https://api.themoviedb.org/3/movie/popular"

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjAxMjNiNGFjMDZlNjdlZDMxMWE4MWRmMGMwMDU2ZCIsInN1YiI6IjY1NmNjMDVlZTM4YmQ4MDBjM2UwYTUyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W-50JkBoDqvr2PltPPVep3E9F1RikTywy7jPWsBiaio',

  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const Languages = [
  { identifiere: "en", name: "English" },
  { identifiere: "hindi", name: "Hindi" },
  { identifiere: "spanish", name: "Spanish" }
]

export const GPI_API_Key = process.env.REACT_APP_GPI_API_Key
export const Gemini_API_Key = process.env.REACT_APP_Gemini_API_Key