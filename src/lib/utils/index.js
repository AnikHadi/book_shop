export const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if (data?.books.length) {
    return data;
  } else {
    throw new Error("No data found");
  }
};

export const updateSearchParameters = (key, value) => {
  const newSearchParams = new URLSearchParams(window.location.search);
  if (value === null || value === "") {
    newSearchParams.delete(key);
  } else {
    newSearchParams.set(key, value);
  }
  window.history.replaceState(null, null, `?${newSearchParams.toString()}`);
};

export function paramsJoin(query) {
  const paramsString = Object.entries(Object.fromEntries(query))
    .join("&")
    .split(",")
    .join("=");
  return paramsString;
}
