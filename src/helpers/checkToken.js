export default function checkToken(){
    if(localStorage.getItem('bearerToken') && localStorage.getItem('bearerToken') != '' ){
        return true
    }
    
    return false
}