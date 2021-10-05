class Ingreso extends Dato
{
    static contaorIngresos=0;
    constructor(descripcion,valor)
    {
        super(descripcion,valor);
        this.id=++Ingreso.contaorIngresos;
    }

    get _id()
    {
        return this.id;
    }
}