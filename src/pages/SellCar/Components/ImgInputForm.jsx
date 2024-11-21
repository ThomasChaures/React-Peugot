import React, { useState } from 'react';

const ImgInputForm = ({id}) => {
  const [url, setUrl] = useState('');

  const previewImg = (event) => {
    if (!event.target.files.length) return;
    const file = event.target.files[0];
    const newUrl = URL.createObjectURL(file);
    setUrl(newUrl);

    return () => URL.revokeObjectURL(newUrl);
  };

  return (
    <>
     <div>
     <label htmlFor="img">
        {url ? <img src={url} alt="Preview" style={{ maxWidth: '100%' }} /> : 'Selecciona una imagen'}
      </label>
      <input onChange={previewImg} type="file" name={`img${id}`} id={`img${id}`} accept="image/*" />
     </div>
    </>
  );
};

export default ImgInputForm;
