// importing assets
import logo from '../../public/CodeCellLogo.png';
// importing stylesheet
import '../css/Footer.css'
// importing icosn
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
    return (
        <>
            <div className='footer-container'>
                <a
                    href='https://www.kjscecodecell.com'
                    target='_blank'
                    >
                <img
                    src={logo}
                    alt="logo"
                    draggable="false"
                    className='logo-image'
                />
                </a> 
                

                <div className='logos'>
                    <a
                        href='https://www.instagram.com/kjsce_codecell/'
                        target='_blank'
                    >
                        <InstagramIcon style={{ color: 'white', }} />
                    </a>
                    <a
                        href='https://twitter.com/kjsce_codecell?lang=en'
                        target='_blank'
                    >
                        <XIcon style={{ color: 'white', }} />
                    </a>
                    <a
                        href='https://www.instagram.com/kjsce_codecell/'
                        target='_blank'
                    >
                        <YouTubeIcon style={{ color: 'white', }} />
                    </a>
                    <a
                        href='https://www.facebook.com/kjscecodecell/'
                        target='_blank'
                    >
                        <FacebookIcon style={{ color: 'white', }} />
                    </a>
                </div>
                <p className='footer-text'>Made with ❤️ by KJSCE CodeCell</p>
            </div>
        </>
    )
}

export default Footer