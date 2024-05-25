const servicescatalogue = new DocumentFragment()

function defservice(service, smlldes, description, price, URL) {
    let servi = document.createElement('article');
    servi.classList.add('service');

    let name = document.createElement('h3');   name.classList.add('name');
    name.textContent = service;
    let img = document.createElement('img');  img.classList.add('img-ex');
    img.setAttribute('src', URL); img.setAttribute('alt', 'image')
    let smldsc = document.createElement('p');    smldsc.classList.add('small-p');
    smldsc.textContent = smlldes;
    let bdesc = document.createElement('p'); bdesc.classList.add('hidden', 'nrml-p');
    bdesc.textContent = description;
    let pric = document.createElement('span'); pric.classList.add('hidden','price');
    pric.textContent = price;
    [name, img, smldsc, bdesc, pric].forEach(e => {
        servi.appendChild(e)
    });
    return servi
};
const reparCale = defservice('Reparacion Calentadores', 
    'Servicio a domicilio de reparacion de calentadores, realizado por personal especializado',
    'Llevamos a tecnicos especializados para detectar y solucionar los problemas y errores que presente su calentador, sin importar la marca o litros del mismo',
    'Variable',
    'img/services/macaco-trabajando.jpeg'
)   
const instGas = defservice('Instalacion de red de gas',
    'Nuestro personal especializado llega a su puerta para instalar redes de gas, a un precio economico',
    'Contamos con permiso para realizar instalacion de redes de gas, aseguramos alta calidad de servicio y un precio economico. Todo es realizado por personal altamente capacitado',
    99999,
    'img/services/example.jpg'
)
const limCub = defservice('Limpieza de Cubiertas',
    'Servicio a domicilio para la limpieza de cubiertas, su cocina quedara como nueva',
    'Contamos con personal capacitado para realizar una exaustiva limpieza y manteniento a sus cubiertas, garantizando una limpieza profunda y duradera',
    999999,
    'img/services/example.jpg'
)
const mantGen = defservice('Mantenimiento general calentadores', 
    'Llevamos a nuestros tecnicos para limpiar y encontrar cualquier clase de problema a todo tipo de calentadores', 
    'Tenemos los mejores tecnicos, con gran servicio y trato a nuestros clientes, que garantizan encontrar cualquier problema o daño por mal uso de cualquier calentador, sin importar su tamaño. Nuestros tecnicos se aseguraran de dar una limpieza adecuada y dar indicaciones para alargar la vida util de los calentadores',
    50000,
    'img/services/example.jpg'
)
const rev5anos = defservice('Revision de 5 años', 
    'Llevamos a cabo la reivision solicitada por EPM cada 5 años, a un precio economico',
    'contamos con personal verificado para llevar a cabo la revision obligatoria de cada 5 años solicitada por EPM de las redes de gas, para verificar la calidad y estado de estas',
    999999,
    'img/services/example.jpg'
)
const instCal = defservice('Instalacion de calentadores', 
    'instalamos todo tipo de calentadores, contamos con servicio de garantia',
    'Nuestro personal instalara cualquier tipo de calentador, se asegurara de dar las indicaciones para mantener la salud de este. Este servicio puede ser solicitado junto con la compra de uno de nuestros calentadores',
    999999,
    'img/services/example.jpg'
)

let services = [reparCale, instGas, limCub, mantGen, rev5anos, instCal];

