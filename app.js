const url = 'https://api.themoviedb.org/3/search/movie?api_key=35c725e97901770e3e651d9da6c6df6c&query='
const inputField = document.getElementById('titleSearch')
const resultsList = document.getElementById('resultsList')

const getData = async () => {
    const wordQuery = inputField.value
    try {
        const response = await fetch(url + encodeURI(wordQuery), { cache: 'no-cache' })
        if (response.ok) {
            const jsonResponse = await response.json()
            renderResponse(jsonResponse)
        }
    } catch (error) {
        console.log(error)
    }
}

const renderResponse = (jsonResponse) => {
    console.log(jsonResponse.results)
    resultsList.innerHTML = ''
    jsonResponse.results.forEach((movie) => {
        resultsList.innerHTML += `<li>${movie.title} (${movie.release_date})</li>`
    })
}