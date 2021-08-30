# QRcode-Generator-Vue
Located in branch master

#### A 简介(introduce)

​	  基于Vue的移动端艺术化二维码生成器。可以生成二维码与自定义二维码

​	  This software can make text, URL, photo into QRcode; You can also customize the QRcode appearance



#### B 功能(function)

​	1.将不同格式数据（文本、图片、文件等）进行编码生成二维码。

​	2.运用二维码艺术化处理组件实现基础设置（渐变、旋转、缩放等）、模板定制、元素嵌入和码眼样式修改，

​	   实现了在色彩、结构上对二维码进行美化处理。

​	3.开发了基于二维码的活码管理系统。实现对二维码活码的增、删、改、查功能。



​	1.Encode data in different formats (text, pictures, files, etc.) to generate two-dimensional code.

​	2.The two-dimensional code artistic processing component is used to achieve basic Settings

​	   (gradient, rotation, zoom, etc.), template customization, element embedding and code eye style 

​	   modification, and the two-dimensional code is beautified in color and structure.

​	3.Developed a live code management system based on two-dimensional code. 

​	   Realize the two-dimensional code live code increase, delete, change, check function.



#### C 如何启动（how to run this software）

​	1.安装WampServer，该环境继承了Mysql。

​	2.打开软件Navicat for MySQL，连接数据库。

​	3.用VsCode运行解压的后台服务器程序，终端执行npm install安装依赖， 运行node app.js启动后台服务。

​	4.用VsCode运行解压后的前端项目代码，在终端运行npm install或cnpm install（需安装淘宝镜像），

​		安装所有依赖，执行cnpm run dev，启动程序。打开浏览器，访问地址localhost：8083

​    1.Install WampServer, which inherits Mysql.

​    2.Start Navicat for MySQL to connect to the database.

​    3.Run VsCode to decompress the background server program, run NPM install to install the dependency,

​       and run Node app.js to start the background service.

​	4.Use VsCode to run the decompressed front-end project code, run NPM install or CNPM install 

​       on the terminal (taobao image needs to be installed), install all dependencies, 

​	   and run CNPM run dev to start the program. Open your browser and go to localhost: 8083



#### D 演示视频（video）

<video src="..\RZHTMLqrcode\演示视频.mp4"></video>