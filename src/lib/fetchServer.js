export const generalPostCall = async (reqData, url, action) => {

  let method = "POST";

  if (action === "UPDATE") {
    method = "PUT";
  }

  if (action === "DELETE") {
    method = "DELETE";
  }

  const { token, ...restReqData } = reqData;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(url, {
    method,
    body:  JSON.stringify(restReqData),
    headers: {
      token,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    let errorMessage;
    errorMessage = data?.error;

    throw new Error(errorMessage || "Something went wrong");
  }

  return data;
};

export const authServerCall = async (userData, url) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!response.ok) {
    let errorMessage;
    errorMessage = data?.error;

    throw new Error(errorMessage || "Something went wrong");
  }

  const token = response.headers.get("token");

  return { ...data, token };
};

export const generalGetCall = async (url, token) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token,
    },
  });

  const data = await response.json();
  if (!response.ok) {
    let errorMessage;
    errorMessage = data?.error;

    throw new Error(errorMessage || "Something went wrong");
  }

  return data;
};

export const uploadPostCall = async (reqData, url, token) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const { action, reqBodyData } = reqData;

  let method = "POST";

  if (action === "DELETE") {
    method = "DELETE";
  }

  const response = await fetch(url, {
    method: method,
    body: reqBodyData,
    headers: {
      token,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    let errorMessage;
    errorMessage = data?.error;

    throw new Error(errorMessage || "Something went wrong");
  }

  return data;
};
