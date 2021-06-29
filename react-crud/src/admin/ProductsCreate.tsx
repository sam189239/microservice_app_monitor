import React, { SyntheticEvent, useEffect } from 'react';
import Wrapper from "./Wrapper"
import {Product} from "../interfaces/product"
import {Redirect} from 'react-router-dom';
const ProductsCreate = () => {
    const [title, setTitle] = React.useState('');
    const [image, setImage] = React.useState('');
    const [redirect, setRedirect] = React.useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(title,image);
        await fetch("http://localhost:8000/api/products",{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                title,
                image
            })
        })

        setRedirect(true);
    }
    if(redirect){
        return <Redirect to={'/admin/products'}/>
    }
    return(
        <Wrapper>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" name="title" 
                        onChange={e =>setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input type="text" className="form-control" name="image" 
                        onChange={e =>setImage(e.target.value)}
                    />
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    );
};

export default ProductsCreate;