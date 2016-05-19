##NOTES

###棋盘

对于现代浏览器来说，我们可以把 SVG 文件以 data URI 的方式内嵌到样式表中，甚至不需要用 base64 或 URLencode 来对其编码：

```css
background: #eee url('data:image/svg+xml,\
    <svg xmlns="http://www.w3.org/2000/svg" \
    width="100" height="100" \
    fill-opacity=".25">\
    <rect x="50" width="50" height="50" /> \
    <rect y="50" width="50" height="50" /> \
    </svg>');
background-size: 50px 50px;
```