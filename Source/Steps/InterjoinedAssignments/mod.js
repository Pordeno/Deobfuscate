
import { Types } from '../../Imports.js'

const { 
    isAssignmentExpression , isMemberExpression , isIdentifier , 
    expressionStatement , identifier 
} = Types;



export const type = 'AssignmentExpression';


export function action ({ node }){


    const { left } = node;

    if( ! isMemberExpression(left) )
        return


    let current = left;

    while ( isMemberExpression(current.object) )
        current = current.object;


    const assign = current.object;

    if( ! isAssignmentExpression(assign) )
        return

    if( ! isIdentifier(assign.left) )
        return


    const assignA = expressionStatement(assign);

    current.object = identifier(assign.left.name);

    const assignB = expressionStatement(path.node);


    path.replaceWithMultiple([ assignA , assignB ]);
}
