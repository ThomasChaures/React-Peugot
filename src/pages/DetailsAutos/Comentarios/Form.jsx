import React, { useState } from "react";
import { addComent } from "../../../service/comentarios.service";

const Form = ({ id, name, surname }) => {
  const [text, setText] = useState("");

  const changeEvent = (e) => {
    setText(e.target.value);
    console.log(name, surname);
  };

  const submitForm = (e) => {
    e.preventDefault();


    if (!text.trim()) {
     
      return;
    }

   
    const comentario = {
      name: name,
      surname: surname,
      text: text
    };

    addComent(comentario, id)
      .then(() => {
        setText(""); 
      })
      .catch((error) => {
       
        console.error(error);
      });
  };

  return (
    <form onSubmit={submitForm} className="w-full flex gap-2 items-end">
      <div className="flex gap-y-2 mt-2 w-full flex-col">
        <label htmlFor="text" className="sr-only">Comment</label>
        <textarea
          className="border resize-none px-2 py-2 h-14 rounded"
          id="text"
          name="text"
          value={text} 
          onChange={changeEvent}
        ></textarea>
      </div>
      <button
        className="bg-blue-950 hover:bg-blue-500 transition-all rounded text-white h-14 w-[200px]"
        type="submit"
      >
        Request Info
      </button>
    </form>
  );
};

export default Form;
