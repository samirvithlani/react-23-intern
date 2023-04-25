import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const GetFiles = () => {

    const [files, setfiles] = useState([])
    const [fileFromDb, setfileFromDb] = useState([])
    var [filterdFile, setfilterdFile] = useState([])

    const getFilesFromGdrive = async() =>{

        const getFileFromDb = await axios.get("http://localhost:4000/upload/getFileFromdb")
        console.log("data.....",getFileFromDb.data.files)

        const fileData = await axios.get("http://localhost:4000/upload/getall")
        console.log("file data,,,",fileData.data.files)
        setfiles(fileData.data.files)


        filterdFile = fileData.data.files.filter((f)=>{
            return getFileFromDb.data.files.includes(f.gdriveId)
        })
        console.log("filterd file.....",filterdFile)


    }





    useEffect(() => {
      
        getFilesFromGdrive()
    
      
    }, [])
    
  return (
    <div>
        {/* {
            files.map((f)=>{
                return(
                    <img src={`https://drive.google.com/uc?id=${f.id}`} alt="img"/>
                )
            })
        } */}
        
    </div>
  )
}
