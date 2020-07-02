
let s;
let data;
const dbRefObject = firebase.database().ref().child('animals');
dbRefObject.on('value', snap => {
    data = snap.val();
    s = new Solution()
    s.build(snap.val());
});



function returnResults() {
    console.log("something happened");
    let userText = document.getElementById("animalInput").value.toLowerCase()
    userText = userText.charAt(0).toUpperCase() + userText.slice(1);
    console.log(userText);

    if (userText) {
        document.getElementById("suggestions").innerText = "";
        let suggestions = s.autocomplete(userText);
        suggestions.pop();
        for (suggestion of suggestions) {
            let ul = document.getElementById('suggestions');
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.appendChild(document.createTextNode(suggestion));
            a.setAttribute('href', `https://en.wikipedia.org/wiki/${suggestion}`);
            a.setAttribute('class', 'subtitle')

            li.appendChild(a);

            ul.appendChild(li)
        }
    } else {
        document.getElementById("suggestions").innerText = "";
    }
    if (userText == '*') {
        console.log("giving my all")
        console.log(data);
        for (suggestion of data) {
            let ul = document.getElementById('suggestions');
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.appendChild(document.createTextNode(suggestion));
            a.setAttribute('href', `https://en.wikipedia.org/wiki/${suggestion}`);
            a.setAttribute('class', 'subtitle')

            li.appendChild(a);

            ul.appendChild(li)
        }
    }
}