const search = document.getElementById('search')
const btn = document.getElementById('btn')
const resp = document.getElementById('resp')

const url = `https://servicodados.ibge.gov.br/api/v3/noticias/`
fetch(url).then(res =>{
    res.json().then(data=>{
        for(let i=0;i<=99;i++){
            resp.innerHTML += `
            <div class='post'>
                <div class='title'>
                    <h3>${data.items[i]['titulo']}</h3>
                </div>
                <div class='postContent'>
                    <p>${data.items[i]['introducao']}</p>
                </div>
            </div>
            `
            console.log(data.items[i])
        }
    })
})