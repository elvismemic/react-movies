// import './CSSExample.css'; // example: you are not only importing this for this component
import css from './CSSExamples.module.css';

export default function CSSExample(){

    const square = {
        backgroundColor: 'green',
        height: '50px',
        width: '50px',
        marginLeft: '1rem'
    };

    return(
        <>
            <h1 className="red">CSS examples</h1>
            <h2 style={{color: 'blue', fontSize: '25px'}}>Subtext</h2>
            <div style={square}></div>
            <br></br>
            <div style={square}></div>
            <br></br>
            <h2 className={css['primary-color']}>This is a text styled from a module</h2>
            <h2 className="primary-color">This is an example not from module</h2>
        </>
    )
}