document.addEventListener('DOMContentLoaded', function() {
    const fileList = [
        { name: '上册资料登记审批表', url: 'files/上册资料审批表' },
        { name: '会议签到表', url: 'files/会议签到表' },

    ];

    const fileContainer = document.getElementById('file-list');

    fileList.forEach(file => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = file.url;
        a.textContent = file.name;
        a.download = file.name;
        li.appendChild(a);
        fileContainer.appendChild(li);
    });

});
