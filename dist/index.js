'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".card{background:hsla(120,9%,93%,.499);border-radius:.3rem;margin:1rem 0;padding:1rem}.card-body{align-items:center;border:2px dashed #079975;border-radius:inherit;display:flex;justify-content:center;padding:3rem;transition:.3s ease}.card-body:hover{box-shadow:3px 3px 10px #cdc6c6}.container{display:flex;flex-direction:column}.container>div>div{align-items:center;background:hsla(120,9%,93%,.499);border-radius:.3rem;display:flex;justify-content:space-between;margin:.3rem 0;padding:.6rem}.delete_btn,.upload_btn{background-color:#079975;border:none;border-radius:.3rem;color:#fff;cursor:pointer;padding:.4rem .6rem}";
styleInject(css_248z);

function Drop({
  name,
  handleDrop,
  type = "image",
  accept = "image/*",
  state = [],
  setState
}) {
  const imgInputRef = React.useRef();
  function handleRemove(item) {
    let temp = [...state];
    temp = temp.filter(url => url !== item);
    setState(temp);
  }
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      margin: "1rem"
    }
  }, /*#__PURE__*/React__default["default"].createElement("label", null, name), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "card",
    onDragOver: e => e.preventDefault(),
    onDrop: e => {
      e.preventDefault();
      handleDrop(e.dataTransfer.files, setState);
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dropzone dropzone-multiple",
    role: "presentation",
    tabIndex: "0"
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    key: new Date().getMilliseconds(),
    type: "file",
    accept: accept,
    tabIndex: "-1",
    hidden: true,
    ref: imgInputRef,
    onChange: e => handleDrop(e.target.files, setState)
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dz-message"
  }, "Drop files or", " ", /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: "upload_btn",
    onClick: () => imgInputRef.current.click()
  }, "Upload"))))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "container"
  }, state.map((item, index) => /*#__PURE__*/React__default["default"].createElement("div", {
    key: index
  }, type === "image" && /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("img", {
    src: item.url,
    alt: "dropimage",
    width: "80px",
    height: "50px",
    style: {
      borderRadius: ".3rem"
    }
  }), /*#__PURE__*/React__default["default"].createElement("p", null, item?.name), /*#__PURE__*/React__default["default"].createElement("button", {
    className: "delete_btn",
    onClick: () => handleRemove(item)
  }, "Delete")), type === "audio" && /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("audio", {
    controls: true
  }, /*#__PURE__*/React__default["default"].createElement("source", {
    src: item.url,
    type: "audio/mp3"
  })), /*#__PURE__*/React__default["default"].createElement("p", null, item?.name), /*#__PURE__*/React__default["default"].createElement("button", {
    className: "delete_btn",
    onClick: () => handleRemove(item)
  }, "Delete")), type === "video" && /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("video", {
    key: new Date().getMilliseconds(),
    style: {
      borderRadius: ".3rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    width: "80px",
    height: "50px"
  }, /*#__PURE__*/React__default["default"].createElement("source", {
    src: item.url,
    type: "video/mp4"
  })), /*#__PURE__*/React__default["default"].createElement("p", null, item?.name), /*#__PURE__*/React__default["default"].createElement("button", {
    className: "delete_btn",
    onClick: () => handleRemove(item)
  }, "Delete"))))));
}

module.exports = Drop;
