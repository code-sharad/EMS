
class ApiResponse { 
    
    constructor(statusCode, message, data, anything="null") {

        


        this.status = statusCode;
        this.success = true
        this.message = message;

        this.data = data;
        this.anything = anything;

    
    }
}

export default ApiResponse;