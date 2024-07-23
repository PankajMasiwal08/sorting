const students = [
    {name:"pank", email:"pank.examole.com",dob:2001-12-8,percentage:85},
{name:"raju", email:"raju.examole.com",dob:2003-12-8,percentage:76},
{name:"chaman", email:"chaman.examole.com",dob:2000-12-8,percentage:49},
{name:"aaalia", email:"aalia.examole.com",dob:2006-12-8,percentage:95},
{name:"rome", email:"rome.examole.com",dob:2004-12-8,percentage:65},
{name:"dig", email:"dig.examole.com",dob:2008-12-8,percentage:55},
{name:"dank", email:"dank.examole.com",dob:2000-12-8,percentage:75},
{name:"rank", email:"rank.examole.com",dob:1998-12-8,percentage:45},
{name:"zian", email:"zian.examole.com",dob:1997-12-8,percentage:65},
{name:"sank", email:"sank.examole.com",dob:2009-12-8,percentage:90}
    ];

    function displayStudents(data) {
        const tableBody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
       tableBody.innerHTML="";
        data.forEach(students => {
          const row = tableBody.insertRow();
          const nameCell = row.insertCell(0);
            const emailCell = row.insertCell(1);
            
            const dobCell = row.insertCell(2);
            const percentageCell = row.insertCell(3);
            nameCell.textContent = students.name;
            emailCell.textContent = students.email;
            
            dobCell.textContent = students.dob;
            percentageCell.textContent = students.percentage;
        });
    }

    function sortData() {
        const sortField = document.getElementById('sortField').value;
        const sortedData = students.sort((a, b) => {
            if (a[sortField] < b[sortField]) return -1;
            if (a[sortField] > b[sortField]) return 1;
            return 0;
        });
        displayStudents(sortedData);
    }
    function search() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const filteredData =  students.filter(student => {
            return Object.values(student).some(val => val.toString().includes(searchInput));
        });
        displayStudents(filteredData);
    }

   



