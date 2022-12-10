
import { Types } from '../../Imports.js'

const { isNumericLiteral } = Types;


export const type = 'SequenceExpression';


export function action ({ node }){

    const 
        { expressions } = node ,
        { length } = expressions ;

    if(length < 2)
        return

    for ( let i = 0 ; i < length - 1 ; i++ )
        if(isNumericLiteral(expressions[i]))
            expressions.shift();
}
