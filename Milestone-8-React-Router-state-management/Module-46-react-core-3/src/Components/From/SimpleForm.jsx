import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log("from submitted");
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }

    return (
        <div>


            <form onSubmit={handleSubmit} action="">
                <input type="text" placeholder="your name" name='name'/> <br />
                <input type="email" name="email" placeholder='your mail' id="" /> <br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default SimpleForm;