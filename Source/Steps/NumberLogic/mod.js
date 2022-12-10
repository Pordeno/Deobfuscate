
import { Types } from '../../Imports.js'

const { isNumericLiteral , booleanLiteral } = Types;


export const type = 'UnaryExpression';


export function action ({ path , node }){


    const { operator } = node;

    if(operator !== '!')
        return


    const { argument } = node;

    if( ! isNumericLiteral(argument) )
        return


    const state = argument.value < 1;

    const bool = booleanLiteral(state);

    path.replaceWith(bool);
}