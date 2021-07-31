import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories = ['Samuxai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['Dragon Ball'])

    // const handleAdd = () => {
    //     setCategories( cats => [...cats, "Hola mundo"])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategory={setCategories}/>
            <ol>
                { categories.map((cate) => 
                    <GifGrid 
                        category={ cate }
                        key={ cate } />
                )}
            </ol>
        </>
    )
}