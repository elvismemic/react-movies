import DisplayGrade from "./DisplayGrade";
import ErrorBoundary from "./ErrorBoundary";

export default function ErrorExample(){

    const grades = [15, 95, 82, -5, 80];
    return (
       <>
            {grades.map((grade, index) => 
            <ErrorBoundary key={index}>            
                <DisplayGrade grade={grade}></DisplayGrade>
            </ErrorBoundary>
            )}
       </>
    )
}