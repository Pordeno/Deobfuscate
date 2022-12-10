
import { Types } from '../../Imports.js'

const { isIdentifier } = Types;


export const type = 'VariableDeclarator';


export function action ({ path , node }){


    const { init } = node;

    if( ! isIdentifier(init) )
        return


    const { id } = node;

    if( ! isIdentifier(id) )
        return


    const { referencePaths , constant } = 
        path.scope.getBinding(id.name);
        
    if( ! constant )
        return


    for ( const reference of referencePaths )
        reference.node.name = init.name;

    
    path.remove();
}
