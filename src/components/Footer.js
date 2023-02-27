export default function Footer() {
    return (

            <div id="footer-container" style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "space-between",
                padding: '32px 80px',
                color: '#fff'
            }}>

                <div style={{
                    fontWeight: '500',
                    fontSize: '14px',
                    lineHeight: '18px'
                }}>Made with ❤️ at nFactorial in 2023.</div>

                <div style={{
                    alignSelf: "flex-end",
                    fontWeight: '500',
                    fontSize: '14px',
                    lineHeight: '18px',
                    opacity: 0.5
                }}>Credits: photos from <a href="https://unsplash.com/@surface">Unsplash.com</a>, icons from <a href="https://icons8.com/">Icons8</a>.</div>

            </div>

    )
}