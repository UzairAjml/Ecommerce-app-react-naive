import axios from 'axios'

export const OrderAPI= async (order) => {
    try{
        const {data}=await axios({
            method:'POST',
            url:'https://mern-fyp-backend.herokuapp.com/api/orders',
            data:JSON.stringify({
                order
            }),
            headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
            
        });
        return data;   
    }
    catch(error){
        return null 
    }
    

}