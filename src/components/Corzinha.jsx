import React, { useState, useEffect } from "react";

export function Corzinha() {
    const [cor, setCor] = useState("");

    function digitouCor(event) {
        setCor(event.target.value); // Atualiza a variavel "cor" para o input
    }
    useEffect(() => {
        // altera o valor do body para oque a pessoa colocar na variavel, no caso o nput
        document.body.style.backgroundColor = cor;

    }, [cor]); // quando a pessoa colocar a cor, vai mudar para essa, e quando apagar a cor ira sumir
    return (
        <div>
            <input type={"color"} value={cor} onChange={digitouCor} />
        </div>
    );
}