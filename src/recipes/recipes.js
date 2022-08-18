import { BsTrashFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import * as S from './recipesStyles';

function Recipe({ name, id }){
    return(
        <div className='recipe'>
            <h1>{name}</h1>
            <IconContext.Provider value={{color: "red", size: "1.25em", style: {marginTop: "5px"}}}>
                <BsTrashFill />
            </IconContext.Provider>
        </div>
        
    )
}

function Recipes(obj){
    return(
        <S.recipe>
            {obj.map(element => {
                return <Recipe name={element.name} id={element.id}/>
            })}
        </S.recipe>
    )
}


export default function AllRecipes(){
    return(
        <S.content>
            <header>asdasdada</header>
            <Recipes />
        </S.content>
    )
}