
const isValidName = /^[$\_A-Z]+$/i;



const reserved = [
    'implements' , 'instanceof' , 'interface' , 'protected' , 'arguments' , 
    'continue' , 'debugger' , 'function' , 'default' , 'extends' , 'finally' , 
    'package' , 'private' , 'public' , 'return' , 'static' , 'switch' , 
    'typeof' , 'delete' , 'export' , 'import' , 'while' , 'yield' , 'catch' , 
    'class' , 'const' , 'super' , 'throw' , 'break' , 'false' , 'null' , 
    'this' , 'true' , 'void' , 'with' , 'case' , 'else' , 'enum' , 'eval' , 
    'var' , 'for' , 'let' , 'new' , 'try' , 'do' , 'if' , 'in'
]


export function isVariableName ( string ){

    if(reserved.includes(string))
        return false

    return isValidName
        .test(string);
}
