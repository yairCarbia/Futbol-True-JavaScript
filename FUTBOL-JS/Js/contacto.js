const nombre = document.querySelector("#nombre");
const mail = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
// const btnEnviar = document.querySelector("#");

const btn = document.getElementById('button');

const contactoObj = {
    name: "",
    email: "",
    textarea: ""
}
document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();


        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_y6j04rm';

        emailjs.sendForm(serviceID, templateID, this)
        Swal.fire({
            heigth: 600,

            showClass: {
                popup: 'animate__animated animate__backInLeft'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutRightBig'
            },
            background: " url(/img/7.jpg)",
            position: 'center',
            icon: 'success',
            title: 'EMAIL ENVIADO CORRECTAMENTE',
            showConfirmButton: false,
            timer: 1500
        })
            .then(() => {

                btn.value = 'ENVIAR EMAIL';
                // alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });

