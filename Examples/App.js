
import { initialize , deobfuscate } from 'Deobfuscate'
import * as Paths from './Paths.js'


const { writeTextFile , readTextFile } = Deno;
const { clear , log } = console;


clear();

log('Deobfuscating /Data/Obfuscated.js -> /Data/Deobfuscated.js')

await initialize();


const obfuscated = await 
    readTextFile(Paths.Obfuscated);

const deobfuscated =
    deobfuscate(obfuscated,{ debug : true });


await writeTextFile(Paths.Deobfuscated,deobfuscated);
