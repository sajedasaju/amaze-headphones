import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container mx-auto grid grid-rows-4'>
            <div className='bg-red-100 mt-8 rounded-2xl shadow-lg  '>
                <h2 className='text-3xl font-bold text-rose-700  my-4 '>What is Context API?</h2>
                <p className='text-xl text-left mb-8 px-8'>To avoid props drilling we use context api.It reduce duplication of code and increase  reusuability of code.Context API allows us to share state acress the entire app or part of it.THat means Context API give us a way to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.IT enables us to exchange unique details and assists in solving prop drilling from all levels of our application</p>
            </div>
            <div className='bg-red-100 mt-8 rounded-2xl shadow-lg  '>
                <h2 className='text-3xl font-bold text-rose-700  my-4 '>What is Semantic Tag?</h2>
                <p className='text-xl text-left mb-8 px-8'>Semantic tag allow us to add meaning of our markup so that search engines, the end user , developers  and web browsers can make sense of it.HTML5 semantic tags define the purpose of the element. By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it. <br />
                    Example:Header,Footer,Nav, Article ,Aside etc. </p>
            </div>

        </div>
    );
};

export default Blogs;