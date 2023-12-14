import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap'

const MyPets = () => {
  const [petdata, setPetdata] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [selectedPet, setSelectedPet] = useState({
    
    PetName: "",
    PetType: "",
    PetBreed: "",
    PetGender: "",
    PetPrice: "",
    PetAge: "",
  })

  useEffect(() => {
    axios.get('http://localhost:5000/api/AllPet')
      .then((petdata) => {
        console.table(petdata.data);
        setPetdata(petdata.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  const deletePet = (petId) => {
    axios.post('http://localhost:5000/api/deletePet', 
    { 
      pid: petId
    
    })
      .then((result) => {
        alert("Pet Deleted")
        window.location.reload(false)
      })
      .catch((error) => {
        
      })
  }

  const updatePet = () => {
    const updata = {
      pid: selectedPet._id,
      PetPrice: selectedPet.PetPrice,
    };

    axios.post('http://localhost:5000/api/updatePet', updata)
      .then((result) => {
        alert('Pet Updated');
        setIsShow(false);
        window.location.reload(false);
      })
      .catch((err) => {
        alert('Update failed');
      });
  }
  const navi = useNavigate();
  
  return (
    <div>
      <button onClick={()=>navi('/addpet')}>AddPet</button>
      <h1 className='p'>Pets</h1>
      <Container>
        <Row>
          {
          petdata.map((pet) => {
            return(
            <Col lg="4" md="6" sm="12" >
              <Card>
                <Card.Title>{pet.PetName}</Card.Title>
                <Card.Body>
                  <p>{pet.PetType}</p>
                  <p>{pet.PetBreed}</p>
                  <p>{pet.PetGender}</p>
                  <p>{pet.PetPrice}</p>
                  <p>{pet.PetAge}</p>
                  <p>{pet._id}</p>
                </Card.Body>
                <Card.Footer>
                  <Button onClick={() => deletePet(pet._id)}>Delete</Button>
                  <Button className="m-2" onClick={() => {
                    setSelectedPet(pet);
                    setIsShow(true);
                  }}>Update</Button>
                </Card.Footer>
              </Card>
            </Col>
          )
          })}
        </Row>
      </Container>
      <Modal show={isShow} onHide={() => setIsShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control type="text" value={selectedPet.PetName} placeholder="Enter Name" />
            <Form.Control type="text" value={selectedPet.PetType} placeholder="Enter Type" />
            <Form.Control type="text" value={selectedPet.PetBreed} placeholder="Enter Breed" />
            <Form.Control type="text" value={selectedPet.PetGender} placeholder="Enter Gender" />
            <Form.Control type="text" value={selectedPet.PetPrice} placeholder="Enter Price" />
            <Form.Control type="text" value={selectedPet.PetAge} placeholder="Enter Age" />
            <Form.Control
              type="text"
              value={selectedPet.PetName}
              onChange={(e) => setSelectedPet({ ...selectedPet, PetName: e.target.value })}
              placeholder="Enter Name"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => updatePet()}>Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default MyPets
