//las clases fueron importadas en el archivo html

//la referencia al arreglo es constante
const ingresos=[
    new Ingreso('Salario',2300),
    new Ingreso('Loteria',1300)

];
const egresos=[
    new Egreso('Alimento',600),
    new Egreso('Ropa',700)
];

let cargarApp=()=>
{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

//funciones para calcular el total de ingresos y egresos
let totalIngresos=()=>
{
    let totalIngreso=0;
    for(let ingreso of ingresos)
    {
        totalIngreso+=ingreso.valor;
    }
    return totalIngreso;
}
let totalEgresos=()=>
{
    let totalEgreso=0;
    for(let egreso of egresos)
    {
        totalEgreso+=egreso.valor;
    }
    return totalEgreso;
}
let cargarCabecero=()=>
{
    let presupuesto=totalIngresos()-totalEgresos();
    let porsentajeEgreso=totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML=formatoMoneda(presupuesto);
    document.getElementById('ingresos').innerHTML="+"+formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML="-"+formatoMoneda(totalEgresos());
    document.getElementById('porcentaje').innerHTML=formatoPorcentaje(porsentajeEgreso);
}


const formatoMoneda=(valor)=>{
    return valor.toLocaleString('en-US',{style:'currency',currency:'USD',minumumFractionDigits:2});
}



const formatoPorcentaje=(valor)=>{
    return valor.toLocaleString('en-US',{style:'percent', minimumFractionDigits:2});
}


const cargarIngresos=()=>{
    let ingresosHTML='';
    for(let ingreso of ingresos)
    {
        ingresosHTML+=crearIngresosHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML=ingresosHTML;
}

const crearIngresosHTML=(ingreso)=>
{
    let ingresoHTML=`
    <div id="lista-ingresos">
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">+${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                         <ion-icon name="close-circle-outline"
                         
                        onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;

    return ingresoHTML;
}


const cargarEgresos=()=>{
    let egresosHTML='';
    for(let egreso of egresos)
    {
        egresosHTML+=crearEgresosHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML=egresosHTML;
}
const crearEgresosHTML=(egreso)=>
{

    let egresosHTML=`
    <div id="lista-egresos">
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">-${egreso.valor}</div>
                <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalIngresos())}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                         <ion-icon name="close-circle-outline"
                         onclick='eliminarEgreso(${egreso.id})'></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;

    return egresosHTML;
}


/**************************************************************** */
//eliminar
const eliminarIngreso= (id)=>{

    let indiceEliminar = ingresos.findIndex( ingreso=> ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

const eliminarEgreso= (id)=>{

    let indiceEliminar = egresos.findIndex( egreso=> egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}


/**************************************************************** */
let agregarDato=()=>{
   
    let forma=document.forms['forma'];
    let tipo=forma['tipo'];
    let descripcion=forma['descripcion'];
    let valor=forma['valor'];
    if(descripcion.value!==''&&valor.value!=='') 
    {
      
        if(tipo.value==='ingreso')
        {  //                                     +valor.value=convertir a valor numerico
            
            ingresos.push(new Ingreso(descripcion.value,+valor.value));
            cargarIngresos();
            cargarCabecero();
        
        }else if(tipo.value==='egreso')
        {
            egresos.push(new Egreso(descripcion.value,+valor.value));
            cargarEgresos();
            cargarCabecero();
        }

        descripcion.value="";
        valor.value="";
    }
}