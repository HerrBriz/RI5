import Endereco from "./Endereco.js";
import Funcionario from "./Funcionario.js";
import Telefone from "./Telefone.js";
export default class Empresa {
    razaoSocial: string;
    nomeFantasia: string;
    cnpj: string;
    endereco: Endereco;
    funcionarios: Funcionario[];
    telefones: Telefone[];
    constructor(razaoSocial: string, nomeFantasia: string, cnpj: string, endereco: Endereco, funcionarios: Funcionario[], telefones: Telefone[]);
    addFuncionario(funcionario: Funcionario): void;
}
//# sourceMappingURL=Empresa.d.ts.map