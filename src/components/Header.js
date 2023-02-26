export default function Header() {
    return (
        <div id="header">
            <div style={{
            display:"flex", 
            justifyContent:"space-between",
            alignItems: "center",
            
            gap: '1019px'
            }}>

                <p style={{
                    height: '36px',
                    fontWeight: 700,
                    fontSize: '32px',
                    color: '#fff'
                }}>Arsen Baiseupov</p>

                <div style={{
                    display:"flex", 
                    justifyContent:"space-between",
                    gap: '32px'
                    }}>
                    <a className="headerButton" href="#about">About</a>
                    <a className="headerButton" href="#experience">Experience</a>
                    <a className="headerButton" href="#projects">Projects</a>
                    <a className="headerButton" href="#contacts">Contacts</a>
                </div>
            </div>
        </div>
    )
}