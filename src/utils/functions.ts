export const store1 = { address: "This is my new address1" };
const store2 = { address: "This is my new address2" };
const store3 = { address: "This is my new address3" };
const store4 = { address: "This is my new address4" };

export const getStore = () => {
  const currentData = localStorage.getItem("store");
  let storeData: { address: string } = null;
  if (currentData === "store1") {
    storeData = store1;
  } else if (currentData === "store2") {
    storeData = store2;
  } else if (currentData === "store3") {
    storeData = store3;
  } else if (currentData === "store4") {
    storeData = store4;
  }
  if (!storeData) {
    updateAddress("store1");
  }
  return storeData ?? store1;
};
export const getStoreKey = () => {
  return localStorage.getItem("store");
};

export const updateAddress = (name: string) => {
  localStorage.setItem("store", name);
};
