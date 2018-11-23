
### Vue

> Vue是一个前端js框架，由尤雨溪（尤小右）开发，是个人项目

切图仔-前端工程师，UI设计师

网页分为动态网页和静态网页，动态网页指的就是页面中渲染的是不断变化的动态数据

SSH thinkphp django / angularJS (mvc....) 

Vue近几年来特别的受关注，三年前的时候angularJS霸占前端JS框架市场很长时间，接着react框架横空出世，因为它有一个特性是虚拟DOM，从性能上碾轧angularJS，这个时候，vue1.0悄悄的问世了，它的优雅，轻便也吸引了一部分用户，开始收到关注，16年中旬，VUE2.0问世，这个时候vue不管从性能上，还是从成本上都隐隐超过了react，火的一塌糊涂，这个时候，angular开发团队也开发了angular2.0版本，并且更名为angular，吸收了react、vue的优点，加上angular本身的特点，也吸引到很多用户，目前已经迭代到5.0了。

学习vue是现在前端开发者必须的一个技能。



##### 前端js框架到底在干嘛，为什么要用

使用框架可以提高应用程序性能，提高开发效率

js框架帮助开发者写js逻辑代码，在开发应用的时候js的功能划分为如下几点：

1. 渲染数据

2. 操作dom（写一些效果）

3. 操作cookie等存储机制api...

4. 实现逻辑

在前端开发中，如何高效的操作dom、渲染数据是一个前端工程师需要考虑的问题，而且当数据量大，流向较乱的时候，如何正确使用数据，操作数据也是一个问题


而js框架对上述的几个问题都有自己趋于完美的解决方案，开发成本降低。高性能高效率。唯一的缺点就是需要使用一定的成本来学习。


##### Vue官网介绍

vue是渐进式JavaScript框架

vue的主张较弱 -》 学习成本和使用成本都是递进的


“渐进式框架”和“自底向上增量开发的设计”是Vue开发的两个概念

Vue可以在任意其他类型的项目中使用，使用成本较低，更灵活，主张较弱，在Vue的项目中也可以轻松融汇其他的技术来开发，并且因为Vue的生态系统特别庞大，可以找到基本所有类型的工具在vue项目中使用

特点：易用（使用成本低），灵活（生态系统完善，适用于任何规模的项目），高效（体积小，优化好，性能好）

Vue是一个MVVM的js框架，但是，Vue 的核心库只关注视图层，开发者关注的只是m-v的映射关系


### 与AngularJS的对比

Vue的很多api、特性都与angularJS相似，其实是因为Vue在开发的时候借鉴了很多AngularJS中的特点，而AngularJS中固有的缺点，在Vue中已经解决，也就是青出于蓝而胜于蓝，Vue的学习成本比AngularJS低很多，因为复杂性就低

AngularJS是强主张的，而Vue更灵活

Vue的数据流是单向的，数据流行更清晰

Angular里指令可以是操作dom的，也可以封装一段结构逻辑代码，例如：广告展示模块

Vue中的指令只是操作dom的，用组件来分离结构逻辑

AngularJS的性能比不上Vue


### Vue的使用

Vue不支持IE8，因为使用了ES5的很多特性

可以直接通过script标签来引入vue.js，有开发版本和生产版本，开发版本一般我们在开发项目的时候引入，当最后开发完成上线的时候引入生产版本，开发版本没有压缩的，并且有很多提示，而生产版本全部删掉了

在Vue中提供了一个脚手架（命令行工具）可以帮我们快速的搭建基于webpack的开发环境...



#### Vue的实例

每一个应用都有一个根实例，在根实例里我们通过组件嵌套来实现大型的应用

也就是说组件不一定是必须的，但是实例是必须要有的

在实例化实例的时候我们可以传入一个；配置项，在配置项中设置很多属性方法可以实现复杂的功能


在配置中可以设置el的属性，el属性代表的是此实例的作用范围

在配置中同过设置data属性来为实例绑定数据



### mvc/mvvm

[阮大神博客](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

mvc 分为三层，其实M层是数据模型层，它是真正的后端数据在前端js中的一个映射模型，他们的关系是：数据模型层和视图层有映射关系，model改变，view展示也会更改，当view产生用户操作或会反馈给controller，controller更改model，这个时候view又会进行新的数据渲染

作业： 能说清楚MVC,MVP,MVVM的区别，能画出三种图

![MVC](http://image.beekka.com/blog/2015/bg2015020105.png)

这是纯纯的MVC的模式，但是很多框架都会有一些更改

前端mvc框架，如angularjs，backbone：

![前端MVC](http://image.beekka.com/blog/2015/bg2015020108.png)

会发现，用户可以直接操作controller（例如用户更改hash值，conrtoller直接监听hash值变化后执行逻辑代码，然后通知model更改）

控制器可以直接操作view，如果，让某一个标签获得进入页面获得焦点，不需要model来控制，所以一般会直接操作（angularJS，指令）

view可以直接操作model （数据双向绑定）

MVP:

[mvp](http://image.beekka.com/blog/2015/bg2015020109.png)

view和model不能直接通信，所有的交互都由presenter来做，其他部分的通信都是双向的

view较薄 ，presenter较为厚重


MVVM：

[mvvm](http://image.beekka.com/blog/2015/bg2015020110.png)

MVVM和MVP及其相似，只是view和viewmodel的通信是双向绑定，view的操作会自动的像viewmodel通过


##### v-for

这是一个指令，只要有v-的就是指令（directive 操作dom ）

在vue中可以通过v-for来循环数据的通知循环dom，语法是item in/of items，接收第二个参数是索引 (item,index) of items,还可以循环键值对，第一个参数是value，第二个是key，第三个依然是索引


##### v-on

在vue中还有v-on来为dom绑定事件，在v-on：后面加上要绑定的事件类型，值里可以执行一些简单javascript表达式：++ -- = ...

可以将一些方法设置在methods里，这样就可以在v-on:click的值里直接写方法名字可以，默认会在方法中传入事件对象，当写方法的时候加了()就可以传参，这个时候如果需要事件对象，那就主动传入$event

v-on绑定的事件可以是任意事件,v-on:可以缩写为@


为什么在 HTML 中监听事件?

你可能注意到这种事件监听的方式违背了关注点分离 (separation of concern) 这个长期以来的优良传统。但不必担心，因为所有的 Vue.js 事件处理方法和表达式都严格绑定在当前视图的 ViewModel 上，它不会导致任何维护上的困难。实际上，使用 v-on 有几个好处：

1. 扫一眼 HTML 模板便能轻松定位在 JavaScript 代码里对应的方法。
2. 因为你无须在 JavaScript 里手动绑定事件，你的 ViewModel 代码可以是非常纯粹的逻辑，和 DOM 完全解耦，更易于测试。
3. 当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除。你无须担心如何自己清理它们。


##### 模板语法

在vue中，我们使用mustache插值({{}})来将数据渲染在模板中

使用v-once指令可以控制只能插入一次值，当数据变化的时候，模板对应的视图不更新

使用v-html指令可以解析html格式的数据

在html标签属性里不能使用mustache插值，这个时候给元素添加动态属性的时候使用v-bind来绑定属性，可以缩写成:

在使用v-bind绑定class和内联样式的时候，vue做了一些优化，可以使用对象语法和数组的语法来控制

防止表达式闪烁：

1. v-cloak

    给模板内的元素添加v-cloak属性后，元素在vue没有加载完的时候就有这个属性，当vue加载完成后这个属性就消失了，所以我们可以给这个属性设置css样式为隐藏
```
    <style>
    [v-cloak]{
        visibility: hidden;
    }
    </style>
```

2. v-text/v-html

    v-text会指定将模板内元素的textContent属性替换为指令值所代表的数据，也可以用于防止闪烁
    v-html可以解析标签，更改元素的innerHTML，性能比v-text较差

3. v-pre

    跳过元素和其子元素的编译过程，可以用来显示mustache

##### vue-resource 

基于Promise的HTTP库

这是一款vue的插件，可以用来进行数据交互，支持的请求方式：GET/POST/JSONP/OPTIONS...

这个插件官方宣布不在更新维护，也就是说尽量不要使用，推荐我们使用axios



##### 计算属性、监听

    有的时候我们需要在模板中使用数据a，这个时候就需要用到表达式，但是有的地方我们需要对a数据进行一些简单的处理后才能使用，那么我们就会在表达式中写一些js逻辑运算
    
    ```
    <div id="example">
    {{ message.split('').reverse().join('') }}
    </div>
    ```
    这样我们的维护就会非常困难，也不便于阅读


    那め我们就可以在methods里设置一个方法，在模板的表达式中使用这个方法
    
    ```
    <p>Reversed message: "{{ reversedMessage() }}"</p>
    // 在组件中
    methods: {
    reversedMessage: function () {
        return this.message.split('').reverse().join('')
    }
    }
    ```
    
    但是这个时候，只要vm中有数据变化，这个变化的数据可能和我们关注的数据无关，但是vm都会重新渲染模板，这个时候表达式中的方法就会重新执行，大大的影响性能


    这个时候其实我们可以使用监听器里完成：
    
    在vm实例中设置watch属性，在里面通过键值对来设置一些监听，键名为数据名，值可以是一个函数，这个函数在数据改变之后才会执行，两个参数分别是性格前的值和更改后的值
```
    a: function (val, oldVal) {
        console.log('new: %s, old: %s', val, oldVal)
    }
```

    值还可以是一个方法名字，当数据改变的时候这个方法会执行
    
    当数据为object的时候，object的键值对改变不会被监听到（数组的push等方法可以）,这个时候需要设置深度监听：

```
    c: {
        deep:true,
        handler:function (val, oldVal) {
            console.log('new: %s, old: %s', val, oldVal)
        }
    },
```
    监听的handler函数前面的这几种写法都是在数据变化的时候才会执行，初始化的时候不会执行，但是如果设置immediate为true就可以了

```
    num:{
        immediate:true,
        handler:function(val){
            this.nums = val*2
        }
    }
```

    我们在回到上面的问题，用监听器加上immediate属性就可以做到该效果，但是大家可以看到的是逻辑稍稍有点复杂
    
    watch还可以通过实例对象直接使用:vm.$watch，返回一个取消监听的函数，这个函数执行之后会取消监听


    我们一般都会用到一个叫计算属性的东西来解决：
    
    计算属性就是在实例配置项中通过computed来为vm设置一个新的数据，而这个新数据会拥有一个依赖（一条已经存在的数据），当依赖发送变化的时候，新数据也会发送变化
    
    与方法的方式相比，它性能更高，计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。相比之下，每当触发重新渲染时，调用方法将总会再次执行函数。
    
    与watch相比，写起来简单，逻辑性更清晰，watch一般多用于，根据数据的变化而执行某些动作，而至于这些动作是在干什么其实无所谓，而计算属性更有针对性，根据数据变化而更改另一个数据
    
    计算属性也拥有getter和setter，默认写的是getter，设置setter执行可以当此计算属性数据更改的时候去做其他的一些事情，相当于watch这个计算属性
```
    xm:{
        get:function(){//getter 当依赖改变后设置值的时候
            return this.xing+'丶'+this.ming
        },
        set:function(val){//setter 当自身改变后执行
            this.xing = val.split('丶')[0]
            this.ming = val.split('丶')[1]
        }
    }
```

##### 过滤器

vue中可以设置filter(过滤器)来实现数据格式化，双花括号插值和 v-bind 表达式中使用



vue1.0的有默认的过滤器，但是在2.0的时候全部给去掉了

所以在vue中如果想要使用过滤器就需要自定义

自定义的方法有两种：全局定义和局部定义，全局定义的过滤器在任意的实例、组件中都可以使用，局部定义就是在实例、组件中定义，只能在这个实例或组件中使用

1. 全局定义

    Vue.filter(name,handler)

    name是过滤器的名字，handler是数据格式化处理函数，接收的第一个参数就是要处理的数据，返回什么数据，格式化的结果就是什么

    在模板中通过 | (管道符) 来使用,在过滤器名字后面加（）来传参，参数会在handler函数中第二个及后面的形参来接收

```
    <p>{{msg | firstUpper(3,2)}}</p>

    Vue.filter('firstUpper',function (value,num=1,num2) {
        console.log(num2)
        return value.substr(0,num).toUpperCase()+value.substr(num).toLowerCase()
    })
```
2. 局部定义

    在实例、组件的配置项中设置 filters，键名为过滤器名，值为handler
```
    filters:{
        firstUpper:function (value,num=1,num2) {
        console.log(num2)
        return value.substr(0,num).toUpperCase()+value.substr(num).toLowerCase()
        }
    }
```

注意：

    过滤器只能在mustache插值、v-bind里使用，其他的指令等地方都不能用


>作业:自定义类似于angularJS中的currency、order、filter过滤器


##### 条件渲染

在Vue中可以使用v-if来控制模板里元素的显示和隐藏，值为true就显示，为false就隐藏

v-if控制的是是否渲染这个节点

当我们需要控制一组元素显示隐藏的时候，可以用template标签将其包裹，将指令设置在template上，等等vm渲染这一组元素的时候，不会渲染template

当有else分支逻辑的时候，可以给该元素加上v-else指令来控制，v-else会根据上面的那个v-if来控制，效果与v-if相反，注意，一定要紧挨着

还有v-else-if指令可以实现多分支逻辑

```
    <input type="text" v-model="mode">  
      <template  v-if="mode=='A'">
        <h1>1.title</h1>
        <p>我的第一个P标签</p>  
      </template>
     <template  v-else-if="mode=='B'">
        <h1>2.title</h1>
        <p>我的第二个P标签</p>
     </template>
     <template  v-else-if="mode=='C'">
        <h1>3.title</h1>
        <p>我的第三个P标签</p>
     </template>
     <template  v-else>
       
        <p>不好意思，输入有误</p>
     </template>
```

需要注意的另一个地方是：Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这样确实能使Vue变得更快，性能更高，但是有的时候我们需要让实例去更新dom而不是复用，就需要给dom加上不同的key属性，因为vue在判断到底渲染什么的时候，包括哪些dom可以复用，都会参考key值，如果dom表现基本一致，符合复用的条件，但是key值不同，依然不会复用


Vue还提供了v-show指令，用法和v-if基本一样，控制的是元素的css中display属性，从而控制元素的显示和隐藏 ， 不能和v-else配合使用,且不能使用在template标签上，因为template不会渲染，再更改它的css属性也不会渲染，不会生效



###### v-if vs v-show

v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。



##### mixin

在Vue中，我们可以通过定义多个mixin来实现代码抽离复用，便于维护，提升页面的逻辑性

要注意的是：data属性不要使用mixin，因为从逻辑上来说，每一个实例、组件的数据都应该是独立的

一个mixin其实就是一个纯粹的对象，上面挂载着抽离出来的配置，在某一个实例中，通过mixins选项（数组）导入后，此实例就拥有导入的mixin的配置

且导入的配置不会覆盖原有的，而是合并到一起