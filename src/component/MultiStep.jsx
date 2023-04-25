import React, { useState } from 'react'
import MainPage from './MainPage'
import Maritalinfo from './Maritalinfo'
import Personalinfo from './Personalinfo'
import Address from './Address'
import Educationinfo from './Educationinfo'
import Firm from './Firm'
import Qualification from './Qualification';
import PersonalinfoV1 from './PersonalinfoV1';
import PersonalinfoV2 from './PersonalinfoV2'
import  {  titleError ,typeError , genderError , nationalityError , AddressError , FirmError, QualificationError,errorE ,errorP ,errorP1 ,errorP2 ,errorAddress, errorFirm ,errorQualification} from './error'

import { ButtonBack, ButtonNext, DivButtons, TopContainer, WrapperDiv, ButtonSubmit } from './Formstyle'
import Pageapplication from './Pageapplication'
import { CreateApplication } from '../apiCalls/application.js'

export default function MultiStep(checkboxData,setCheckedData) {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        qualification_id :[]
    })
    const title = [<MainPage />, <Personalinfo />, <PersonalinfoV1 />, <PersonalinfoV2 />, <Address />, <Educationinfo />, <Maritalinfo />, <Firm />, <Qualification /> ,<Pageapplication />  ];
    const [error, setError] = useState({
        
    });
    
    const next = () => {
        if(page === 0 && typeError(formData)){
            setPage(currpage => currpage+1)
        }else if(page ===0 &&!typeError(formData)){
            setPage(currpage => currpage)
            setError(errorE(formData))   
         }
        else if(page===1 && titleError(formData)){
            setPage(currpage => currpage+1)
        }else if(page===1 && !titleError(formData)){
            setPage(currpage => currpage)
            setError(errorP(formData))
        } 
        else if(page===2 && genderError(formData)){
            setPage(currpage => currpage+1)
        }else if(page===2 && !genderError(formData)){
            setPage(currpage => currpage)
            setError(errorP1(formData))
            
        } 
        else if(page===3 && nationalityError(formData)){
            setPage(currpage => currpage+1)
        }else if(page===3 && !nationalityError(formData)){
            setPage(currpage => currpage)
            setError(errorP2(formData))
        }
        else if(page===4 && AddressError(formData)){
            setPage(currpage => currpage+1)
        }else if(page===4 && !AddressError(formData)){
            setPage(currpage => currpage)
            setError(errorAddress(formData))
            
        }
        else if(page===7 && FirmError(formData)){
            setPage(currpage => currpage+1)
        }else if(page===7 && !FirmError(formData)){
            setPage(currpage => currpage)
            setError(errorFirm(formData))
        }
        else{
            setPage(currpage=>currpage+1)
        }
        
      }
    const pageDisplay = () => {
        if (page === 0) {
            return <MainPage formData={formData} setFormData={setFormData} error={error} setError={setError} setPage={setPage} page={page} />
        }
        else if (page === 1) {
            return <Personalinfo formData={formData} setFormData={setFormData} error={error} setError={setError} />
        }
        else if (page === 2) {
            return <PersonalinfoV1 formData={formData} setFormData={setFormData} error={error} setError={setError} />
        }
        else if (page === 3) {
            return <PersonalinfoV2 formData={formData} setFormData={setFormData} error={error} setError={setError} />
        }
        else if (page === 4) {
            return <Address formData={formData} setFormData={setFormData} error={error} setError={setError}/>;
        }
        else if (page === 5) {
            return <Educationinfo formData={formData} setFormData={setFormData} error={error} setError={setError} />;
        }
        else if (page === 6) {
            return <Maritalinfo formData={formData} setFormData={setFormData} error={error} setError={setError} />;
        }
        else if (page === 7) {
            return <Firm formData={formData} setFormData={setFormData} error={error} setError={setError} />
        }
        else if (page === 8) {
            return <Qualification formData={formData} setFormData={setFormData} error={error} setError={setError}/>
        }else {
            return <Pageapplication />
        }
    }
    const submit = async (e)=>{
        // e.preventDefault();
        if(page === 8 && QualificationError(formData)){
            try {
                console.log(formData)  ;
                const response = await CreateApplication({
  type: formData.type,
  title: formData.title,
  first_name: formData.first_name,
  last_name: formData.last_name,
  father_name: formData.father_name,
  mother_name: formData.mother_name,
  mother_last_name: formData.mother_last_name,
  gender: formData.gender,
  dob: formData.dob,
  pod: formData.pod,
  nationality: formData.nationality,
  telephone: formData.telephone,
  email: formData.email,
  district: formData.district,
  city: formData.city,
  street: formData.street,
  building: formData.building,
  po_box: formData.po_box,
  marital_status: formData.marital_status,
  spouse_name: formData.spouse_name,
  spouse_last_name: formData.spouse_last_name,
  degree: formData.degree,
  major: formData.major,
  university_name: formData.university_name,
  firm_id: formData.firm_id,
  firm_address: formData.firm_address,
  position_held: formData.position_held,
  office_phone: formData.office_phone,
  office_fax: formData.office_fax,
  qualification_id: formData.qualification_id,
  hasSpecialNeeds: formData.hasSpecialNeeds,
  register_number: formData.register_number,
  register_place: formData.register_place,
  special_needs: formData.special_needs,
                });
                console.log(response);
                setPage(currpage => currpage+1)
                
            } catch (error) {
              console.log(error);
            }
            
        }else if(page === 8 && !QualificationError(formData)){
            
            setError(errorQualification(formData))
            
        }
         
          
    }

    return (

        <>
            <TopContainer >
                <WrapperDiv >
                    <div>{pageDisplay()}</div>
                    <DivButtons >
                        {page === 0 || page === 9 ? <></> : <><ButtonBack type='button' onClick={(e) => {
                            e.preventDefault();
                            setPage((currpage) => currpage - 1)
                        }}>Back</ButtonBack></>}
                        {page === 9 ?<></>:<>{page < title.length - 2
                            ? <><ButtonNext type='button' onClick={(e) => {
                               e.preventDefault();
                               next();
                           }}
                           >Next</ButtonNext></>:<> <ButtonSubmit type='button' onClick={(e) => {
                               e.preventDefault();
                               submit()
                           }
                       }
                           >submit</ButtonSubmit></>}</>}                     
                    </DivButtons>
                     
                </WrapperDiv>
            </TopContainer>



        </>

    )
}
