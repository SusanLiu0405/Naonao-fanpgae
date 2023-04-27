import { CgFacebook } from 'react-icons/cg';
import { CgInstagram } from 'react-icons/cg';
import {TbBrandWeibo} from 'react-icons/tb';
import {TbBrandBilibili} from "react-icons/tb";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faWeibo } from '@fortawesome/free-brands-svg-icons';
import { faBilibili } from '@fortawesome/free-brands-svg-icons';


const footerlist = [
    {
        name: "Instagram",
        path: "https://www.instagram.com",
        icon: <FontAwesomeIcon icon={faInstagram} style={{color: "#fffffb",}} />,
    },
    {
        name: "Facebook",
        path: "https://www.facebook.com/susanliu01000101/",
        icon: <FontAwesomeIcon icon={faFacebookF} style={{color: "#fffffb",}} />,
    },
    
    {
        name: "Weibo",
        path: "https://weibo.com/AffectionateSilence",
        icon: <FontAwesomeIcon icon={faWeibo} style={{color: "#fffffb",}} />,
    },
    {
        name: "Bilibili",
        path: "https://space.bilibili.com/5819125?spm_id_from=333.1007.0.0",
        icon: <FontAwesomeIcon icon={faBilibili} style={{color: "#fffffb",}} />,
    }
]
export default footerlist;