const search = document.getElementById('search')
const btn = document.getElementById('btn')
const resp = document.getElementById('resp')

if(btn){
    btn.onclick = ()=>{
        const url = `https://servicodados.ibge.gov.br/api/v3/noticias/?busca=${search.value}`
        fetch(url).then(res =>{
            res.json().then(data=>{
                
            })
        })
    }
}