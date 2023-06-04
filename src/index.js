import React, { useRef } from "react";
import "./drop.css";

function Drop({
  name,
  handleDrop,
  type = "image",
  accept = "image/*",
  state = [],
  setState,
}) {
  const imgInputRef = useRef();

  function handleRemove(item) {
    let temp = [...state];
    temp = temp.filter((url) => url !== item);
    setState(temp);
  }

  return (
    <div style={{ margin: "1rem" }}>
      <label>{name}</label>
      <div
        className="card"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleDrop(e.dataTransfer.files, setState);
        }}
      >
        <div className="card-body">
          <div
            className="dropzone dropzone-multiple"
            role="presentation"
            tabIndex="0"
          >
            <input
              key={new Date().getMilliseconds()}
              type="file"
              accept={accept}
              tabIndex="-1"
              hidden
              ref={imgInputRef}
              onChange={(e) => handleDrop(e.target.files, setState)}
            />
            <div className="dz-message">
              Drop files or{" "}
              <button
                type="button"
                className="upload_btn"
                onClick={() => imgInputRef.current.click()}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {state.map((item, index) => (
          <div key={index}>
            {type === "image" && (
              <div>
                <img
                  src={item?.url}
                  alt="dropimage"
                  width="80px"
                  height="50px"
                  style={{ borderRadius: ".3rem",objectFit:"cover" }}
                />
                <p>{item?.name}</p>
                <button
                  className="delete_btn"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            )}
            {type === "audio" && (
              <div>
                <audio controls>
                  <source src={item?.url} type="audio/mp3" />
                </audio>
                <p>{item?.name}</p>
                <button
                  className="delete_btn"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            )}
            {type === "video" && (
              <div>
                <video
                  key={new Date().getMilliseconds()}
                  style={{
                    borderRadius: ".3rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  width="80px"
                  height="50px"
                >
                  <source src={item?.url} type="video/mp4" />
                </video>
                <p>{item?.name}</p>
                <button
                  className="delete_btn"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


module.exports = Drop