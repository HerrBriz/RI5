export default class Descritor {
    descrever(empresa) {
        console.log(`Razão social: ${empresa.razaoSocial}`);
        console.log(`Nome fantasia: ${empresa.nomeFantasia}`);
        console.log(`CNPJ: ${empresa.cnpj}`);
        console.log("Endereço");
        console.log(`Rua: ${empresa.endereco.rua} Bairro: ${empresa.endereco.bairro} Cidade: ${empresa.endereco.cidade} numero: ${empresa.endereco.numero}`);
        console.log("\nFuncionários:");
        empresa.funcionarios.forEach((f) => {
            console.log(`Nome: ${f.nome}`);
            console.log(`Matrícula: ${f.matricula}`);
            console.log(`CPF: ${f.cpf}`);
            console.log(`Rua: ${f.endereco.rua} Bairro: ${f.endereco.bairro} Cidade: ${f.endereco.cidade} numero: ${f.endereco.numero}`);
            console.log(`Telefone: (${f.telefone.ddd}) ${f.telefone.numero}\n`);
        });
    }
}
