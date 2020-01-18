import React, {useCallback, useEffect, useRef} from 'react';
import "./sass/index.scss";
import useInputField from "./components/InputField/InputField";
import TwoSideArrow from "./components/TwoSidedArrow/TwoSidedArrow";

const App: React.FC = () => {
    const {
        InputField: BinaryInputField,
        value: binaryValue,
        setValue: setBinaryValue,
        inFocus: isBinaryInFocus
    } = useInputField({
        inputId: "binary",
        label: "Binary",
        dataInput: "binary"
    });

    const {
        InputField: DecimalInputField,
        value: decimalValue,
        setValue: setDecimalValue,
        inFocus: isDecimalInFocus
    } = useInputField({
        inputId: "decimal",
        label: "Decimal",
        dataInput: "decimal"
    });


    /* Function Declarations */
    const convertDecimalToBinary = useCallback(() => {
        if (decimalValue == "") setBinaryValue("");
            // When you give toString a radix of 2 ,
        // it returns a binary stringification of the number

        else setBinaryValue(Number(decimalValue).toString(2));
    }, [decimalValue]);

    const convertBinaryToDecimal = useCallback(() => {

        if (Object.is(binaryValue, "")) {
            setDecimalValue("");
        }

        // Prepending Ob makes Number func treat it as a binary value

        const binEqv = Number(`0b${binaryValue}`);

        if (!Number.isNaN(binEqv)) {
            setDecimalValue(String(binEqv));
        }
    }, [binaryValue]);


    useEffect(() => {
        // Convert only if the currently focused is binary
        if (isBinaryInFocus) {
            convertBinaryToDecimal()
        }
    }, [convertBinaryToDecimal]);
    useEffect(() => {
        // Convert only if the currently focused is decimal
        if (isDecimalInFocus) {
            convertDecimalToBinary();
        }
    }, [convertDecimalToBinary]);


    return (
        <>
            <header>
                Bin2Dec
            </header>
            <main>
                {BinaryInputField}
                <TwoSideArrow/>
                {DecimalInputField}
            </main>
        </>
    );


};


export default App;
