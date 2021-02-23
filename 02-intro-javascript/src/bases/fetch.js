const apiKey = 'hsDJ1Sxyj3butwZ7KR5U9wf7D1M4HT2C'

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion.then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    }).catch(console.warn)