const estoque = [
{
    descricao : "Camisa",
    cor : "Branco",
    preco : 49.99,
    perfil :"M",
    quantidade : 10,  
    promocao : false   
},
{
    descricao : "Camisa",
    cor : "Preto",
    preco : 49.99,
    perfil :"F",
    quantidade : 10,
    promocao : true    
},
{
    descricao : "Camisa",
    cor : "Preto",
    preco : 49.99,
    perfil :"M",
    quantidade : 10, 
    promocao : true    
},
{
    descricao : "Camisa",
    cor : "Branco",
    preco : 49.99,
    perfil :"F",
    quantidade : 10,
    promocao : false     
},
];
let totalPreco = 0;
let totalEstoque = estoque.reduce((total, produto) => {
    totalPreco += produto.preco * produto.quantidade;
    return total + produto.quantidade;

},0);

console.log(`Vc tem um total de ${totalEstoque} produtos no estoque`);
console.log(`O valor total do seu estoque é R${totalPreco.toFixed(2)}`);