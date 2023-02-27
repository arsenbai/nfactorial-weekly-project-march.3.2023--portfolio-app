import PortfolioAppPic from './imgs/portfolio_app_pic.jpg';



export default function About() {

    return (
        <>
        <span id="target-about" style={{display: 'block', height: '60px'}}></span>
        <div id='about' style={{
            display: 'flex',
            alignContent: "space-between",
            flexDirection: 'row',
            padding: '160px 80px',
            gap: '2rem'
        }}>

            <div id='bio-section-div' style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                margin: 0,
                gap: '40px',
                width: '44vw',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '0px',
                    gap: '32px',
                }}>
                    <p className="font60px">💫 About me</p>
                    <div className="font20px">
                        🔭 I’m currently working as Data analyst<br></br>
                        🙌🏽 I’m looking to collaborate as Java/Python dev based on non-paid internship opportunity<br></br>
                        🌱 I’m currently learning:
                        <ul className='list-stages' style={{marginLeft: '40px'}}>
                            <li className="font16px several-line-li" style={{alignItems: 'center'}}>
                                🌐 Currently: Web intro - JavaScript, ReactJS, Material UI
                            </li>
                            <li className="font16px" style={{alignItems: 'center'}}>
                                🌐 Then: Web Advanced - Node.JS
                            </li>
                        </ul>
                        </div>

                </div>

                <div id='bulletpoint-div' style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    padding: '0px',
                    gap: '20px',
                    marginTop: '2rem'
                }}>

                    <ul className='list-bullets'>

                        <li className="font16px li-wrap" style={{alignItems: 'center'}}><span style={{fontSize: '27px', marginRight: '12px'}}>&#9679;</span>
                            DoB: March 27
                        </li>
                        <li className="font16px li-wrap" style={{alignItems: 'center'}}><span style={{fontSize: '27px', marginRight: '12px'}}>&#9679;</span>
                            {`I'm 31 years old`}
                        </li>

                        <li className="font16px li-wrap" style={{alignItems: 'center'}}>
                            {`${''}`}
                        </li>

                        <li className="font16px li-wrap" style={{alignItems: 'center', fontSize: '20px'}}>
                            {`${'🛠 Stack:'}`}
                        </li>
                        <li className="font16px li-wrap" style={{alignItems: 'center'}}>
                            {`${' - Java ☕ (vanilla)'}`}
                        </li>
                        <li className="font16px li-wrap several-line-li" style={{alignItems: 'center'}}>
                            {`${' - Python 🐍 (Numpy, Pandas, PyGame, OpenCV, pyTelegramBotAPI)'}`}
                        </li>
                        <li className="font16px li-wrap" style={{alignItems: 'center'}}>
                            {`${' - JavaScript (ReactJS, Matrial UI, Bootstrap)'}`}
                        </li>
                        <li className="font16px li-wrap" style={{alignItems: 'center'}}>
                            {`${''}`}
                        </li>

                        <li className="font16px li-wrap" style={{alignItems: 'center', fontSize: '20px'}}>
                            {`${'🛠 Tools:'}`}
                        </li>
                        <li className="font16px li-wrap" style={{alignItems: 'center'}}>
                            {`${' - GitHub'}`}
                        </li>
                        <li className="font16px li-wrap" style={{alignItems: 'center'}}>
                            {`${''}`}
                        </li>

                        <li className="font16px li-wrap" style={{alignItems: 'center'}}>
                            ⚡ Fun fact: I graduated from Art school and earned MBA in accounting and finance
                        </li>

                    </ul>

                </div>


            </div>


            <img id='profilepic' src={PortfolioAppPic} style={{
                height: "calc(35% * 0.765)", 
                width: "35%",
                border: "4px solid #525B56"
                }} alt="Arsen" />

        </div>
        </>
    )
}