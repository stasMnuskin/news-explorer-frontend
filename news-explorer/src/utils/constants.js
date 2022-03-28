import react from "react";

  const [inputs, setInputs] = react.useState({
    email: "",
    password: "",
    name: "",
  });

export function reset() {
  react.useCallback(() => {
    const resetInputs = {};
    setInputs(resetInputs);
  }, [setInputs])
  return inputs;
}

