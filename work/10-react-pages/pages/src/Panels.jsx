import './Panels.css';
import Panel_Right_img from './Panel_Right_img.jsx';
import Panel_Left_img from './Panel_Left_img.jsx';
function Panels() {
    return (
        <div className="panels">
            <Panel_Right_img />
            <Panel_Left_img />
        </div>
    );
}

export default Panels;