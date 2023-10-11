export default function Expressions(){
    const subtext = 'This is my subtext';
    const reactLogoURL = 'https://miro.medium.com/v2/resize:fit:960/1*h7GMfvHKvLPkynG9NvULJw.gif';
    
    const duplicate = (value: number) => value * 2;

    return (
        <>
            <h1>Expressions example</h1>
            <h2>{subtext.toUpperCase()}</h2>
            <h3>The double of 3 is equal to {duplicate(3)}</h3>
            <img src={reactLogoURL} alt="react logo" />
        </>
    )
}