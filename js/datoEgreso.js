class Egreso extends Dato
{
    static contaorEgresos=0;
    constructor(descripcion,valor)
    {
        super(descripcion,valor);
        this.id=++Ingreso.contaorEgresos;
    }

    get _id()
    {
        return this.id;
    }
}