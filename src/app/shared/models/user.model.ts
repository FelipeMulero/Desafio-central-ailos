export interface User {
    id: number,
    name: string,
    cpf: string,
    aplicationAccount: string, //Conta aplicação
    verifyCPF: string,
    checkingAccount?: string, //Conta corrente
}