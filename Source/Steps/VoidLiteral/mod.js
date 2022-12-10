
import { Types } from '../../Imports.js'

const { identifier , isLiteral } = Types;


export const type = 'UnaryExpression';


export function action ({ path , node }){


    const { operator } = node;

    if( operator !== 'void' )
        return


    const { argument } = node;

    if( ! isLiteral(argument) )
        return
        

    const variable = identifier('undefined');

    path.replaceWith(variable);
}
