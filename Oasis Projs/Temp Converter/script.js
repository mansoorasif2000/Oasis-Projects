const celcInput = document.getElementById("celcius");
const fahrenInput = document.getElementById("fahrenheit");
const kelvInput = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e){
        let value = parseFloat(e.target.value);

            switch (e.target.name) {
                case "celcius":
                    fahrenInput.value = (value * 1.8) + 32;
                    kelvInput.value = value + 273.15;
                    break;
                case "fahrenheit":
                    celcInput.value = (value - 32) / 1.8;
                    kelvInput.value = ((value - 32) / 1.8) + 273.15;
                    break;
                case "kelvin":
                    celcInput.value = value - 273.15;
                    fahrenInput.value = ((value - 273.15) * 1.8) +32

                    break; 
            
                default:
                    break;
            }

    });
}