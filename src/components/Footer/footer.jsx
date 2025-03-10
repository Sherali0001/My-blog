import './footer.css'

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <div className="btn-wrapper">
                    <button className='main-btn'>Previous</button>
                    <button className='main-btn'>Next</button>
                </div>
                <p className='link'>Powered by <a href="w3schoole.com">w3.css</a></p>
            </div>
        </>
    )
}