import { useState, useId } from 'react';
function Home() {
    const [name, setName] = useState('');
    const [isNameInValid, setIsNameInvalid] = useState(false);
    const id = useId();
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                setIsNameInvalid = name.match(/-/);
            }}>
                <label htmlFor={`${id}-name`}>Name</label>
                {isNameInValid && <p>Do not use dashes in your name!</p>}
                <input
                    id={`${id}-name`}
                    value={name} onInput={(e) => {
                        setName(e.target.value);
                    }} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Home;