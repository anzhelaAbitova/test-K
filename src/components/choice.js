import React, { useState, useEffect } from 'react';
import Button from './btn';
import './style.css'

const Choice = () => {
    const [isChoosing, setIsChoosing] = useState(false)
    const [mainInner, setMainInner] = useState(1)

    const handleMainBtn = () => {
        setIsChoosing(!isChoosing)
    }

    const handleChoosingBtn = (e) => {
        setMainInner(parseInt(e.target.innerText))
        setIsChoosing(!isChoosing)
    }

    useEffect(()=> {
        return () => {
            setMainInner(1)
            setIsChoosing(false)
        }
    }, [])

    return ( 
    <div className='choice' >
        <Button func={handleMainBtn} inner={mainInner}></Button>
        {isChoosing && 
        <div>
            <Button func={handleChoosingBtn} inner={1}></Button>
            <Button func={handleChoosingBtn} inner={2}></Button>
            <Button func={handleChoosingBtn} inner={3}></Button>
        </div>}
    </div> );
}
 
export default Choice;