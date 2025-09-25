document.addEventListener('DOMContentLoaded', function() {
    const fileList = [
        { name: '年度报告.xlsx', url: 'files/年度报告.xlsx' },
        { name: '月度报表.xlsx', url: 'files/月度报表.xlsx' },
        { name: '项目计划书.docx', url: 'files/项目计划书.docx' },
        { name: '会议纪要.pdf', url: 'files/会议纪要.pdf' }
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