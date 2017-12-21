工具类代码库

├─data
│   └─App               //全局api
│   └─SingletonFactory  //单例对象派发
│   └─LVars             //全局变参类(可扩展)
├─display
│   ├─LCircle           //绘制圆形类
│   ├─LEllipse          //绘制椭圆类
│   ├─LGraphics         //绘制图形基类
│   ├─LHeart            //绘制心形类
│   ├─LPolygon          //绘制多边形类
│   ├─LRect             //绘制矩形类
│   ├─LRose             //绘制玫瑰类
│   ├─LRoundRect        //绘制圆角矩形类
│   ├─CSprite           //精灵扩展类(增加移除元件/侦听/销毁等方法)
│   ├─LSprite           //精灵辅助类实现于CSprite(完善简单拖拽/碰撞检测功能)
│   └─LStar             //绘制多角星类
├─drag
│   └─GestureDrag       //手指按住拖动
│   └─GeturePinch       //二指滑动，收缩和拉伸
├─event
│   └─LEvent            //自定义事件
│   └─ListenerManager   //全局事件管理
├─geom
│   ├─Ellipse           //椭圆类
│   └─LPoint            //点扩展类
├─layout
│   └─Distribution      //分布类
└─utils
    ├─ColorUtil         //颜色转换类
    ├─NumberUtil        //算术工具类
    ├─ObjectUtil        //对象工具类
    ├─RatioUtil         //比例工具类
    └─ValidationUtil    //验证检测类
    └─Base64            //Base64实现
    └─MD5               //MD5实现
    └─Long              //Long结构实现