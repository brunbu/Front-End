const nome = 'Bruno';

let sobrenome = "Silva";
{
    let sobrenome = "Rodrigues";
    console.log(`Nome Completo: ${nome} ${sobrenome}`);
}
sobrenome = 600.97;
sobrenome = true;

console.log(`Nome Completo: ${nome} ${sobrenome}`);

const nomes = ["Bruno", "Murilo"];
for (var i = 0; i < nomes.length; i++) {
    console.log(`Nome: ${i}: ${nomes[i]}`);
}

console.log(i);