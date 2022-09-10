 interface User{
    id:number,
    email:string,
    username:string,
    password:string,
    name:{
        firstname:string,
        lastname:string
    },
    address:{
        city:string,
        street:string,
        number:number,
        zipcode:number,
        geolocation:{
            lat:number,
            long:number
        }
    },
}

export default User;