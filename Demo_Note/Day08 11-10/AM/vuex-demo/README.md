# vuex

目前，多组件间的数据通信有很大的困难，因为组件的数据通信是单向数据流，多以针对非父子通信提供了event bus的解决方案

但是这种方案第一针对多组件间状态共享很难处理，导致数据流向变乱，逻辑不清晰，无法解决两个不能同时存在的组件的通信

我们研究后发现可以整一个中间层做介质，目前选择localStorage, 更改数据后存入到localStorage，使用数据的组件再取出来

但是localStorage不能做到主动通信


其实针对这些情况vue提供了vuex的解决方案：

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

使用方法:

1. 创建store

2. 创建state并且注入到store中，此时store中已经有了state（响应式的）

3. 将store注入到根实例中，组件就可以利用this.$store.state来获取数据使用数据

    如果组件需要响应式的使用数据需要利用computed来接收数据,mapState

4. 更改数据的时候需要借助mutations，创建mutations，它的作用就是用来更改state

5. 组件中通过提交一个mutation来更改状态, 利用store.commit来提交， mapMutations

> mutations中不能有异步操作

6. 异步动作放入到actions中，接收到context（跟store差不多）异步动作后进行context.commit提交mutation, mapActions

