import React from 'react';
import { Ddropdown, Input, StyleDiv, Header , Label } from './Formstyle';

export default function Address({ formData, setFormData , error }) {

  return (
    <>
      <StyleDiv >
        <Header>Address Information</Header>

        
            <label>District<Label>*</Label></label>
            <Ddropdown value={formData.district} onChange={(e) => { setFormData({ ...formData, district: e.target.value }) }}>
              <option value=''></option>
              <option value='Akkar'>Akkar</option>
              <option value='Aley' > Aley</option>
              <option value='Baabda' >Baabda</option>
              <option value='Baalbek' > Baalbek </option>
              <option value='Batroun' >Batroun</option>
              <option value='Beirut' >Beirut</option>
              <option value='Bint_Jbeil'>Bint_Jbeil</option>
              <option value='Bshari'> Bshari</option>
              <option value='Byblos'>Byblos</option>
              <option value='Chouf'>Chouf</option>
              <option value='Hasbaya'>Hasbaya</option>
              <option value='Jezzine'> Jezzine</option>
              <option value='Keserwan'>Keserwan</option>
              <option value='Koura' >Koura</option>
              <option value='Marjeyoun'>Marjeyoun</option>
              <option value='Matn'>Matn</option>
              <option value='Miniyeh'>Miniyeh</option>
              <option value='Nabatieh'>Nabatieh</option>
              <option value='Rashaya'>Rashaya</option>
              <option value='Sidon'>Sidon</option>
              <option value='Tripoli'>Tripoli</option>
              <option value='Tyre'>Tyre</option>
              <option value='Western_Beqaa' >Western_Beqaa</option>
              <option value='Zahle' >Zahle</option>
              <option value='Zgharta' >Zgharta</option>
             
            </Ddropdown> {error.district ? <><Label>District is required</Label></> : <><p></p></>}
           

              <label>City<Label>*</Label></label>

            <div>
              <Input type="text" placeholder="City" id="city" value={formData.city || ""} onChange={(e) => { setFormData({ ...formData, city: e.target.value }) }} />
              {error.city ? <><Label>city is required And can't contains number </Label></> : <><p></p></>}
            </div>
           
            <label>Street<Label>*</Label></label>

            <div>
              <Input type="text" value={formData.street|| ""} placeholder="Street" id="street" onChange={(e) => { setFormData({ ...formData, street: e.target.value }) }} />
              {error.street ? <><Label>Street is required</Label></> : <><p></p></>}
            </div>
                 
         
            <label>Building<Label>*</Label></label>

            <div>
              <Input type="text" value={formData.building || ""} placeholder="Building" id="bld" onChange={(e) => { setFormData({ ...formData, building: e.target.value }) }} />
              {error.building ? <><Label>building is required</Label></> : <><p></p></>}
            </div>
            <label>Po-box</label>
            <div>
              <Input type="text" value={formData.po_box|| ""} placeholder="Po-box" id="poBox" onChange={(e) => { setFormData({ ...formData, po_box: e.target.value }) }} />

            </div>

            <div></div>
      </StyleDiv>


    </>
  )
}
