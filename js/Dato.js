//clase padre

class Dato
{
    constructor(descripcion,valor)
    {
        this.descripcion=descripcion;
        this.valor=valor;
    
    }
    get _descripcion()
    {
        return this.descripcion;
    }

    set _descripcion(nuevaDes)
    {
        this.descripcion=nuevaDes;
    }
    get _valor()
    {
        return this.valor;
    }

    set _valor(nuevoVal)
    {
        this.valor=nuevoVal;
    }
}