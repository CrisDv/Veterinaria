import axios from 'axios';

const SERVER_URL = "AQUI VA LA IP DEL SERVIDOR";

const Login = async (data) => {
    const LOGIN_ENDPOINT = `${SERVER_URL}/api/login.php`;//el archivo a donde va a enviar los datos

    try {

        let response = await axios.post(LOGIN_ENDPOINT, data);

        if(response.status === 200 && response.data.jwt && response.data.expireAt){
            let jwt = response.data.jwt;
            let expire_at = response.data.expireAt;

            localStorage.setItem("access_token", jwt);
            localStorage.setItem("expire_at", expire_at);

        }


    } catch(e){
        console.log(e);
    }
}

const REGISTRAR = async (data) => {
    const SIGNUP_ENDPOINT = `${SERVER_URL}/api/register.php`;
    try {
        await axios({
            method: 'post',
            responseType: 'json',
            url: SIGNUP_ENDPOINT,
            data: data
          });
    } catch(e){
        console.log(e);
    }
}

export { Login, REGISTRAR} 