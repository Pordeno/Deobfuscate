
export * as Variable from './Variable.js'
export * as Types from 'npm:@babel/types'

export { parse } from 'npm:@babel/parser'


import Traverse from 'npm:@babel/traverse'
export const traverse = Traverse.default;


import Generator from 'npm:@babel/generator'
export const generate = Generator.default;


export * as FileSystem from 'https://deno.land/std@0.167.0/fs/mod.ts'
export * as Path from 'https://deno.land/std@0.167.0/path/mod.ts'
