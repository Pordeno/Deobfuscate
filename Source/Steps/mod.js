
import { FileSystem , Path } from '../Imports.js'

const
    { fromFileUrl , basename , dirname , join } = Path ,
    { walk } = FileSystem ;


const here = dirname(fromFileUrl(import.meta.url));


export const Steps = new Map;


export async function loadSteps (){

    Steps.clear();

    const folders = walk(here,{
        followSymlinks : false ,
        includeFiles : false ,
        includeDirs : true ,
        maxDepth : 1 ,
        match : [ /\/Steps\/[a-z]+/i ]
    })

    for await ( const { path } of folders )
        await loadStep(path);
}


async function loadStep ( folder ){

    const file = join(folder,'mod.js');

    const code = await import(file);

    const name = basename(folder);

    Steps.set(name,code);
}
