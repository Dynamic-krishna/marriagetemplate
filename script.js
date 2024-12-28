// Sample array of data
const rowData = [
    { name: "Name", data: "Uttam Singh Shekhawat" },
    { name: "Birth Date", data: "15 Nov 2004" },
    { name: "Birth Place", data: "Nimka Thana" },
    { name: "Cast", data: "Rajput" },
    { name: "Family deity", data: "Jamvay mata devi" },
    { name: " ZODIAC", data: "Scorpio" },

    { name: "Color", data: "WHEATISH" },
    { name: "Blood Groupo", data: "O++" },
    { name: "Education Level", data: "ITI with Electrical" },
    { name: "Profession", data: "Transportation" },
    { name: "Martial Status", data: "Unmarried" },
    // { name: "Contact Details", data: "" },
];

// Function to create and insert data rows dynamically
function insertDataRows() {
    const dataContainer = document.querySelector('.data'); // Select the container

    rowData.forEach(item => {
        const row = document.createElement('div'); // Create a new div for each row
        row.classList.add('rowdata');

        // Create name element
        const nameElement = document.createElement('h1');
        nameElement.classList.add('paradraf');
        nameElement.textContent = item.name;

        // Create colon element
        const colonElement = document.createElement('h1');
        colonElement.textContent = ": ";

        // Create data element with typing effect
        const dataElement = document.createElement('h1');
        dataElement.classList.add('data');
        typeWriterEffect(dataElement, item.data);

        // Append the elements to the row
        row.appendChild(nameElement);
        row.appendChild(colonElement);
        row.appendChild(dataElement);

        // Append the row to the data container
        dataContainer.appendChild(row);
    });
}

// Typing effect function
function typeWriterEffect(element, text, index = 0) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(() => typeWriterEffect(element, text, index), 100); // Adjust typing speed here
    }
}

// Call the function to insert rows
insertDataRows();


const gotra = [
    { name: "Grand Mother Gotra", data: "Bala Nirwand Gotra" },
    { name: "Father Name", data: "Narendra Singh (Anchal Das) Skekhawat" },
    { name: "Mother Gotra", data: "Chouhan Gotra" },
    { name: "Cast", data: "Rajput" },
    { name: "Village", data: "Bada ki Dhani" },
];

// Function to create and insert data rows dynamically
function insertDataGotra() {
    const dataContainer = document.querySelector('.gotra'); // Select the container

    gotra.forEach(item => {
        const row = document.createElement('div'); // Create a new div for each row
        row.classList.add('rowdata');

        // Create name element
        const nameElement = document.createElement('h1');
        nameElement.classList.add('paradraf');
        nameElement.textContent = item.name;

        // Create colon element
        const colonElement = document.createElement('h1');
        colonElement.textContent = ": ";

        // Create data element with typing effect
        const dataElement = document.createElement('h1');
        dataElement.classList.add('data');
        typeWriterEffect(dataElement, item.data);

        // Append the elements to the row
        row.appendChild(nameElement);
        row.appendChild(colonElement);
        row.appendChild(dataElement);

        // Append the row to the data container
        dataContainer.appendChild(row);
    });
}

insertDataGotra()