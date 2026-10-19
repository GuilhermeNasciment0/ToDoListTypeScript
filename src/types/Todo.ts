export type Prioridade = "baixa"|"media"|"alta";

export interface Todo{
    id:number;
    text:string;
    completado:boolean;
    prioridade: Prioridade;
}