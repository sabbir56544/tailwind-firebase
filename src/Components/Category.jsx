import React from 'react';
import CategoryData from './CategoryData';

const Category = () => {
    return (
        <>
              <div className="container pb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
            
        {
            CategoryData.map(category => (
                <div className="relative group rounded-sm overflow-hidden" key={category.id} >
                <img src={category.image} className="w-full" />
                <a href="#" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition">
                    {category.name}
                </a>
            </div>
            ))
                
        }
           
            
            
           
            
        </div>
    </div>
        </>
    )
}

export default Category
