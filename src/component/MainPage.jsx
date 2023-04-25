import React from 'react'
import { MainDiv, StyleDiv, Label, Header } from './Formstyle';

export default function MainPage({ formData, setFormData, error }) {
  return (
    <div>
      <StyleDiv >
        <div><Header >WHAT TYPE OF CLIENTS ARE YOU?<Label>*</Label></Header></div>
        <>
          <MainDiv>
            <div>
              <input type="radio" placeholder="" id="individual" name='need' value="personal" onChange={(e) => { setFormData({ ...formData, type: e.target.value })}} checked={formData.type === 'personal'} /><strong>Individual client:</strong> Individual clients are candidates who register individually for training or exam sessions. These clients are invited to confirm their registration at ESA Executive Education after the payment of all the appropriate training and exam fees.
            </div>
            <p></p>
            <div>
              <input type="radio" placeholder="" id="Corporate" name='need' value="cooperate" onChange={(e) => { setFormData({ ...formData, type: e.target.value }) }} checked={formData.type ==="cooperate"}/><strong>Corporate client:</strong> Corporate clients are institutions, which register their employees for training or exam sessions directly on the BFQ system. The registration procedure of these clients is subject to several flexibilities.
            </div>
          </MainDiv>
        </>
      </StyleDiv>
      {error.type? <><Label>This page is required!please Choose one option</Label></> : <></>}
      
      
    </div>
  )
}
