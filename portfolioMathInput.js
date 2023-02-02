function ageCalculation()
{
    let ageinp = document.getElementById("age").value;
    let ageInt = parseInt(ageinp);
    let ans = ageInt + 35;
    document.getElementById("demo").innerHTML = ans;
}