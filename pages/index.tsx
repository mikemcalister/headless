//import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Container';

const Home = () => (
    <>
    <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
    />
    <Container className="p-3">
        <Jumbotron className="jumbotron">
            <h1>Hello, Headless!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus nec diam laoreet sollicitudin. Fusce ullamcorper imperdiet turpis, non accumsan enim egestas in.</p>
            <Button>Welcome to the future</Button>
        </Jumbotron>
    </Container>
    </>
);

export default Home;