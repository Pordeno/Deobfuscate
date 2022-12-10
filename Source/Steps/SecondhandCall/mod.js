
import { Types } from '../../Imports.js'

const { isSequenceExpression , isMemberExpression , isIdentifier } = Types;


function isCallable ( expression ){

    if(isMemberExpression(expression))
        return true

    if(isIdentifier(expression))
        return true

    return false
}


export const type = 'CallExpression';


export function action ({ node }){


    const { callee } = node;

    if( ! isSequenceExpression(callee) )
        return


    const { expressions } = callee;

    if( expressions.length != 1 )
        return
    

    const [ expression ] = expressions;

    if( ! isCallable(expression) )
        return


    node.callee = expression;
}
