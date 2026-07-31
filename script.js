fetch("/api/student")
.then(res => res.json())
.then(data => {
    console.log(data);
});