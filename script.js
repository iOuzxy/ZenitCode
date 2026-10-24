document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    const fields = {
        nombre: document.getElementById('nombre'),
        apellido: document.getElementById('apellido'),
        email: document.getElementById('email'),
        mensaje: document.getElementById('mensaje')
    };

    const errors = {
        nombre: document.getElementById('err-nombre'),
        apellido: document.getElementById('err-apellido'),
        email: document.getElementById('err-email'),
        mensaje: document.getElementById('err-mensaje')
    };

    const thanksMsg = document.getElementById('thanksMsg');

    const regexTexto = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function setFieldStatus(field, errorEl, isValid) {
        if (isValid) {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
            errorEl.style.display = 'none';
        } else {
            field.classList.remove('is-valid');
            field.classList.add('is-invalid');
            errorEl.style.display = 'block';
        }
        return isValid;
    }

    function validateNombre() {
        return setFieldStatus(fields.nombre, errors.nombre, regexTexto.test(fields.nombre.value.trim()));
    }

    function validateApellido() {
        return setFieldStatus(fields.apellido, errors.apellido, regexTexto.test(fields.apellido.value.trim()));
    }

    function validateEmail() {
        return setFieldStatus(fields.email, errors.email, regexEmail.test(fields.email.value.trim()));
    }

    function validateMensaje() {
        return setFieldStatus(fields.mensaje, errors.mensaje, fields.mensaje.value.trim().length >= 10);
    }

    if (fields.nombre) fields.nombre.addEventListener('input', validateNombre);
    if (fields.apellido) fields.apellido.addEventListener('input', validateApellido);
    if (fields.email) fields.email.addEventListener('input', validateEmail);
    if (fields.mensaje) fields.mensaje.addEventListener('input', validateMensaje);

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const isNombreValid = validateNombre();
            const isApellidoValid = validateApellido();
            const isEmailValid = validateEmail();
            const isMensajeValid = validateMensaje();

            if (!isNombreValid || !isApellidoValid || !isEmailValid || !isMensajeValid) {
                alert('Por favor completa todos los campos correctamente.');
                thanksMsg.style.display = 'none';
                return;
            }

            thanksMsg.style.display = 'inline-block';
            form.reset();

            Object.values(fields).forEach(f => {
                f.classList.remove('is-valid', 'is-invalid');
            });

            setTimeout(() => {
                thanksMsg.style.display = 'none';
            }, 5000);
        });
    }
});