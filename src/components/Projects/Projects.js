import RenderOneProject from "./RenderOneProject";

export default function Projects() {
    return (
        <div id="projects" style={{
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'flex-start'
        }}>

            <div className="font60px" style={{
                padding: '160px 80px 64px'
            }}>
                Projects I’ve Worked On
            </div>

            <RenderOneProject />

        </div>
    )
}