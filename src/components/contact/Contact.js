import './Contact.css';

import Footer from '../footer/Footer'
const Contact = props => {
    return(
        <div>
            
            <div className="box">
                <div className="item auto">Contact </div>
            </div>
            <div className="box1">
                <form className="myForm" action="/contact" method="post">
                    <input className="myInput" type="text" name="name" placeholder="Name" />
                    <input className="myInput" type="email" name="email" placeholder="Email" />
                    <input className="myInput" type="phone" name="phone" placeholder="Phone" />
                    <input className="myInput" type="text" name="desc" placeholder="Type your message here..." />
                    <button className="btn">submit</button>
            </form>
            </div>
<Footer />
        </div>
    )
}

export default Contact;