import React, { useRef, useState } from "react";

export default function InputSample() {
  const inputRef = useRef(null);
  const [inputs, setInputs] = useState({
    name: "name",
    password: "password",
  });
  const { name, password } = inputs;

  const onChangeValue = (e) => {
    const target = e.currentTarget;
    const key = target.dataset.key;
    const value = target.value;

    console.log(key, value);

    setInputs({
      ...inputs,
      [key]: value,
    });
  };

  const reset = () => {
    setInputs({
      name: "",
      password: "",
    });
    inputRef.current.focus();
  };

  return (
    <div>
      <button onClick={reset}>초기화</button>
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={onChangeValue}
        data-key="name"
      />
      <input
        type="text"
        value={password}
        onChange={onChangeValue}
        data-key="password"
      />
      <p>
        {name} : {password}
      </p>
    </div>
  );
}
