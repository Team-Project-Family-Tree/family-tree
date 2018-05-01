function displayprofile()
{
    var display_data = document.getElementById('display_data')
    display_data.innerHTML = "";
    display_data.innerHTML =
        "First-name : " + localStorage.getItem("First-name") + "<br>" + "Last-name : " + localStorage.getItem("Last-name") + "<br>" + "Alias : " + localStorage.getItem("Alias") + "<br>" + "Email : " + localStorage.getItem("Email") + "<br>" + "Gender : " + localStorage.getItem("Gender") + "<br>" + "Date-of-birth : " + localStorage.getItem("Date-of-birth") + "<br>"
}

function displaymember() {
    var display_data = document.getElementById('display_data')
    display_data.innerHTML = "";
    display_data.innerHTML = 
        "First-name : " + localStorage.getItem("first-name-member") + "<br>" + "Last-name : " + localStorage.getItem("last-name-member") + "<br>" + "Gender : " + localStorage.getItem("gender-member") + "<br>" + "Date-of-birth : " + localStorage.getItem("dob-member") + "<br>"
}

function clear() {
    localStorage.clear();
    location.reload();
}