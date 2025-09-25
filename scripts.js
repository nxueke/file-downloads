document.addEventListener('DOMContentLoaded', function() {
    const fileList = [
        { name: '01 三门峡市二次供水设备“报备”信息登记表.doc', url: 'files/01 三门峡市二次供水设备“报备”信息登记表.doc' },
        { name: '02 三门峡市二次供水设施基础信息登记表-1;（1-2正反面打印）.doc', url: 'files/02 三门峡市二次供水设施基础信息登记表-1;（1-2正反面打印）.doc' },
        { name: '03 三门峡市二次供水设备验收登记表-2；(1-2正反面打印）.doc', url: 'files/03 三门峡市二次供水设备验收登记表-2；(1-2正反面打印）.doc' },
        { name: '04 三门峡市二次供水申请表-正反面打印.doc', url: 'files/04 三门峡市二次供水申请表-正反面打印.doc' },
        { name: '05 三门峡市二次供水项目审批表-正反面打印.doc', url: 'files/05 三门峡市二次供水项目审批表-正反面打印.doc' },
	    { name: '06 会议签到表（新）.doc', url: 'files/06 会议签到表（新）.doc' },


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

