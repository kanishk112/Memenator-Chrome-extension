var after = ''

function fetchMemes() {
    colorChange()

    if (document.getElementById('memes')) {
        document.getElementById('memes').remove()
    }

    let parentdiv = document.createElement('div')
    parentdiv.id = 'memes'
    fetch(`https://www.reddit.com/r/memes.json?after=${after}`).then(response => response.json())
        .then(body => {
            after = body.data.after
            console.log(after)
                if (body.data.children[0].data.post_hint === 'image') {
                    let div = document.createElement('div')
                    let h4 = document.createElement('h4')
                    let image = document.createElement('img')
                    image.src = body.data.children[0].data.url_overridden_by_dest
                    console.log(image.src)
                    h4.textContent = body.data.children[0].data.title
                    div.appendChild(h4)
                    div.appendChild(image)
                    parentdiv.appendChild(div)
                }
            document.body.appendChild(parentdiv)
        });
}

document.getElementById('memeBtn').onclick=fetchMemes;
