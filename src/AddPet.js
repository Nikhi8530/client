import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddPet = () => {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [petBreed, setPetBreed] = useState(''); 
  const [gender, setGender] = useState('');
  const [petPrice, setPetPrice] = useState('');
  const [petAge, setPetAge] = useState('');

  const petBreeds = ["Labrador", "Beagle", "Other"]

  const submitForm = () => {
    console.log(petName)
    const petdata = {
      PetName: petName,
      PetType: petType,
      PetBreed: petBreed,
      PetGender: gender,
      PetPrice: petPrice,
      PetAge: petAge,
    }

    postData(petdata)
  }

  const postData = (petdata) => {
    axios.post('http://localhost:5000/api/addpet', petdata)
      .then((result) => {
        alert('Pet SAVED');
      })
      .catch((err) => {
        alert('Error');
      })
  }

  return (
    <div className='page'>
      <Form className='form-container'>
        <Form.Group>
          <Form.Label>Pet Name </Form.Label>
          <Form.Control className='input' onChange={(e) => setPetName(e.target.value)} type='text'  />
        </Form.Group>

        <Form.Group>
          <Form.Label>Pet Type</Form.Label>
          <Form.Check type='radio' value='D' onChange={(e) => setGender(e.target.value)} name='type' label='Dog' />
          <Form.Check type='radio' value='C' onChange={(e) => setGender(e.target.value)} name='type' label='Cat' />
        </Form.Group>

        <Form.Group>
          <Form.Label>Pet Breed</Form.Label>
          <Form.Select onChange={(e) => setPetBreed(e.target.value)} value={petBreed} aria-label="Select pet breed">
            <option value="" disabled>Select Breed</option>
            {petBreeds.map((breed, index) => (
              <option key={index} value={breed}>{breed}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Pet Gender</Form.Label>
          <Form.Check type='radio' value='M' onChange={(e) => setGender(e.target.value)} name='gender' label='MALE' />
          <Form.Check type='radio' value='F' onChange={(e) => setGender(e.target.value)} name='gender' label='FEMALE' />
        </Form.Group>

        <Form.Group>
          <Form.Label>pet Price</Form.Label>
          <Form.Control type='text' onChange={(e) => setPetPrice(e.target.value)}  />
        </Form.Group>
        

        <Form.Group>
          <Form.Label>pet Age</Form.Label>
          <Form.Control type='text' onChange={(e) => setPetAge(e.target.value)}  />
        </Form.Group>
        
        <Button onClick={() => submitForm()}>Add</Button>
      </Form>
    </div>
  )
}

export default AddPet
