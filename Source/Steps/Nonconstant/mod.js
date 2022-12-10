
import { Types } from '../../Imports.js'

const { isBlockStatement , identifier } = Types;



export const type = 'VariableDeclaration';


export function action ({ path , node }){


    const { kind } = node;

    if( kind === 'const' )
        return

    
    if( ! isBlockStatement(path.parent) )
        return


    const { declarations } = node;

    if( declarations.length > 1 )
        return

        
    const [ variable ] = declarations;

    const { name } = variable.id;

    const binding = path.scope
        .getBinding(name);

    if( ! binding )
        return

    if( ! binding.constant )
        return

        
    path.node.kind = 'const';

    
    if( variable.init )
        return

    variable.init = identifier('undefined');
}
