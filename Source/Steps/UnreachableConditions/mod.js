
import { Types } from '../../Imports.js'

const { isBlockStatement } = Types;


export const type = 'ConditionalExpression|IfStatement';


export function action ({ path , node }){

    const result = path
        .get('test')
        .evaluateTruthy();

    if(typeof result !== 'boolean')
        return


    function replaceWith ( block ){

        if(isBlockStatement(block))
            block = block.body;
        
        path.replaceWithMultiple(block);
    }

    
    const { consequent , alternate } = node;

    if(result)
        replaceWith(consequent);
    else
    if(alternate)
        replaceWith(alternate);
    else
        path.remove();
}
