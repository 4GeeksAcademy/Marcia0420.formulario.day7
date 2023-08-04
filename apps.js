window.onload = function formulario(event) {
    event.preventDefault()

    document.getElementById("alerta").style.display = "none"//oculta el alerta.
    document.getElementById("enviar").addEventListener("click", chequeo)

    function chequeo() {
        document.getElementById("alerta").style.display = "none"//oculta el alerta.

        // chequeo de la targeta.
        let tarjeta = document.getElementById("card").value
        if (tarjeta == "") {
            document.getElementById("card").className = "form-control bg-danger opacity-50"
            document.getElementById("alerta").style.display = "flex"
        } else {
            document.getElementById("card").className = "form-control"
        }

        //chequeo del cvc.
        let cvc = document.getElementById("cvc").value
        if (cvc == "") {
            document.getElementById("cvc").className = "form-control bg-danger opacity-50"
            document.getElementById("alerta").style.display = "flex"
        } else {
            document.getElementById("cvc").className = "form-control"
        }


        // cheque del anount.
        let amount = document.getElementById("amount").value
        if (amount == "") {
            document.getElementById("amount").className = "form-control bg-danger opacity-50"
            document.getElementById("alerta").style.display = "flex"
        } else {
            document.getElementById("amount").className = "form-control"
        }


        // cheque del nombre.
        let firstname = document.getElementById("firstname").value
        if (firstname == "") {
            document.getElementById("firstname").className = "form-control bg-danger opacity-50"
            document.getElementById("alerta").style.display = "flex"
        } else {
            document.getElementById("firstname").className = "form-control"
        }



        // cheque del apellido.
        let lastname = document.getElementById("lastname").value
        if (lastname == "") {
            document.getElementById("lastname").className = "form-control bg-danger opacity-50"
            document.getElementById("alerta").style.display = "flex"
        } else {
            document.getElementById("lastname").className = "form-control"
        }




        // cheque del city.
        let city = document.getElementById("city").value
        if (city == "") {
            document.getElementById("city").className = "form-control bg-danger opacity-50"
            document.getElementById("alerta").style.display = "flex"
        } else {
            document.getElementById("city").className = "form-control"
        }


        // cheque del codigo postal.
        let postal = document.getElementById("postal").value
        if (postal == "") {
            document.getElementById("postal").className = "form-control bg-danger opacity-50"
            document.getElementById("alerta").style.display = "flex"
        } else {
            document.getElementById("postal").className = "form-control"
        }


        // cheque del mensaje.
        let mensaje = document.getElementById("mensaje").value
        if (mensaje == "") {
            document.getElementById("mensaje").className = "form-control bg-danger opacity-50"
            document.getElementById("alerta").style.display = "flex"
        } else {
            document.getElementById("mensaje").className = "form-control"
        }



        // cheque del stado.
        let state = document.getElementById("state").value
        if (state == "Pick a state...") {
            document.getElementById("state").className = "form-control bg-danger opacity-50"
            document.getElementById("alerta").style.display = "flex"
        } else {
            document.getElementById("state").className = "form-control"
        }


        //seleccion de targeta.
        let seleccion=document.querySelector('input[name="inlineRadioOptions"]:checked')
        if(!seleccion){ 
            document.getElementById("alerta").style.display = "flex"
            document.getElementById("seleccion").className="bg-secondary p-2 rounded-2 ps-3 w-50 bg-danger opacity-50"
        }else{
            document.getElementById("seleccion").className="bg-secondary p-2 rounded-2 ps-3 w-50"
        }








    }
}



            //cheque del Amont.
            // //let tarjeta = document.getElementById("amount").value
            // if (tarjeta == "") {
            //     document.getElementById("card").className = "form-control bg-danger opacity-50"
            //     document.getElementById("alerta").style.display = "flex"
            // } else {
            //     document.getElementById("card").className = "form-control"


                //chequeo del firstname.
                // let tarjeta = document.getElementById("firstname").value
                // if (tarjeta == "") {
                //     document.getElementById("card").className = "form-control bg-danger opacity-50"
                //     document.getElementById("alerta").style.display = "flex"
                // } else {
                //     document.getElementById("card").className = "form-control"


                    //chequeo del lastname.
                    // let tarjeta = document.getElementById("lastname").value
                    // if (tarjeta == "") {
                    //     document.getElementById("card").className = "form-control bg-danger opacity-50"
                    //     document.getElementById("alerta").style.display = "flex"
                    // } else {
                    //     document.getElementById("card").className = "form-control"





                        //chequeo del city.
                        // let tarjeta = document.getElementById("city").value
                        // if (tarjeta == "") {
                        //     document.getElementById("card").className = "form-control bg-danger opacity-50"
                        //     document.getElementById("alerta").style.display = "flex"
                        // } else {
                        //     document.getElementById("card").className = "form-control"




                            //chequeo del state.
                            // let tarjeta = document.getElementById("state").value
                            // if (tarjeta == "") {
                            //     document.getElementById("card").className = "form-control bg-danger opacity-50"
                            //     document.getElementById("alerta").style.display = "flex"
                            // } else {
                            //     document.getElementById("card").className = "form-control"

























