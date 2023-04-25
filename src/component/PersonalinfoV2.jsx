import React from 'react'
import { Header, Input, InputN, StyleDiv, TitleD, Label } from './Formstyle';


export default function PersonalinfoV2({ formData, setFormData, error }) {
    return (
        <div>
            <StyleDiv>
                <Header >Personal Information</Header>

                <label>Nationality<Label>*</Label></label>

                <div>
                    <Input type="text" placeholder="Nationality" id="nationality" value={formData.nationality || ""} onChange={(e) => { setFormData({ ...formData, nationality: e.target.value })} } />
                    {error.nationality ? <><Label>Nationality is required And can't contains number </Label></> : <><p></p></>}
                </div>

                <label>Passport Number</label>

                <div>
                    <InputN type="number" placeholder="Passport Number" id="number" value={formData.register_number || ""} onChange={(e) => { setFormData({ ...formData, register_number: e.target.value }) }} />

                </div>
                <p></p>

                <label>Register's place</label>

                <div>
                    <Input type="text" placeholder="Register's place" id="register" value={formData.register_place || ""} onChange={(e) => { setFormData({ ...formData, register_place: e.target.value }) }} />

                </div>
                <p></p>
                <label>Has special need?<Label>*</Label></label>
                <TitleD>

                    <>
                        <div>
                            <input type="radio" placeholder="" id="1" name='need' value={1} onChange={(e) => { setFormData({ ...formData, hasSpecialNeeds: parseInt(e.target.id) }) }} checked={formData.hasSpecialNeeds ===1}/>YES

                        </div>
                        <div>
                            <input type="radio" placeholder="" id="0" name='need' value={0} onChange={(e) => { setFormData({ ...formData, hasSpecialNeeds: parseInt(e.target.id) }) }} checked={formData.hasSpecialNeeds ===0}/>No

                        </div>
                        <div>
                        </div>
                    </>

                </TitleD>
                {error.hasSpecialNeeds ? <><Label>This Field is required </Label></> : <><p></p></>}


                <label>special need</label>

                <div>
                    <Input type="text" placeholder="special need" id="needed" value={formData.special_needs || ""} onChange={(e) => { setFormData({ ...formData, special_needs: e.target.value }) }} />

                </div>



            </StyleDiv>

        </div>
    )
}
