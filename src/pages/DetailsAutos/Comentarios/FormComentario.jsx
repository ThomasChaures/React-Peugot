import React, { useState } from "react";
import { addAnswer } from "../../../service/comentarios.service";

const FormComentario = ({ id, index, name, surname, sub }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false); // Estado para manejo de carga
  const [error, setError] = useState(null); // Estado para manejar errores

  const textChange = (e) => {
    setText(e.target.value);
  };

  const submitForm = async (e) => {
    if (!text.trim()) {
      e.preventDefault();
      setError("El texto no puede estar vacío");
      return;
    }

    const answer = {
      index: index,
      name: name,
      surname: surname,
      text: text,
    };

    try {
      setLoading(true);
      setError(null);
      await addAnswer(answer, id);
      setText(""); // Resetea el textarea después de enviar la respuesta
      sub(false);
    } catch (error) {
      setError("Hubo un problema al enviar la respuesta");
      console.error("Error al enviar la respuesta:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white max-w-[500px] w-full rounded px-2 py-2">
      <form
        onSubmit={submitForm}
        className="w-full gap-y-3 py-3 px-3 flex flex-col"
      >
        <label htmlFor="answer" className="">
          Respond
        </label>
        <textarea
          onChange={textChange}
          value={text} // Asegura que el textarea se sincronice con el estado
          className="w-full border resize-none px-2 py-2 h-14 rounded"
          name="answer"
          id="answer"
          disabled={loading} // Desactiva mientras se envía
        ></textarea>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={loading} // Botón desactivado mientras está en carga
          className={`${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-950 hover:bg-blue-500"
          } self-end transition-all rounded text-white h-10 w-[100px]`}
        >
          {loading ? "Sending..." : "Respond"}
        </button>
      </form>
    </div>
  );
};

export default FormComentario;
