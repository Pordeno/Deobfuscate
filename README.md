
<div align = center>

# Deobfuscate

*Make obfuscated JavaScript code more readable.*

</div>

<br>
<br>

## Status

Currently the deobfuscation doesn't prioritize one step  
over another, however this will change in the future.

<br>
<br>

## Steps

*Implemented deobfuscation steps.*

<br>

-   **Combined Expressions**

    ```js
    expression && expression
    ```

    ```js
    if(expression)
        expression
    ```

    <br>

-   **Double Knot**

    ```js
    !! expression
    ```

    ```js
    Boolean(expression)
    ```

    <br>

-   **Interjoined Assignments**

    ```js
    (a = {}).b = 1
    ```

    ```js
    a = {} ;
    b = 1 ;
    ```

    <br>

-   **Joined Variables**

    ```js
    let a = 1 ,
        b = 2 ;
    ```

    ```js
    let a = 1 ;
    let b = 2 ;
    ```

    <br>

-   **Literal Garbage**

    ```js
    0;
    ```

    <br>

-   **Non-constant**

    ```js
    var a = 1;
    ```

    ```js
    const a = 1;
    ```

    <br>

-   **Noop**

    ```js
    ;
    ```

    <br>

-   **Number Logic**

    ```js
    !0 !1
    ```

    ```js
    true false
    ```

    <br>

-   **Property Twins**

    ```js
    const object = {
        property : property
    }
    ```

    ```js
    const object = {
        property
    }
    ```

    <br>

-   **Readable Variables**

    ```js
    const a;
    ```

    ```js
    const __thing_234
    ```

    <br>

-   **Secondhand Call**

    ```js
    (method)(a,b,c)
    ```

    ```js
    method(a,b,c)
    ```

    <br>

-   **Sequenced Expressions**

    ```js
    ( expression , expression )
    ```

    ```js
    expression;
    expression;
    ```

    <br>

-   **Sequence Literals**

    ```js
    (0,a,0,b,0)
    ```

    ```js
    (a,b,0)
    ```

    <br>

-   **Stringed Indexing**

    ```js
    object['key']
    ```

    ```js
    object.key
    ```

    <br>

-   **Twin Declaration**

    ```js
    const w = window;
    ```

    <br>

-   **Unreachable Conditions**

    ```js
    if(false)
        ;
    ```

    <br>

-   **Useless Constants**

    ```js
    const a;
    ```

    <br>

-   **Void Literal**

    ```js
    void 0
    ```

    ```js
    undefined
    ```



<br>
