var data = ''; // string to store user input data
var ans = '';

function show_val(){
    console.log("Scr View: "+data);
    document.getElementById('scr').innerHTML = data;
}


// function to take value from the btn pressed
function get_btn_val(val) {

    // conditon statement to clr the screen
    if (val == 'clr'){
        data = '';
        ans = '';
        console.clear()
        document.getElementById('scr').innerHTML = '';
    }

    // conditon statement to delete the last entry
    else if (val == 'del') {
        data.replace(data[data.length - 1], '')
        show_val();
    }

    // conditon statement to use the last output/answer
    else if (val == 'ans') {
        data += ans;
        show_val();
    }

    // conditon statement to push and display the user entry
    else {
        data += val;
        show_val();
    }
}


// function to calculate the data entered by user
function calculate(){
    ans = eval(data);
    console.log("Result: "+ans);
    document.getElementById('scr').innerHTML = ans;
    document.getElementById('ans').innerHTML = "Ans: "+ans;
    data = ''
}