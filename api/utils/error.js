
export const   createError=(status,message) => {
    const error=new Error();
    error.status;
    error.message=message;
    return error;
};