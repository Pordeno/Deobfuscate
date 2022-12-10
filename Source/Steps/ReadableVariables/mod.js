

const words = [
    'Grain' ,
    'Tick' ,
    'Notice' ,
    'Mere' ,
    'Chemical' ,
    'Boot' ,
    'Incredible' ,
    'Grandiose' ,
    'Star' ,
    'Air' ,
    'Famous' ,
    'Clam' ,
    'Brawny' ,
    'Mask' ,
    'Rejoice' ,
    'Boil' ,
    'Great' ,
    'Vast' ,
    'Deer' ,
    'Glow' ,
    'Boundary' ,
    'Caption' ,
    'Paddle' ,
    'Poison' ,
    'Wealthy' ,
    'Curve' ,
    'Planes' ,
    'Itch' ,
    'Meal' ,
    'Abortive' ,
    'Dislike' ,
    'Pale' ,
    'Ski' ,
    'Grotesque'  ,
    'Disturbed' ,
    'Dependent'
]

const used = new Set;

const random = ( min , max ) =>
    Math.random() * (max - min) + min;

const randomInt = ( ...args ) =>
    Math.round(random(...args));

const randomWord = () =>
    words[ randomInt(0,words.length) ]

function randomName (){
    return `__${ randomWord() }_${ randomInt(1000,9999).toString(16) }`
}


export const type = 'VariableDeclarator|FunctionDeclaration';


export function action ({ path , node }){


    const { name } = node.id;

    if( ! name )
        return

    if( name.length > 1 )
        return


    const { scope } = path;

    const rename = randomName();

    scope.rename(name,rename);
}
