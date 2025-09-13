import Endereco from "./Endereco.js";
import Telefone from "./Telefone.js";

export default class Funcionario {
  constructor(
    public nome: string,
    public matricula: string,
    public cpf: string,
    public endereco: Endereco,
    public telefone: Telefone
  ) {}
}
