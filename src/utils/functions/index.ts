import { AUTH_TOKEN_KEY } from "@/constants";
import Cookie from "js-cookie";

export const getToken = async () => {
  return Cookie.get(AUTH_TOKEN_KEY);
};

export const storeToken = async (data: any) => {
  await Cookie.set(AUTH_TOKEN_KEY, data?.token, {
    secure: false,
  });
};
export const clearToken = async () => {
  await Cookie.remove(AUTH_TOKEN_KEY);
};
export const isAuthenticated = async () => {
  const token = await getToken();
  return !!token;
};
export const scrollToSection = (id: string) => {
  const sectionRef = document?.getElementById(id);
  sectionRef.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export const strip_html_tags = (str: string) => {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/<[^>]*>/g, "");
};

export function ensureHttp(url) {
  url = url?.trim();
  if (!url?.startsWith("http://") && !url?.startsWith("https://")) {
    url = "http://" + url;
  }
  return url;
}
export const getNestedValue = (obj, path) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};
export const store1 = { address: "This is my new address1" };
const store2 = { address: "This is my new address2" };
const store3 = { address: "This is my new address3" };
const store4 = { address: "This is my new address4" };

// ======dynamic address ============
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
