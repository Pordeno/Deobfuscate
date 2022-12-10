
import { Types } from '../../Imports.js'

const { isExpressionStatement , expressionStatement } = Types;


function toStatement ( expression ){
    return expressionStatement(expression)
}


export const type = 'SequenceExpression';


export function action ({ path , node }){

    
    if( ! isExpressionStatement(path.parent))
        return


    const statements = node.expressions
        .map(toStatement);

    path.replaceWithMultiple(statements);
}
