export default function TranslateBoolean (value) {
    if(value !== true || value !== false)return;
    else if(value) {
        return "Yes";
    }
    else{
        return "No";
    }
}