
import { Types } from '../../Imports.js'

const { variableDeclaration , isBlockStatement } = Types;


export const type = 'VariableDeclaration';


export function action ({ path , node }){


    if( ! isBlockStatement(path.parent) )
        return


    const { declarations } = node;

    if(declarations.length < 2)
        return


    const { kind } = node;

    function toDeclaration ( declarator ){
        return variableDeclaration(kind,[ declarator ])
    }

    
    const variables = declarations
        .map(toDeclaration);

    path.replaceWithMultiple(variables);
}
