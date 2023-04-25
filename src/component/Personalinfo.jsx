import React from 'react';
import { Ddropdown, Header, Input, Label, SetMother, SplitData, StyleDiv } from './Formstyle';
export default function Personalinfo({ formData, setFormData, error}) {

    return (


        <StyleDiv>
            <Header >Personal Information</Header>

            <label>Title<Label>*</Label></label>

            
                <Ddropdown value={formData.title} onChange={(e) => { setFormData({ ...formData, title: e.target.value }) }} id="title">

                    <option value=""></option>
                    <option value='Mr.'>Mr.</option>
                    <option value='Miss.'>Miss.</option>
                    <option value='Mrs.'>Mrs.</option>
                </Ddropdown>
                {error.title ? <><Label>Title is required</Label></> : <><p></p></>}

           



            <label>First Name<Label>*</Label></label>
            <>
                <Input type="text" value={formData.first_name || ""} placeholder="First Name" onChange={(e) => { setFormData({ ...formData, first_name: e.target.value }) }} id="firstname" />
                {error.first_name ? <><Label>firstname is required And can't contains number </Label></> : <><p></p></>}
            </>


            <label>Last Name<Label>*</Label></label>
            <div>
                <Input type='text' id="lastname" placeholder='Last Name' value={formData.last_name || ""} onChange={(e) => { setFormData({ ...formData, last_name: e.target.value }) }} required />
                {error.last_name ? <><Label>lastname is required And can't contains number </Label></> : <><p></p></>}
            </div>

            <label>Father's Name<Label>*</Label></label>

            <div>
                <Input type='text' id="fathername" placeholder='Father Name' value={formData.father_name || ""} onChange={(e) => { setFormData({ ...formData, father_name: e.target.value }) }} required />
                {error.father_name ? <><Label>fathername is required And can't contains number </Label></> : <><p></p></>}
            </div>




            <SplitData>
                <SetMother>

                    <label>Mother's Name</label>
                    <Input type='text' id="mn" value={formData.mother_name || ""} placeholder="Mother Name" onChange={(e) => { setFormData({ ...formData, mother_name: e.target.value }) }} />

                </SetMother>

                <p></p>
                <div>
                    <label>Mother Last Name</label>
                    <Input type='text' placeholder='Mother last Name' value={formData.mother_last_name || ""} onChange={(e) => { setFormData({ ...formData, mother_last_name: e.target.value }) }} id="ml" />
                </div>
            </SplitData>

            <p></p>

        </StyleDiv>



    )
}
