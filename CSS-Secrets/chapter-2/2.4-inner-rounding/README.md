##NOTES

描边并不会跟着元素的圆角走（因而显示出直角），但 box-shadow 却是会的。因此，如果我们
把这两者叠加到一起，box-shadow 会刚好填补描边和容器圆角之间的空隙，
这两者的组合达成了我们想要的效果

![inner-rounding](inner-rounding.png)

![inner-rounding](tip.png)