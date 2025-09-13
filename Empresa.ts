import Endereco from "./Endereco.js";
import Funcionario from "./Funcionario.js";
import Telefone from "./Telefone.js";

export default class Empresa {
  constructor(
    public razaoSocial: string,
    public nomeFantasia: string,
    public cnpj: string,
    public endereco: Endereco,
    public funcionarios: Funcionario[],
    public telefones: Telefone[]
  ) {}

  addFuncionario(funcionario: Funcionario) {
    this.funcionarios.push(funcionario);
  }
}
