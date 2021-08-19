import { useState, useRef } from 'react';
import css from '../styles/UploadImage.modul.css';

const UploadImage = ({ data, dispatch }) => {
  const fileInput = useRef(null);
  const [image, setImage] = useState(null);
  const [blob, setBlob] = useState(null);

  const handleDragStart = e => {
    e.dataTransfer.clearData();
  };

  const onButtonClick = () => {
    fileInput.current.click();
  };

  const handleClearFile = () => {
    setBlob(null);
    setImage(null);
  };
  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: 'SET_DROP_DEPTH',
      dropDepth: data.dropDepth + 1
    });
  };

  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: 'SET_DROP_DEPTH',
      dropDepth: data.dropDepth - 1
    });
    data.dropDepth > 0 &&
      dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false });
  };

  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';
    dispatch({
      type: 'SET_IN_DROP_ZONE',
      inDropZone: true
    });
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    const newImage = e.dataTransfer.files[0];
    const newBlob = URL.createObjectURL(newImage);
    dispatch({
      type: 'ADD_FILE_TO_LIST',
      newImage
    });
    setBlob(newBlob);
    setImage(newImage);
    dispatch({ type: 'SET_DROP_DEPTH', dropDepth: 0 });
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false });
  };

  const handleClick = e => {
    const newBlob = URL.createObjectURL(e.target.files[0]);
    setBlob(newBlob);
    const newImage = e.target.files[0];
    setImage(newImage);
    console.log(newImage);
    dispatch({
      type: 'ADD_FILE_TO_LIST',
      newImage
    });
  };

  return (
    <div>
      <div className={css.container}>
        <div
          ref={dropInput}
          className={dropZone}
          onDragStart={handleDragStart}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={onButtonClick}
        >
          <input
            style={{ display: 'none' }}
            ref={fileInput}
            onChange={handleClick}
            type="file"
            id="file"
            accept="image/gif, image/jpeg, image/png"
            name="file"
            autoComplete="off"
            tabIndex="-1"
          />
          <label htmlFor="file" name="file">
            Click to upload{' '}
          </label>
          <p>Drag and drop your image file here, or click to select file</p>
          <div style={!blob && { display: 'none' }}>
            <img className={css.img__preview} src={blob && blob} />
          </div>
        </div>
      </div>
      <div className={css.buttons}>
        {image && (
          <button className={`btn ${css.btn__clear}`} onClick={handleClearFile}>
            Clear file
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadImage;
