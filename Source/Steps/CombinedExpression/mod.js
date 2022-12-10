
import { Types } from '../../Imports.js'

const { 
    isExpressionStatement , isBlockStatement ,
    expressionStatement , ifStatement
} = Types;


export const type = 'LogicalExpression';


export function action ({ path , node }){


    const { parent } = path;

    if( ! isExpressionStatement(parent) )
        return

    
    const { operator } = node;

    if( operator !== '&&' )
        return

    
    if( ! isBlockStatement(parent.parent) )
        return


    const { right } = node;

    const action = expressionStatement(right);


    const { left } = node;

    const statement = ifStatement(left,action);


    parent.replaceWith(statement);
}