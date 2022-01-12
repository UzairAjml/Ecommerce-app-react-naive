import axios from 'axios'

export const RegisterAPI= async (email,password,name) => {
    try{
        const {data}=await axios({
            method:'POST',
            url:'https://mern-fyp-backend.herokuapp.com/api/users',
            data:JSON.stringify({
                name:name,
                email:email,
                password:password
            }),
            headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            }
        });
        localStorage.setItem('token',data.token);
        return data.token;   
    }
    catch(error){
        return null 
    }
    

}


export const LoginAPI= async (email,password) => {
    try{
        const {data}=await axios({
            method:'POST',
            url:'https://mern-fyp-backend.herokuapp.com/api/users/login',
            data:JSON.stringify({
                email:email,
                password:password
            }),
            headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            }
        });
        return data;   
    }
    catch(error){
        return null 
    }
    

}
