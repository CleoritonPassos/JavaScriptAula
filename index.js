// function carregamentoPagina() {
//     alert("Menssagem apresentada no carregamento do sistema");
// }

function populaTabela() {
    if(localStorage.getItem("produtos")){
        let produto = JSON.parse(localStorage.getItem("produtos"))

        $("#tblProdutos tdbody").html("")
        produto.forEach((produto) => {
            $("#tblProdutos tbody").append(`<tr>
            <td>${produto.nome}</td>
            <td>${produto.quantidade}</td>
            <td>${produto.valor}</td>
            <td style="width: 50px"><"button" type="button" class="btn btn-info">E</button></td>
            </tr>`)
        })
    }
}

$(() => {
    // codigo executado no carregamento da pagina
    populaTabela()

    $("#btnSalvar").click(() => {
      
        let produto = {}
        produto.nome = $("#nmProduto").val()
        produto.quantidade = $("#quantidade").val()
        produto.valor = $("#vlrProduto").val()

        let listaProdutos = []

        if(localStorage.getItem("produtos")){
            localProdutos = JSON.stringify(listaProdutos)
        }

        listaProdutos.push(produto)

        localStorage.setItem("produtos", JSON.stringify(listaProdutos))

        alert("Produto salvo com sucesso")

        $("#nmProduto").val("")
        $("#quantidade").val("")
        $("#vlrProduto").val("")

        populaTabela

    })
})