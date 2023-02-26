export default function Footer() {
    return (
        <div style={{
            padding: '32px 80px',
            color: '#fff'
        }}>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '679px',
                alignContent: "space-between"
            }}>

                <p style={{
                    fontWeight: '500',
                    fontSize: '14px',
                    lineHeight: '18px'
                }}>Made with ❤️ at nFactorial in 2023.</p>

                <p style={{
                    alignSelf: "flex-end",
                    fontWeight: '500',
                    fontSize: '14px',
                    lineHeight: '18px',
                    opacity: 0.5
                }}>Credits: photos from <a href="https://unsplash.com/@surface">Unsplash.com</a>, icons from <a href="https://icons8.com/">Icons8</a>.</p>

            </div>

        </div>
    )
}