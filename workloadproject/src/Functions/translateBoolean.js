export default function TranslateBoolean (value) {
    if(typeof value === 'string' || typeof value === 'bigint' || typeof value === 'function' || typeof value === 'number' || typeof value === 'object' || typeof value === 'string' || typeof value === 'symbol' || typeof value === 'undefined')return;
    else if(value) {
        return 'Yes';
    }
    else{
        return 'No';
    }
}