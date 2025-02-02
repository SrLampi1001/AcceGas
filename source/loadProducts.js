function deleteSub(str){
    let str2 = ''; let a = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i]=='_') {
            a = ' ';}
        else if (str[i]=='l' && (`${parseInt(str[i+1])}` != "NaN")){
            a = '/';
        }
        else{ a = str[i]};
        str2 = str2 + a;}    
    return str2;    
};

async function cargarProductos(place = document.getElementById("calalogue")) {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/productos');
        const products = await response.json();
        
        function putinPlacle(product){
            const div = document.createElement("div");
            div.classList.add("product");
            let splitname = product.Name.split("_");
            switch(splitname[0]){
                case"cobre":
                    place = document.getElementById("acc-cobre");
                    break;
                case"cpvc":
                    place = document.getElementById("acc-cpvc");
                    break;
                case"galvanizado":
                    place = document.getElementById("acc-galvanizado");
                    break;
                case"pealpe":
                    place = document.getElementById("acc-pealpe");
                    break;
                case"polietileno":
                    place = document.getElementById("acc-polietileno");
                    break;
                case"polipropileno":
                    place = document.getElementById("acc-polipropileno");
                    break;
                case"pvc":
                    place  = document.getElementById("acc-pvc");
                    break;
                case"universal":
                    place=document.getElementById("acc-universal");
                    break;
                case"calentador":
                    place=document.getElementById("calentadores");
                    break;
                case"atg":
                    place=document.getElementById("acc-atg");
                    break;
                default:
                    place=  document.getElementById("otros");
                    break;
            }
            div.setAttribute("id", `p${product.ID_producto}`);

            div.innerHTML = `
                <h3 class="h3_product_title">${deleteSub(product.Name)}</h3>
                ${product.img1 ? `<img src="${product.img1}" alt="${product.Name}" loading="lazy">` : ""}
                ${product.img2 ? `<img src="${product.img2}" alt="${product.Name}" class="hidden" loading="lazy">` : ""}
                ${product.img3 ? `<img src="${product.img3}" alt="${product.Name}" class="hidden" loading="lazy">` : ""}
                <span class="spn_price">${product.Price} COP</span>
            `;
            place.appendChild(div);            
        ;}
        products.forEach(product => {putinPlacle(product)});
    } catch (error) {
        console.error("Error cargando productos:", error);
    }
}

cargarProductos();