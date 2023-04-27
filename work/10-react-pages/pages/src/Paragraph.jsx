import './Paragraph.css';
import TextContent_texts from "./TextContent_texts";
function Paragraph({ className }) {
    const list = TextContent_texts.map(item => {
        return (
            <p className={`${className}`} >
                {item.paragraph_text}
            </p>
        );
    });
    return (<div>{list}</div>);
}
export default Paragraph;