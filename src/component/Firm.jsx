import React, { useState } from 'react'
import { useEffect } from 'react';
import { getAllFirms } from '../apiCalls/firm.js';
import { Ddropdown, Input, StyleDiv, Header ,Label} from './Formstyle';

export default function Firm({ formData, setFormData , error }) {
    // const Firm = [
    //     {
    //         firm_id: "1",
    //         firm_name: "Bank Audi",
    //         firm_abv: "",
            
    //     },
    //     {
    //         firm_id: "2",
    //         firm_name: "Byblos Bank",
    //         firm_abv: "",
    //     },
    //     {
    //         firm_id: "3",
    //         firm_name: "Bank of Beirut",
    //         firm_abv: "",
    //     },
    //     {
    //         firm_id: "4",
    //         firm_name: "Bank of Beirut and Arab Countries",
    //         firm_abv: "",
    //     },

    // ]
    const [Firms,setFirms] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllFirms();
            setFirms(data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

    return (

            <StyleDiv >
                <Header>EMPLOYMENT DETAILS</Header>
                
                        <label>Name Of Firm<Label>*</Label></label>
                        <Ddropdown value={formData.firm_id} onChange={(e) => { setFormData({ ...formData, firm_id:e.target.value })}}>
                            <option value="">Select Firm</option>

                            <>
                            {
                            Firms.length > 0 ? Firms.map((item, index) => (
                                

                                    <option key={index} value={item.firm_id} >{item.firm_name}</option>

                                )) : <option value="">NO Firm</option>
                            }
                                </>


                        </Ddropdown>
                        {error.firm_id ? <><Label>Firm Name is required</Label></> : <><p></p></>}
                    
                        <label>Firm's Branch<Label>*</Label></label>

                        <div>
                            <Input type="text" placeholder="Firm's Branch" id="branch" value={formData.firm_address || ""} onChange={(e) => { setFormData({ ...formData, firm_address: e.target.value }) }} />
                            {error.firm_address ? <><Label>Firm Branch is required And can't contains number </Label></> : <><p></p></>}
                        </div>

                    <p></p>
                        <label>Position Held<Label>*</Label></label>

                        <div>
                            <Input type="text" placeholder="Position Held" id="position" value={formData.position_held|| ""} onChange={(e) => { setFormData({ ...formData, position_held: e.target.value }) }} />
                            {error.position_held ? <><Label>Position is required And can't contains number </Label></> : <><p></p></>}
                        </div>

                        <p></p>
                        <label>Office telephone</label>

                        <div>
                            <Input type="text" placeholder="Office Telephone" id="officePhone" value={formData.office_phone|| ""}  onChange={(e) => { setFormData({ ...formData, office_phone: e.target.value }) }} />

                        </div>

                    <p></p>
                        <label>Office fax</label>

                        <div>
                            <Input type="text" placeholder="Office Fax" id="officeFax" value={formData.office_fax|| ""}  onChange={(e) => { setFormData({ ...formData, office_fax: e.target.value }) }} />

                        </div>
            </StyleDiv>

       
    )
}
