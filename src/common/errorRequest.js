import Swal from "sweetalert2";

export default function errorRequest(error) {
  Swal.fire(
    "Erro",
    (error.response && error.response.data.message) ||
      "Ops! Um erro ocorreu, atualize a página e tente novamente.",
    "error"
  );
}
