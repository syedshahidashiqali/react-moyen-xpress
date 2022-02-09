export const getApi = async (url) => {
  // var formdata = new FormData();

  var requestOptions = {
    method: "GET",
    // body: formdata,
    redirect: "follow",
    "Access-Control-Allow-Origin": "*",
  };

  return await fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};
export const postApi = async (url, body, headerType) => {
  var myHeaders = new Headers();
  headerType === true
    ? myHeaders.append("Content-Type", "multipart/form-data")
    : myHeaders.append("Content-Type", "application/json");
  return fetch(url, {
    //   return fetch('http://localhost:5000/api/v1/auth/register', {
    method: "POST",
    body: body,
    headers: myHeaders,
    redirect: "follow",
  })
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      return err;
    });
};
