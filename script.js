const schemes = [
    {title: "Agriculture Support", desc: "Support for farmers"},
    {title: "Education Loan Subsidy", desc: "Loan subsidies for students"},
    {title: "Small Business Grant", desc: "Grant for new businesses"}
];

function searchSchemes() {
    let query = document.getElementById("search").value.toLowerCase();
    let resultDiv = document.getElementById("results");
    resultDiv.innerHTML = "";

    let filtered = schemes.filter(s =>
        s.title.toLowerCase().includes(query)
    );

    filtered.forEach(s => {
        let card = document.createElement("div");
        card.innerHTML = `<h3>${s.title}</h3><p>${s.desc}</p>`;
        resultDiv.appendChild(card);
    });
}
