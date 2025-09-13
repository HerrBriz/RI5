"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Endereco_js_1 = __importDefault(require("./Endereco.js"));
const Funcionario_js_1 = __importDefault(require("./Funcionario.js"));
const Telefone_js_1 = __importDefault(require("./Telefone.js"));
class Empresa {
    razaoSocial;
    nomeFantasia;
    cnpj;
    endereco;
    funcionarios;
    telefones;
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
exports.default = Empresa;
//# sourceMappingURL=Empresa.js.map