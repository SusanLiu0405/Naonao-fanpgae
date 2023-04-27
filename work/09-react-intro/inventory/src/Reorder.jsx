import "./Reorder.css";
function Reorder({ onReorder }) {
    return (
        <button className="button-reorder" onClick={onReorder} >
            Reorder
        </button>
    );
}

export default Reorder;