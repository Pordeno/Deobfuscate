

const reserved = [
    'implements' , 'instanceof' , 'interface' , 'protected' , 'arguments' , 
    'continue' , 'debugger' , 'function' , 'default' , 'extends' , 'finally' , 
    'package' , 'private' , 'public' , 'return' , 'static' , 'switch' , 
    'typeof' , 'delete' , 'export' , 'import' , 'while' , 'yield' , 'catch' , 
    'class' , 'const' , 'super' , 'throw' , 'break' , 'false' , 'null' , 
    'this' , 'true' , 'void' , 'with' , 'case' , 'else' , 'enum' , 'eval' , 
    'var' , 'for' , 'let' , 'new' , 'try' , 'do' , 'if' , 'in'
]


const isReserved = 
    new RegExp(`^${ reserved.join('|') }$`);


const isVariable = 
    /^(?:\p{L}|[0-9_])+$/u;


export function isVariableName ( string ){

    if(isReserved.test(string))
        return false

    return isVariable
        .test(string);
}
