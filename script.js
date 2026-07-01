function loadUsers() {
    fetch('get_users.php')
        .then(response => response.text())
        .then(data => {
            document.getElementById('result').innerHTML =
                "Tổng số user: " + data;
        })
        .catch(error => console.log(error));
}