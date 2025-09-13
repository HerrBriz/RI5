export default class Empresa {
    constructor(razaoSocial, nomeFantasia, cnpj, endereco, funcionarios, telefones) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.funcionarios = funcionarios;
        this.telefones = telefones;
    }
    addFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }
}
