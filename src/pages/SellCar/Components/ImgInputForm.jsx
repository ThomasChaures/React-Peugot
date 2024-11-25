import React, { useState } from "react";

const ImgInputForm = ({ id, onFileChange, dark }) => {
  const darked = () => {
      if(dark === true){
        return `hover:border-white border-white/20`
      }else{
        return `hover:border-slate-950 border-slate-950/20`
      }
  }
  const [url, setUrl] = useState("");
  const previewImg = (event) => {
    if (!event.target.files.length) return;
    const file = event.target.files[0];
    onFileChange(id, file); 
    const newUrl = URL.createObjectURL(file);
    setUrl(newUrl);

    return () => URL.revokeObjectURL(newUrl);
  };

  return (
    <>
      <div className="max-w-40 max-h-40 max-[870px]:max-w-full  w-full h-full">
        <label
          className={`max-w-40 max-h-40 my-4 w-full  max-[870px]:max-w-full   h-full border-2 cursor-pointer items-center justify-center transition-all rounded ${darked} border-dashed`}
          htmlFor={`img${id}`}
        >
          {url ? (
            <img
              src={url}
              className="w-full max-w-40 max-[870px]:max-w-full max-h-40 h-full object-cover"
              alt="Preview"
              style={{ maxWidth: "100%" }}
            />
          ) : (
            <>
              {" "}
              <div className="max-w-40 w-full h-40  max-[870px]:max-w-full   text-[21px] flex items-center justify-center">
                <i className="fa-solid transition-all  hover:border-slate-950 bg-slate-950/20 text-white px-2 py-2 rounded-full  fa-camera"></i>
              </div>
            </>
          )}
          <input
            onChange={previewImg}
            className="hidden"
            type="file"
            name={`img${id}`}
            id={`img${id}`}
            accept="image/*"
          />
        </label>
      </div>
    </>
  );
};

export default ImgInputForm;
