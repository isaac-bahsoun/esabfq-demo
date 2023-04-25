import React from 'react'
import { Ddropdown, Input, StyleDiv, Header } from './Formstyle';

export default function Maritalinfo({ formData, setFormData }) {

    return (
        <div>
            <StyleDiv >
                <Header>Marital Information</Header>
               
                    <div>
                        <label>MaritalStatus</label>
                        <Ddropdown value={formData.marital_status} onChange={(e) => { setFormData({ ...formData, marital_status: e.target.value }) }}>
                            <option value=""></option>
                            <option value='single'>single</option>
                            <option value='married'>married</option>
                            <option value='divorced'>divorced</option>
                            <option value='separated'>separated</option>
                            <option value='widowed'>widowed</option>
                        </Ddropdown>

                    </div>
                        <p></p>
                        <label>SpouseName</label>

                        <div>
                            <Input type="text" placeholder="Spouse Name" id="Spouse_Name" value={formData.spouse_name|| ""} onChange={(e) => { setFormData({ ...formData, spouse_name: e.target.value }) }} />

                        </div>
                          <p></p>
                        <label>Spouse Last Name</label>

                        <div>
                            <Input type="text" placeholder="SpouseLast Name" id="SpouseLast_Name" value={formData.spouse_last_name|| ""} onChange={(e) => { setFormData({ ...formData, spouse_last_name: e.target.value }) }} />

                        </div>
                        <div></div>
                        <div></div>

                  
            </StyleDiv>
        </div>
    )
}
