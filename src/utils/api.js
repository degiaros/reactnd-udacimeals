const API_ID = 'b5ac4d2e'//process.env.REACT_APP_API_ID
const APP_KEY = '04562f61d22f22a33c6db556f1c0b7a0'//process.env.REACT_APP_APP_KEY

export function fetchRecipes (food = '') {
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}