const produto = [
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

let qtdPromocao = 0;
const produtoEmPromocao = produto.filter((p) =>{
    if(p.promocao == true) {
        qtdPromocao += p.quantidade
    }
    return p.promocao == true;
});
console.log();

console.log(produtoEmPromocao);
