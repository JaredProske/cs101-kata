export default function withTestCases(values, func) {
    for (let i = 0; i < values.length; i++) {        
        func.call(this, values[i]);      
    }
}