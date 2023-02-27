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
                width: '50%'
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
                        width: '100%'
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
                width: '100%',
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
                        width: '100%'
                        }}>
                        
                        <RenderOtherExperience />

                    </div>

                </div>

        </div>
        </>
    )
}