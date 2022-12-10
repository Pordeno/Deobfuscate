
import { Types , Variable } from '../../Imports.js'

const { memberExpression , identifier , isStringLiteral } = Types;
const { isVariableName } = Variable;


export const type = 'MemberExpression';


export function action ({ path , node }){

    
    if( ! node.computed )
        return


    const { property } = node;

    if( ! isStringLiteral(property) )
        return


    const { value } = property;

    if( ! isVariableName(value) )
        return


    const index = identifier(value);

    const indexer = memberExpression(node.object,index,false);

    path.replaceWith(indexer);
}
