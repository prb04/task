import React, { useState } from 'react'
import './home.css'
import {Modal, Card, Form, Button, CardDeck} from 'react-bootstrap'
import {connect} from 'react-redux'
import { addReview } from '../redux/ActionCreators'

const mapStateToProps = state => {
    return {
      reviews: state.reviews,
    }
  }

const mapDispatchToProps = dispatch => ({
    addReview: (id,author,review) => dispatch(addReview(id,author,review))
})

function Home(props) { 

    function RenderReview({review,addReview,id}) {
        let reviews = review.map(rev => {
            return(
                <CardDeck style={{display: 'flex', width:'20rem', justifyContent:'center', flexDirection: 'row'}}>
                    <Card className='' style={{flex: 1}} text='dark' border='secondary'>
                        <Card.Img className='img' variant="top" width='10' height='10' src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-512.png" />
                        <Card.Body>
                            <Card.Title>{rev.author}</Card.Title>
                            <Card.Text>
                                {rev.review}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
                )
        })

        return (
            <div className='container1'>
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                    {reviews}
                    <ReviewForm id={id} addReview={addReview}/>
                    </div>
                </div>
                
            </div>
        )

    } 

    return (
            
            <div className="col-12 col-md-5 m-1">
                <RenderReview 
                    review={props.reviews}
                    addReview={props.addReview}
                    id={props.reviews.id}
                />
            </div>
        
    )
}

function ReviewForm(props){

    const[isModalOpen,setisModalOpen] = useState(false);

    const toggleModal = () => {
        setisModalOpen(!isModalOpen);
    }

    const handleSubmit = (values) => {
        props.addReview(props.id,values.author,values.review);
        toggleModal();
    }

    return(
        <div className='button'>
                    
                        <Button variant="dark" onClick={toggleModal}>
                            Submit Review
                        </Button>

                        <Modal show={isModalOpen} toggle={toggleModal}>
                            <Modal.Header closeButton  onClick={toggleModal}>
                            <Modal.Title>Review</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={(values) => handleSubmit(values)}>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="name" name='name' placeholder="Full Name" 
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Your Review</Form.Label>
                                        <Form.Control as="textarea" rows={4} name='review'/>
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={toggleModal}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleSubmit}>
                                Save Changes
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
