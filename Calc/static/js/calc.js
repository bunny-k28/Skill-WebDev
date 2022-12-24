var data = []; // array to store the user entry data
var ans = 0; // var to store the final output/answer

// function to display val on scr and consol
function show_val(){
    document.getElementById('scr').innerHTML = data.toString().replaceAll(',', '');
    console.log("Scr View: "+data.toString().replaceAll(',', ''));
}


// function to take value from the btn pressed
function get_btn_val(val) {

    // conditon statement to clr the screen
    if (val == 'clr'){
        data = [];
        console.clear()
        console.log(data)
        document.getElementById('scr').innerHTML = '';
    }

    // conditon statement to delete the last entry
    else if (val == 'del') {
        data.pop()
        console.log(data)
        show_val();
    }

    // conditon statement to use the last output/answer
    else if (val == 'ans') {
        for(i=0; i<data.length; i++){data.pop()}
        data.push(ans)
        console.log(data)
        show_val();
    }

    // conditon statement to push and display the user entry operator
    else if ((val == '+') || (val == '-') || (val == '÷') || (val == 'x')) {
        data.push(val);
        console.log(data)
        show_val();
    }

    // conditon statement to push and display the user entry num
    else {
        if (data.length == 0) {
            data.push(val)
            console.log(data)

            show_val();

        }

        else {
            var lst_el = data[data.length - 1];
            if ((lst_el == '+') || (lst_el == '-') || (lst_el == '÷') || (lst_el == 'x')){
                data.push(val);
                console.log(data)
                show_val();
            }

            else {
                data[data.length - 1] += val;
                console.log(data)
                show_val();
            }
        }
    }
}


// function to remove a specific element from array
function removeItem(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {arr.splice(index, 1);}
}


// function to format the array after counter calc
function formatArray(arr){
    var count = 1
    while (count<=2) {removeItem(arr, arr[count]); count++;}
}


// function to calculate the data entered by user
function calculate(){

    for(i = 0; i < data.length -2; i++){
        if ('+' == data[1]){
            data[0] = (parseInt(data[0]) + parseInt(data[2])).toString();
            formatArray(data)  
            show_val();
        }

        else if ('-' == data[1]){
        data[0] = (parseInt(data[0]) - parseInt(data[2])).toString();
            formatArray(data)
            show_val();
        }

        else if ('x' == data[1]){
            data[0] = (parseInt(data[0]) * parseInt(data[2])).toString();
            formatArray(data)
            show_val();
        }

        else if ('÷' == data[1]){
            data[0] = (parseInt(data[0]) / parseInt(data[2])).toString();
            formatArray(data)
            show_val();
        }

    }

    ans = data[0];

    console.log("Final Ans: "+ans);
    document.getElementById('scr').innerHTML = ans;
    document.getElementById('ans').innerHTML = "Previous Ans: "+ans;
}