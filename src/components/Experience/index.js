import RenderComputerScienceExperience from "./RenderComputerScienceExperience";
import RenderOtherExperience from "./RenderOtherExperience";


export default function Experience() {
    return (
        <>
        <div id="experience" style={{
            display: 'flex',
            alignContent: "space-between",
            flexDirection: 'column',
            padding: '160px 80px',
            gap: '120px'
        }}>

            {/* CS experience */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '64px',
                width: '630px'
                }}>

                    <div>
                        <p className="font60px">IT Experience</p>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '0px',
                        gap: '48px',
                        width: '630px'
                        }}>
                        
                        <RenderComputerScienceExperience />

                    </div>

                </div>

            {/* other experience */}

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '64px',
                width: '630px',
                }}>

                    <div>
                        <p className="font60px">Other Experience</p>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '0px',
                        gap: '48px',
                        width: '630px'
                        }}>
                        
                        <RenderOtherExperience />

                    </div>

                </div>

        </div>
        </>
    )
}