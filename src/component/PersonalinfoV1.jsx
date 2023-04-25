import React from 'react';
import { Ddropdown, Header, Input, StyleDiv, InputN,Label } from './Formstyle';
export default function PersonalinfoV1({formData, setFormData , error , emailValidate}) {
  return (
    <div>
        <StyleDiv>
                <Header >Personal Information</Header>
               
                    <label>Gender<Label>*</Label></label>
                    <Ddropdown value={formData.gender} onChange={(e) => { setFormData({ ...formData, gender: e.target.value }) }} id="gender">

                        <option value=''></option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>

                    </Ddropdown>
                    {error.gender ? <><Label>gender is required</Label></> : <><p></p></>}
                
                <div>
                    <label>Date of birth<Label>*</Label></label>

                    <div>
                        <Input type="date" id="dob" value={formData.dob|| ""} max="2004-01-01" min="1990-1-1" onChange={(e) => { setFormData({ ...formData, dob: e.target.value })}} />
                        {error.dob ? <><Label>Date of birth is required</Label></> : <><p></p></>}
                    </div>


                </div>
               
                <div>
                    <label>place of birth<Label>*</Label></label>

                    <div>
                        <Input type="text" placeholder="Place Of Birth" id="pob" value={formData.pod || ""} onChange={(e) => { setFormData({ ...formData, pod: e.target.value })}} />
                        {error.pod ? <><Label>place of birth is required And can't contains number </Label></> : <><p></p></>}

                    </div>
                </div>
                
                    <div>
                        <label>Telephone Number<Label>*</Label></label>

                        <div>
                            <InputN type="number" placeholder="00-000-000" id="telephone" value={formData.telephone || ""} onChange={(e) => { setFormData({ ...formData, telephone: e.target.value })}} />
                            {error.telephone ? <><Label>telephone Number is required And take Only numbers</Label></> : <><p></p></>}

                        </div>
                    </div>
                    <div>
                        <label>Email<Label>*</Label></label>
                        <div>
                            <Input type="email" placeholder="Email" id="" value={formData.email || ""} onChange={(e) => { setFormData({ ...formData, email: e.target.value })}} />
                        
                            {error.email?<><Label>Email address is required OR email invalid format</Label></>:<></>}
                            
                           

                        </div>
                    </div>
                  <div></div>
        </StyleDiv>
    </div>
  )
}
