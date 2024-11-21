import React, { useState } from "react";
import FormComentario from "./FormComentario"; // ¿Se usa este componente?

const Comentario = ({ comentario, email, vendedor, role }) => {
  const [showAllAnswers, setShowAllAnswers] = useState(false);

  // Validación para evitar errores si las propiedades no están definidas
  if (!comentario || !comentario.answers) return null; // Si no hay comentario o respuestas, no renderiza

  const toggleAnswers = () => setShowAllAnswers(!showAllAnswers);

  const answersToDisplay = showAllAnswers
    ? comentario.answers
    : comentario.answers.slice(0, 2);

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md mb-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold text-gray-800">
            {comentario.name } {comentario?.surname}
          </p>
          <p className="text-gray-700">{comentario.text || "No comment text available"}</p>
        </div>
        {(vendedor?.email === email || role === "Admin") && (
          <div>
            <button className="bg-blue-950 hover:bg-blue-500 transition-all rounded text-white h-10 w-[100px]">
              Respond
            </button>
          </div>
        )}
      </div>

      {/* Mostrar respuestas si existen */}
      {comentario?.answers?.length > 0 && (
        <div className="mt-4 bg-gray-50 p-3 rounded-lg border border-gray-200">
          <h4 className="text-md font-medium text-gray-800 mb-2">Answers:</h4>
          <ul className="space-y-2">
            {answersToDisplay.map((answer, index) => (
              <li key={index} className="p-2 border border-gray-300 rounded-md bg-white shadow-sm">
                <p className="text-sm font-semibold text-gray-800">
                  {answer?.name || "Anonymous"} {/* Mostrar 'Anonymous' si no hay nombre */}
                </p>
                <p className="text-sm text-gray-600">{answer?.text || "No answer text available"}</p>
              </li>
            ))}
          </ul>

          {/* Mostrar botón "ver más" si hay más de 2 respuestas */}
          {comentario?.answers.length > 2 && (
            <button onClick={toggleAnswers} className="mt-3 text-blue-500 hover:underline">
              {showAllAnswers ? "See less" : `See more (${comentario.answers.length - 2})`}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Comentario;
