import { useParams } from 'react-router-dom';
function Parameter () {

    const { id } = useParams();
    return(
        <>
        <p>the id Name is :{id}</p>
        </>
    )
}
export default Parameter;