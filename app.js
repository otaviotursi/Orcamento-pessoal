class Despesa{
    constructor(ano, mes, dia, tipo, valor, descricao){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
    validarDados(){
        if (parseInt(this.dia) > 31 || parseInt(this.dia) < 0 ){
            return false
        }
        
        for(let i in this){
            if(this[i] == undefined || this[i] == null || this[i] == '' || this[i] === '0'){
                return false
            }
        }
        return true
    }
}

class Bd {
    constructor(){
        let id = localStorage.getItem('id')
        if(id === null){
            localStorage.setItem('id', 0)
        }        
    }

    getProximoId(){
        let proximoId = localStorage.getItem('id')    
        return parseInt(proximoId) + 1    
    }

    gravarDespesa(d){
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
    }


}

let bd = new Bd()

function CadastrarDespesa(){
    let ano = document.getElementById("ano")
    let mes = document.getElementById("mes")
    let dia = document.getElementById("dia")
    let tipo = document.getElementById("tipo")
    let descricao = document.getElementById("descricao")
    let valor = document.getElementById("valor")
    
    let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, valor.value, descricao.value) 
    console.log(despesa)
    if(despesa.validarDados()){
        bd.gravarDespesa(despesa)
        $('#sucessoGravacao').modal('show')
    } else {
        console.log("Dados invalidos")
        $('#erroGravacao').modal('show')
    }
}
