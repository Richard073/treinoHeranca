class Veiculo{
    constructor(fabricante, ano,preco){
        this.fabricante=fabricante
        this.ano = ano
        this.preco=preco
    }
}
class Carro extends Veiculo{
    constructor(lugares,fabricante,ano,preco){
        
        super(fabricante,ano,preco)
        this.lugares=lugares
    }
}
const automovel= new Carro(4,"bmw",2023,20000)
console.log(`O Carro tem ${automovel.lugares} lugares,
 modelo: ${automovel.fabricante}, ano ${automovel.ano}, custa R$${automovel.preco.toLocaleString('pt-BR')} `)

 class Moto extends Veiculo{
    constructor(modelo,potencia,fabricante,ano,preco){
        super(fabricante,ano,preco)
        this.modelo=modelo
        this.potencia=potencia
    }
 }
const motocicleta= new Moto("naked",150,"honda", 2023,60000)
console.log(`Moto do modelo ${motocicleta.modelo}: potencia de  ${motocicleta.potencia} cavalos
fabricante ${motocicleta.fabricante} ano ${motocicleta.ano} valor R$${motocicleta.preco.toLocaleString('pt-BR')}`)