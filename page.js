var drawTable=function(employees)
{
    var rows=d3.select("#employeeTable tbody")
    .selectAll("tr")
    .data(employees)
    .enter()
    .append("tr")
    rows.append("td")
    .text(function(employee)
          {
        return employee.FirstName;
    });
    rows.append("td")
    .text(function(employee)
         {
        return employee.LastName;
    });
    rows.append("td")
    .text(function(employee)
         {
        return employee.Title;
    });
    rows.append("td")
    .text(function(employee)
         {
        return employee.Email;
    });
    
}
var setBanner=function(message)
{
    d3.select("#banner")
    .text(message)
}
var employeePromise=d3.csv("employees.csv")
var successFCN=function(employees)
{
    console.log("Employees",employees);
    setBanner("Employees Table");
    drawTable(employees);
}
var failFCN=function(error)
{
    console.log("File Not Found",error);
    setBanner("Employees are Missing");
}
employeePromise.then(successFCN,failFCN);