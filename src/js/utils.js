
export function serializeForm(elements) {
    const formData = {};
    elements.forEach((input) => {
        formData._id = Math.floor(Math.random() * 100);
        if (input.name === 'text') {
            if (input.value === '') {
                formData.text = input.value;
            }
        }
        if (input.name === 'name') {
            formData.name = input.value;
        }
        formData.favourite = false;
        if (input.name === 'date') {
            if (input.value === '' || input.valueAsNumber > Date.now()) {
                let date = new Date();
                formData.date = date.toLocaleDateString();
                formData.time = date.toLocaleTimeString().slice(0,-3);
            }else{
                let date = new Date(input.valueAsNumber);
                formData.date = date.toLocaleDateString();
                formData.time = new Date().toLocaleTimeString().slice(0,-3);
            }
        }
    });
    return formData;
}
