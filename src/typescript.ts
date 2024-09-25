let valor = 3000;
let nome: string ="";
let isPago: boolean = false;
let qualquer: any ="";
qualquer = 22;

//Arrays
const lista: number [] =[];
lista.push(13, 22.5, 22, 89, 1.58);

//Tipos personalizados (Type Alias)
type Transacao = {
    tipoTransacao: string;
    data: Date;
    valor:number;
}
//Enum

enum TipoTransacao {
    DEPOSITO = "Deposito",
    TRANFERENCIA = "Transferencia",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}


const novaTransacao: Transacao = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0
}