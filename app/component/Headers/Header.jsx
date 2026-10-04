import './Header.css'
import logo from '@/app/Images/logo.jpg'
import Image from 'next/image'

function Header() {
  return (
    <div className="brand-area">
        <div className="brand-container">

            <div className="logo">
                <Image
                    src={logo}
                    alt="Pakistan Gum Industries"
                    width={150}
                    height={100}
                />
            </div>

            <div className="company-name">
                <h1>Pakistan Gum Industries</h1>
                <span>(Pvt.) Ltd.</span>
            </div>

        </div>
    </div>
  )
}

export default Header
