const Read = () => {
  return JSON.parse(localStorage.getItem("crudData"));
};

const Write = (incomingData) => {
  localStorage.setItem("crudData", JSON.stringify(incomingData));
};

const MyPersistStorage = {
  Read,
  Write,
};
