var db = [
    {
        username: "john",
        password: "123456"
    },
    {
        username: "roy",
        password: "000"
    },
    {
        username: "david",
        password: "123"
    }

];

var newFeed = [
    {
        username: "john",
        timeline: "So good the Javascript."
    }
]

function go_db_check(username, password) {
    for(var i = 0; i < db.length ; i++)
    {
        if( (username === db[i].username) && 
            (password === db[i].password)
          )
        {
            return true;
        }
    }
    return false;
}


function check_logoin_info(username, password) {
    if (go_db_check(username, password)) {
        alert("longin sucesses!!");

    } else {
        alert("Sorry, wrong username or password");
    }
}

var input_username = prompt("What is your username?");
var input_password = prompt("What is your password?");

check_logoin_info(input_username, input_password);
