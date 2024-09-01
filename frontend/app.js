const endpoints = [
    { name: "invitees", url: "/api/invitees/" },
    { name: "sub-tasks", url: "/api/sub-tasks/" },
    { name: "tasks", url: "/api/tasks/" },
    { name: "task-groups", url: "/api/task-groups/" },
    { name: "tags", url: "/api/tags/" }
];

endpoints.forEach(endpoint => {
    fetch(endpoint.url)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById(endpoint.name);
            const list = document.createElement("ul");

            data.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = JSON.stringify(item);

                list.appendChild(listItem);
            });
            container.appendChild(list);
        })
        .catch(error => console.error("Error: " + endpoint.name, error));
});
