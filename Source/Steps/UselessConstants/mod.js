


export const type = 'VariableDeclarator|FunctionDeclaration';


export function action ({ path , node }){


    const { name } = node.id;

    if( ! name )
        return


    const { scope } = path;

    const { referenced , constant } = 
        scope.getBinding(name);

    if( ! constant )
        return

    if( referenced )
        return
    

    path.remove();
}
