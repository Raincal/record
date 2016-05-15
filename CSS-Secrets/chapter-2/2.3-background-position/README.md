##NOTES

### background-position 的扩展语法方案

CSS 背景与边框（第三版）( http://w3.org/TR/css3-background )中，
background-position 属性已经得到扩展，它允许我们指定背景图片**距离任
意角的偏移量**，只要我们**在偏移量前面指定关键字**。

### background-origin 方案

默认情况下，background-position 是以 **padding box** 为准的，这样边
框才不会遮住背景图片。因此，top left 默认指的是 padding box 的左上
角。不过，在背景与边框（第三版）( http://w3.org/TR/css3-background )中，
我们得到了一个新的属性 **background-origin**，可以用它来改变这种行为。
在默认情况下，它的值是（闭着眼睛也猜得到）**padding-box**。如果把它的
值改成 **content-box** ，我们在 **background-position** 属
性中使用的边角关键字将会以内容区的边缘作为基准（也就是说，此时背景
图片距离边角的偏移量就跟内边距保持一致了）。

### calc() 方案

请不要忘记在 calc() 函数内部的 - 和 + 运算符的两侧各加一个空白符，否则会产生解析错误！这个规则如此怪异，是为了向前兼容：未来，在 calc() 内部可能会允许使用关键字，而这些关键字可能会包含连字符（即减号）。