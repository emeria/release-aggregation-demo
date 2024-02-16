document.addEventListener('DOMContentLoaded', function() {
    const repos = [
        'user/repo1',
        'user/repo2',
    ];

    repos.forEach(repo => {
        fetch(`https://api.github.com/repos/${repo}/releases/latest`)
            .then(response => response.json())
            .then(data => {
                displayReleaseInfo(repo, data);
            })
            .catch(error => console.error('Error:', error));
    });
});

function displayReleaseInfo(repo, data) {
    const releaseInfoDiv = document.getElementById('release-info');
    const content = `
        <div>
            <h2>${repo}</h2>
            <p><strong>Release Tag:</strong> ${data.tag_name}</p>
            <p><strong>Description:</strong> ${data.body}</p>
        </div>
    `;
    releaseInfoDiv.innerHTML += content;
}
