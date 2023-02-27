import linkedInLogo from "./imgs/blue_white_linkedin_logo.png";
import whatsAppLogo from "./imgs/WhatsAppButtonGreenLarge.png";

export default function Contact() {
    return (
        <div id="contacts" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '160px 80px'
        }}>

            <p className="font60px">Say Hello</p>

            <p className="font20px" style={{
                marginTop: '32px',
                marginBottom: '40px'
            }}>I’m software developer and this is my portfolio.</p>

            <div id="group-of-buttons-at-contacts" style={{display: 'flex', alignItems: "center"}}>

                <button className="orangeBtn">
                    <a className="spanInsideOrangeBtn" href="mailto:arsen.baiseupov@gmail.com" style={{textDecoration: "none"}}>
                        Get In Touch via Email
                    </a>
                </button>

                <p className="font20px" style={{margin: '0px 15px 0px 15px'}}> or </p>

                <a href="https://www.linkedin.com/in/arsenbaiseupov/" target={'_blank'}>
                    <img src={linkedInLogo} style={{width: '46px'}}></img>
                </a>

                <p className="font20px" style={{margin: '0px 15px 0px 15px'}}> or </p>

                <a href=" https://wa.me/77013122996" target={'_blank'}>
                    <img src={whatsAppLogo} style={{height: '56px'}}></img>
                </a>

            </div>



            

        </div>
    )
}