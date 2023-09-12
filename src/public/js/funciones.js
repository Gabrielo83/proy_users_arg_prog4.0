//funcion para SWEETALERT2
const confirmar = (id) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "Esta seguro de eliminar al usuario?",
      text: "Esta acción no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Eliminado!",
          "El usuario ha sido eliminado.",
          "success"
        );
        //asignamos la ruta para efectuar la eliminación
        window.location = "/deleteUser/" + id;
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Cancelado",
          "No se ha eliminado el usuario",
          "error"
        );
      }
    });

  //   Swal.fire({
  //     title: "Esta seguro de Eliminar al usuario?",
  //     text: "Esta acción no se puede revertir!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Confirmar",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire("Eliminado!", "El usuario ha sido eliminado.", "success");
  //     }
  //   });
};
