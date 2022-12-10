
import { fromFileUrl , dirname , join } from 'Path'


const repository = join(dirname(fromFileUrl(import.meta.url)),'..');


const examples = 
    join(repository,'Examples');

const data =
    join(examples,'Data');


export const Deobfuscated = 
    join(data,'Deobfuscated.js')


export const Obfuscated = 
    join(data,'Obfuscated.js')


