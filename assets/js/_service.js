const _AddData = (data) => {
  let allData = MyPersistStorage.Read() || [];
  allData.push(data);
  MyPersistStorage.Write(allData);
};

const _DeleteData = (id) => {
  let allData = MyPersistStorage.Read().filter((item) => item.id != id);
  MyPersistStorage.Write(allData);
};

const _EditData = (id, UpdateData) => {
  let allData = MyPersistStorage.Read().filter((item) => item.id != id);

  allData = [...allData, UpdateData];
  MyPersistStorage.Write(allData);
};
