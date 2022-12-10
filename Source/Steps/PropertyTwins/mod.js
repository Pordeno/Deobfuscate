
import { Types } from '../../Imports.js'

const { isIdentifier } = Types;


export const type = 'ObjectProperty';


export function action ({ node }){


    const { value } = node;

    if( ! isIdentifier(value) )
        return


    const { key } = node;

    if( ! isIdentifier(key) )
        return

    
    if( value.name !== key.name )
        return
        

    node.shorthand = true;
}