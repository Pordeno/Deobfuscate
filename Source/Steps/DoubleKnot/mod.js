
import { Types } from '../../Imports.js'

const { 
    isUnaryExpression ,
    callExpression , identifier
} = Types;


export const type = 'UnaryExpression';


export function action ({ path , node }){


    const { operator } = node;

    if( operator !== '!' )
        return

    
    const { argument } = node;

    if( ! isUnaryExpression(argument) )
        return
    
    const callee = identifier('Boolean');

    const inner = argument.argument;
    
    const boolean = callExpression(callee,[ inner ]);

    path.replaceWith(boolean);
}
