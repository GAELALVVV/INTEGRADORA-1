// Variable para almacenar el gráfico y evitar múltiples instancias
// Variable para almacenar el gráfico y evitar múltiples instancias
let presupuestoChart;

// Función para calcular el presupuesto usando la regla 50/30/20
function calcularPresupuesto() {
    const ingresosInput = document.getElementById("ingresos");
    const ingresos = parseFloat(ingresosInput.value);

    if (!isNaN(ingresos) && ingresos > 0) {
        const necesidades = ingresos * 0.5;
        const deseos = ingresos * 0.3;
        const ahorro = ingresos * 0.2;

        document.getElementById("resultado").innerHTML = `
            <p>Necesidades: $${necesidades.toFixed(2)}</p>
            <p>Deseos: $${deseos.toFixed(2)}</p>
            <p>Ahorro: $${ahorro.toFixed(2)}</p>
        `;

        const data = [necesidades, deseos, ahorro];
        const labels = ["Necesidades", "Deseos", "Ahorro"];

        if (presupuestoChart) {
            presupuestoChart.destroy();
        }

        const ctx = document.getElementById("graficoPresupuesto").getContext("2d");
        presupuestoChart = new Chart(ctx, {
            type: 'pie',  
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    borderColor: '#ffffff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: { size: 16 }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Distribución del Presupuesto (50/30/20)',
                        font: { size: 18 }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const total = data.reduce((acc, curr) => acc + curr, 0);
                                const porcentaje = ((context.raw / total) * 100).toFixed(2);
                                return `${context.label}: $${context.raw.toFixed(2)} (${porcentaje}%)`;
                            }
                        }
                    }
                }
            }
        });
    } else {
        document.getElementById("resultado").innerHTML = "<p>Por favor, ingresa un número válido.</p>";
        ingresosInput.focus();
    }
}

document.getElementById("btn__registrarse").addEventListener("click", register)
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion)
window.addEventListener("resize", anchoPagina)

// Declaracion variables
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

function anchoPagina(){
    if(window.innerWidth >850){
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

function iniciarSesion(){
    if(window.innerWidth > 850){
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else{
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
    

}

function register(){
    if(window.innerWidth > 850){
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else{
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
    

}


