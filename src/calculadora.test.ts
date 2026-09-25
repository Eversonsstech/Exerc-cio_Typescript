import{describe, it, expect} from "vitest";
import{soma,subtracao} from "./calculadora.js";

describe("calculadora",() =>{ // descrição do teste
    it("deve somar dois números", ()=>{
        const resultado =soma(30,5)
        //expect(resultado).toBe(30);
        expect(resultado).toBe(35);
    }) // it nesse caso significa: isso deve somar 2 números
    it
})