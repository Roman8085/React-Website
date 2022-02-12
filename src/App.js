// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Nav, Navbar, Form, FormControl, NavDropdown, Container, Button} from 'react-bootstrap';
import Image1 from './images/logo.jpg';

function App() {
  return (
    <BrowserRouter>
    <div className="" >
      <Navbar  variant="light" expand="lg" fixed="top" style={{backgroundColor:"#C1C1C1"}} >
      <Container fluid >
      
    
    
      <Link to="/">
    <img src={Image1} alt="" style={{ marginLeft:"30px", minHeight:"20px", width: "30px",backgroundPosition: "center", backgroundSize: "cover",position: ""}} />
  </Link>  
      <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/home" style={{margin: "5px 20px 0px 100px", color:"black", fontFamily:"times and roman",textDecoration:"none"}}>Home</Link>
            <Link to="/about" style={{margin: "5px 20px 0px 20px", color:"black", fontFamily:"times and roman",textDecoration:"none"}}>About</Link>
            
            <Link to="/login" style={{margin: "5px 20px 0px 20px", color:"black", fontFamily:"times and roman",textDecoration:"none"}}>
            Login
          </Link>
            <Link to="/contact" style={{margin: "5px 20px 0px 20px", color:"black", fontFamily:"times and roman",textDecoration:"none"}}>
              Contact
            </Link>
            <NavDropdown title="Glance" id="navbarScrollingDropdown" style={{fontFamily:"times and roman",margin: "-3px 20px 0px 20px"}}>
              <NavDropdown.Item to="/visit" >Visit</NavDropdown.Item>
              <NavDropdown.Item to="/offers" >Offers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="/more" style={{backgroundColor:"yellow"}}>
                See the list
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary" style={{fontFamily:"times and roman",margin: "5px 100px 0px 10px"}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
    
    <Route path="/" element = {<Home />}></Route>
    <Route path="/home" element = {<Home />}></Route>
      <Route path="/about" element = {<About />}></Route>
      <Route path="/contact" element = {<Contact />}></Route>
      <Route path="/login" element = {<Login />}></Route>
    </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
