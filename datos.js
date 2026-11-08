function cargarLista(nombre, textos, numeros, inicial) {
    var cantidad = localStorage.getItem(nombre + '_cantidad');
    if (cantidad === null) {
        return inicial;
    }
    var lista = [];
    for (var i = 0; i < Number(cantidad); i++) {
        var elemento = {};
        for (var j = 0; j < textos.length; j++) {
            elemento[textos[j]] = localStorage.getItem(nombre + '_' + i + '_' + textos[j]);
        }
        for (var j = 0; j < numeros.length; j++) {
            elemento[numeros[j]] = Number(localStorage.getItem(nombre + '_' + i + '_' + numeros[j]));
        }
        lista.push(elemento);
    }
    return lista;
}

function guardarLista(nombre, lista) {
    localStorage.setItem(nombre + '_cantidad', lista.length);
    for (var i = 0; i < lista.length; i++) {
        for (var campo in lista[i]) {
            localStorage.setItem(nombre + '_' + i + '_' + campo, lista[i][campo]);
        }
    }
}

function cargarNumero(nombre, inicial) {
    if (localStorage.getItem(nombre) === null) {
        return inicial;
    }
    return Number(localStorage.getItem(nombre));
}

var medicamentos = cargarLista('medicamentos', ['nombre', 'categoria'], ['codigo', 'precio', 'existencia'], [
    { codigo: 100, nombre: 'Paracetamol 500mg', categoria: 'Analgésico', precio: 35, existencia: 50 },
    { codigo: 101, nombre: 'Amoxicilina 875mg', categoria: 'Antibiótico', precio: 160, existencia: 45 },
    { codigo: 102, nombre: 'Omeprazol 20mg', categoria: 'Gastrointestinal', precio: 78, existencia: 15 },
    { codigo: 103, nombre: 'Ibuprofeno 400mg', categoria: 'Antiinflamatorio', precio: 45, existencia: 12 }
]);

var clientes = cargarLista('clientes', ['codigo', 'nombre', 'telefono', 'correo', 'estatus'], [], [
    { codigo: 'C-01', nombre: 'Alejandro Ortiz Hernandez', telefono: '33 1245 7890', correo: 'alejandro.Ortiz@email.com', estatus: 'Activo' },
    { codigo: 'C-02', nombre: 'Karina Marisol Rosales', telefono: '33 9876 5432', correo: 'Karina.rosales@email.com', estatus: 'Activo' },
    { codigo: 'C-03', nombre: 'Aldo Ismael Barba', telefono: '33 3456 1289', correo: 'A.Barba@email.com', estatus: 'Activo' }
]);

var ventas = cargarLista('ventas', ['fecha', 'nombre', 'cliente'], ['nota', 'codigo', 'cantidad', 'precio', 'existencia'], [
    { nota: 1, fecha: '01/01/2025', codigo: 100, nombre: 'Paracetamol 500mg', cantidad: 50, precio: 35, existencia: 50, cliente: 'Público general' },
    { nota: 2, fecha: '01/04/2025', codigo: 101, nombre: 'Amoxicilina 875mg', cantidad: 15, precio: 160, existencia: 45, cliente: 'Público general' },
    { nota: 3, fecha: '03/01/2025', codigo: 102, nombre: 'Omeprazol 20mg', cantidad: 5, precio: 78, existencia: 15, cliente: 'Público general' },
    { nota: 4, fecha: '03/01/2025', codigo: 103, nombre: 'Ibuprofeno 400mg', cantidad: 3, precio: 45, existencia: 12, cliente: 'Público general' }
]);

var dias = cargarLista('dias', ['dia'], ['notas', 'articulos', 'total'], [
    { dia: 'Lunes', notas: 12, articulos: 18, total: 1200 },
    { dia: 'Martes', notas: 15, articulos: 22, total: 1450 },
    { dia: 'Miércoles', notas: 10, articulos: 14, total: 950 },
    { dia: 'Jueves', notas: 18, articulos: 25, total: 1800 },
    { dia: 'Viernes', notas: 18, articulos: 30, total: 2500 }
]);

var ventaDia = cargarNumero('ventaDia', 5000);
var ventaMes = cargarNumero('ventaMes', 91092);

function guardar() {
    guardarLista('medicamentos', medicamentos);
    guardarLista('clientes', clientes);
    guardarLista('ventas', ventas);
    guardarLista('dias', dias);
    localStorage.setItem('ventaDia', ventaDia);
    localStorage.setItem('ventaMes', ventaMes);
}

function reiniciarDatos() {
    if (confirm('¿Borrar todos los cambios y volver a los datos iniciales?')) {
        localStorage.clear();
        location.reload();
    }
}

function sumar(lista, campo, i) {
    if (i === lista.length) {
        return 0;
    }
    return lista[i][campo] + sumar(lista, campo, i + 1);
}

function formatoDinero(cantidad) {
    return '$' + cantidad.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatoNota(numero) {
    if (numero < 10) {
        return '#00' + numero;
    }
    if (numero < 100) {
        return '#0' + numero;
    }
    return '#' + numero;
}

function fechaHoy() {
    var f = new Date();
    var dia = f.getDate() < 10 ? '0' + f.getDate() : '' + f.getDate();
    var mes = f.getMonth() + 1 < 10 ? '0' + (f.getMonth() + 1) : '' + (f.getMonth() + 1);
    return dia + '/' + mes + '/' + f.getFullYear();
}
