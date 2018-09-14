document.addEventListener('DOMContentLoaded', function(){
   document.querySelector('#btn').addEventListener('click',function(){
        var inputText = document.getElementById("text").value;
        var optionsList = document.getElementById("opcoes");
        var selectedOption =  parseInt(optionsList.options[optionsList.selectedIndex].value);
        var hexHash = generateHash(inputText,selectedOption);
        alert(hexHash);
   });
    
});

function generateHash(data, type){
    var result;
    switch(type) {
        case 0://md5
                result = hex_md5(data);
            break;
        case 1://sha-1
                result = hex_sha1(data);
            break;
        case 2://sha-256
                result = hex_sha256(data);
            break;
        case 3://sha-512
                result = hex_sha512(data);
            break;
    }
    return result;
}

