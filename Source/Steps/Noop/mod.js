
import { Types } from '../../Imports.js'

const { isBlockStatement } = Types;


export const type = 'EmptyStatement';


export function action ({ path }){

    const { parent } = path;

    if( ! isBlockStatement(parent) )
        return

    
    path.remove();
}