const btn = document.getElementById('testBtn');
const msg = document.getElementById('msg');

const phrases = [
    '交互正常，JS 文件加载成功！',
    '再次点击，依然有效~',
    'GitHub Pages 完美运行中。',
    '一切就绪，可以开始你的项目了。',
];

let count = 0;

btn.addEventListener('click', () => {
    msg.textContent = phrases[count % phrases.length];
    count++;
});
（内容由AI生成，仅供参考）
