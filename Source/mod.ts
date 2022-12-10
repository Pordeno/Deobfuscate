
import { traverse , generate, parse } from './Imports.js'
import { loadSteps , Steps } from './Steps/mod.js'


interface Options {
    debug ?: boolean
}


export async function initialize (){
    await loadSteps();
}


export function deobfuscate ( obfuscated : string , options : Options = {} ) : string {

    const ast = parse(obfuscated);


    for ( const [ step , code ] of Steps.entries() ){
        
        if(options.debug)
            console.debug(`Applying step '${ step }'`);


        const { action , type } = code;

        traverse(ast,{
            [ type ] : ( path ) => {

                const { node } = path;

                action({ path , node });
            }
        })
    }

    
    const { code } = generate(ast);

    return code
}
