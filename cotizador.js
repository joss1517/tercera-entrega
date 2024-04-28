const cotizador = document.getElementById("cotizador");
cotizador.innerHTML = `
                      <div class="container-2">
                             <h1 class="title-2">Cotizador de Corte de Vinil</h1>
                             <h3>"vinil básico perzonalizado"</h3>
                             <form id="cotizadorForm">
                               <div class="form-group">
                                 <label for="ancho">Ancho (cm):</label>
                                 <input type="number" id="ancho" name="ancho" required>
                               </div>
                               <div class="form-group">
                                 <label for="alto">Alto (cm):</label>
                                 <input type="number" id="alto" name="alto" required>
                               </div>
                               <div class="form-group">
                                 <label for="cantidad">Cantidad:</label>
                                 <input type="number" id="cantidad" name="cantidad" required>
                              </div>
                               <div class="form-group">
                                 <button type="button" onclick="calcularPrecio()" class="btn-1">Calcular Precio por m²</button>
                               </div>
                             </form>
                             <div id="resultado"></div>
                    </div>`
cotizador.appendChild("div");

function calcularPrecio() {
  let ancho = parseFloat(document.getElementById("ancho").value);
  let alto = parseFloat(document.getElementById("alto").value);
  let cantidad = parseInt(document.getElementById("cantidad").value);

  let areaM2 = (ancho * alto) / 10000;

  let precioPorM2 = 350;
  let precioTotal = areaM2 * precioPorM2 * cantidad;

  document.getElementById("resultado").innerHTML =
    "Precio por m²: $" + precioTotal.toFixed(2)
};
