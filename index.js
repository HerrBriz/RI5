"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Descritor_js_1 = __importDefault(require("./Descritor.js"));
const Empresa_js_1 = __importDefault(require("./Empresa.js"));
const Endereco_js_1 = __importDefault(require("./Endereco.js"));
const Funcionario_js_1 = __importDefault(require("./Funcionario.js"));
const Telefone_js_1 = __importDefault(require("./Telefone.js"));
let endereco = new Endereco_js_1.default(123, "Av. Paulista", "Jardim Paulista", "São Paulo");
let telefone = new Telefone_js_1.default("011", "9-9999-9999");
let funcionario = new Funcionario_js_1.default("Tony Stark", "123456789", "999.999.999-99", endereco, telefone);
let funcionarios = [funcionario];
let telefones = [telefone];
let empresa = new Empresa_js_1.default("ABC LTDA", "Mercado online", "999-999-999-999-99", endereco, funcionarios, telefones);
let descritor = new Descritor_js_1.default();
descritor.descrever(empresa);
//# sourceMappingURL=index.js.map