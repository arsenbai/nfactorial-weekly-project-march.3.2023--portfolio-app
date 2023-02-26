export default function Promo() {
    return (
        <>
        <div id='promo'  style={{
            padding: '160px 80px',
            // height: '622px'
        }}>
            <div style={{
            display:"flex", 
            flexDirection: "column",
            alignItems: "flex-start",

            // height: '302px',
            gap: '40px'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '0px',
                    gap: '32px',
                    // height: '206px',
                }}>
                    <p className="font60px">Hi, I’m Arsen, <br></br>I build things for the web.</p>
                    <p className="font20px">I’m software developer and this is my portfolio.</p>
                </div>

                <button className="orangeBtn">
                    <a className="spanInsideOrangeBtn" href="https://drive.google.com/file/d/1rJVgQV3tGT1TeFgKqRoPVUg2-QP9kRCu/view?usp=sharing" target="_blank" style={{textDecoration: 'none'}}>
                        Check out my CV
                    </a>
                </button>

            </div>
        </div>
        </>
    )
}