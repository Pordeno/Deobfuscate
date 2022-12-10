
import { Types } from '../../Imports.js'

const { isLiteral } = Types;


export const type = 'ExpressionStatement';


export function action ({ node }){


    const { expression } = node;

    if( ! isLiteral(expression) )
        return


    path.remove();
}
