import RenderOneProject from "./RenderOneProject";

export default function Projects() {
    return (
        <>
        <span id="target-projects" style={{display: 'block', height: '60px'}}></span>
        <div id="projects" style={{
            display: 'flex',
            flexDirection: 'column',

        }}>

            <div id="projects-container" style={{
                padding: '160px 80px 64px',

            }}>
                <p id="projects-sec-title" className="font60px">Projects I’ve Worked On</p>
            </div>

            <RenderOneProject />

        </div>
        </>
    )
}