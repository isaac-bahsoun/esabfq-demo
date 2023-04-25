import React, { useEffect, useState } from 'react'
import { getAllQualifications } from '../apiCalls/qualification.js';
import { Header, StyleDiv ,Label ,Header2} from './Formstyle';
import LoadingScreen from './Loading.jsx';
export default function Qualification({ formData, setFormData ,error}) {
  // const Qualifications = [
  //   {
  //     id: "1",
  //     name: "Global Securities",
  //     offered_by: "CISI"
  //   },
  //   {
  //     id: "2",
  //     name: "Lebanese Regulation",
  //     offered_by: "CISI"
  //   },
  //   {
  //     id: "3",
  //     name: "Introduction to International Investment",
  //     offered_by: "CISI"
  //   },
  //   {
  //     id: "4",
  //     name: "Risk In Financial Services",
  //     offered_by: "CISI"
  //   },
  //   {
  //     id: "5",
  //     name: "Investment & Risk",
  //     offered_by: "CISI"
  //   },
  //   {
  //     id: "6",
  //     name: "Financial Derivatives",
  //     offered_by: "CISI"
  //   },
  //   {
  //     id: "7",
  //     name: "Certified Anti-Money Laundering Specialist",
  //     offered_by: "CISI"
  //   },

  // ]
  const [Qualifications, setQualifications] = useState([]);
  const [loading, isLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllQualifications();
        setQualifications(data);
        isLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
 
  const onChange =(e)=>{
      
      let copy = {...formData}
      if(e.target.checked){
        copy.qualification_id.push(parseInt(e.target.value))
      }else{
        copy.qualification_id= copy.qualification_id.filter(el=>el !== parseInt(e.target.value))
      }
      setFormData(copy)
      console.log( formData.qualification_id);
  }

  return (
    <div>

      <StyleDiv>
        <Header >qualifications</Header>
        
        <>
        <Header2>Examination<Label>*</Label></Header2>
        {loading ? <LoadingScreen/> : 
        <>
          {Qualifications.length > 0 ? Qualifications.map((item, index) => (
            
            <div key={index}> 
              <label >
                <input value={item.qualification_id} id={item.qualification_id} type="checkbox" name="qual" onChange={onChange}  checked={formData.qualification_id.includes(parseInt(item.qualification_id))}  />{item.name}
              </label>  
              </div>)) : <div>NO Qualification show</div>}
        </>
        // checked={formData.qualification_id.includes(item.qualification_id)} 
        }
          
        </>
      </StyleDiv>
      {error.qualification_id ? <><Label>This page is required Choose one or more Examination!</Label></> : <><p></p></>}

    </div>
  )
}
