import React from 'react'
import { Input, StyleDiv, Header } from './Formstyle';

export default function Educationinfo({ formData, setFormData }) {

    return (
        <div>

            <StyleDiv >
                <Header >Education Information</Header>

                <div>
                    <label>Degree</label>

                    <div>
                        <Input type="text" value={formData.degree|| ""} placeholder="Degree" id="deg" onChange={(e) => { setFormData({ ...formData, degree: e.target.value }) }} />
                    </div>
                </div>
                <p></p>
                <div>
                    <label>Major</label>

                    <div>
                        <Input type="text" value={formData.major|| ""} placeholder="Major" id="major" onChange={(e) => { setFormData({ ...formData, major: e.target.value }) }} />
                    </div>
                </div>
                <p></p>
                <div>
                    <label>University name</label>
                    <div>
                        <Input type="text" value={formData.university_name|| ""} placeholder="University Name" id="uni" onChange={(e) => { setFormData({ ...formData, university_name: e.target.value }) }} />
                    </div>
                </div>
                <div></div>

            </StyleDiv>
        </div>
    )
}
