
function pesquisar (){

    let section = document.getElementById("resultados-pesquisa");
    let atletaPesquisado = document.getElementById("nome-atleta").value.toLowerCase()
    
    
    if (atletaPesquisado == ""){
        
        section.innerHTML = "O campo Nome do Atleta está vazio. Insira um nome de atleta!"
        return
    }    

       
    let resultado = ""   

        for (let dado of dados){

            if(dado.nome.toLowerCase().includes(atletaPesquisado) || dado.descricao.toLowerCase().includes(atletaPesquisado) || dado.tags.toLowerCase().includes(atletaPesquisado)) {

                resultado += `
                    <div class="item-resultado">
                            <h2><a href="#">${dado.nome}</a></h2>                
                            <p class="descricao-meta">${dado.descricao}</p>
                            <a href=${dado.link} target="_blank">Saiba mais</a>
                    </div>
                    `;                   
            }
        }

        if(!resultado){
            resultado = "Sua pesquisa não gerou resultado! Tente novo parâmetro de pesquisa."
        }

section.innerHTML = resultado
}



