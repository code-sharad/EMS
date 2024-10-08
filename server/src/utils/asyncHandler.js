
const asyncHandler = (fn) => {

    return async (req, res, next) => { 
        
        
        Promise.resolve(fn(req,res,next))
        .catch((err) => {
            console.log("Error => ", err)
            next(err)
        });
    }
}

export default asyncHandler;

