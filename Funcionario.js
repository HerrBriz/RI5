"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Endereco_js_1 = __importDefault(require("./Endereco.js"));
const Telefone_js_1 = __importDefault(require("./Telefone.js"));
class Funcionario {
    nome;
    matricula;
    cpf;
    endereco;
    telefone;
    constructor(nome, matricula, cpf, endereco, telefone) {
        this.nome = nome;
        this.matricula = matricula;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
    }
}
exports.default = Funcionario;
//# sourceMappingURL=Funcionario.js.map