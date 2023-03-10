import React from 'react'
import { useParams } from 'react-router-dom';

export const FeedBack = () => {

    const id = useParams().id;

  return (
    <div>FeedBack

        <h1>{id}</h1>
    </div>

  )
}
