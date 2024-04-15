function response(status,massege,data= null)
{
    return{
    status,
    message,
    data,
    timestamp: new Date().getTime()
    }
}
module.exports ={
    response
}