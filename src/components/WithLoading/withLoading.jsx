import React from "react";

// HOC to add loading functionality
const withLoading = () => {
    return({isLoading,...props})=>{
        if(isLoading){
            return <div>Loading...</div>
        }
        return <WrappedComponent {...props}/>;
    }
};

export default withLoading;
