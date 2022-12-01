export default async function login(body) {
  var formdata = new FormData();
  formdata.append("email", body.email);
  formdata.append("password", body.password);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  let response = await fetch(
    "https://test-api.storexweb.com/api/login",
    requestOptions
  )
    .then((response) => {
      return response.json();
    })

    .catch((error) => "error");

  return response;
}

export async function signup(body) {
  console.log(body);
  var formdata = new FormData();
  formdata.append("name", body.name);
  formdata.append("email", body.email);
  formdata.append("password", body.password);
  console.log(body);
  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  let response = await fetch(
    "https://test-api.storexweb.com/api/register",
    requestOptions
  )
    .then((response) => {
      return response.json();
    })

    .catch((error) => "error");

  return response;
}
