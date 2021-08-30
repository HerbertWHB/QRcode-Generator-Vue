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



#### D 演示：

#### 1.QRCode Generation

##### Figure 1-1 shows the Index(Text, website, documents, pictures, business cards, wechat)

<h5 align = "center">Figure 1-1</h5>

<img src="C:\Users\86178\AppData\Roaming\Typora\typora-user-images\image-20210830202727635.png" alt="image-20210830202727635" style="zoom:50%;" />

##### 

##### Figure 1-2 and Figure 1-3 shows the QRcode generation interface of text and web.

<h5 align = "center">Figure 1-2</h5>

<img src="C:\Users\86178\AppData\Roaming\Typora\typora-user-images\image-20210830203046619.png" alt="image-20210830203046619" style="zoom:50%;" />

 <h5 align = "center">Figure 1-3</h5>

<img src="C:\Users\86178\AppData\Roaming\Typora\typora-user-images\image-20210830203518391.png" alt="image-20210830203518391" style="zoom:50%;" />

##### Figure 1-4 shows the basic output of the QRcode generation


<h5 align = "center">Figure 1-4</h5>

<img src="C:\Users\86178\AppData\Roaming\Typora\typora-user-images\image-20210830203634142.png" alt="image-20210830203634142" style="zoom:50%;" />



#### 2.Custom QR code

##### Figure 2-1 to Figure 2-4 show the functions of custom which are: gradient, zoom, code eye size, rotation

<h5 align = "center">Figure 2-1</h5>

<img src="C:\Users\86178\AppData\Roaming\Typora\typora-user-images\image-20210830204032788.png" alt="image-20210830204032788" style="zoom:50%;" />

<h5 align = "center">Figure 2-2</h5> 

 <div align=center>

<img src="C:\Users\86178\AppData\Roaming\Typora\typora-user-images\image-20210830204335603.png" alt="image-20210830204335603" style="zoom:50%;" />

</div>

<h5 align = "center">Figure 2-3</h5>

<img src="C:\Users\86178\AppData\Roaming\Typora\typora-user-images\image-20210830204626266.png" alt="image-20210830204626266" style="zoom:50%;" />

<h5 align = "center">Figure 2-4</h5>

<img src="C:\Users\86178\AppData\Roaming\Typora\typora-user-images\image-20210830204913364.png" alt="image-20210830204913364" style="zoom:50%;" />

##### Figure 2-2 to Figure 2-7 shows the use of custom templates, embedded content in qr codes, and custom code eyes

<h5 align = "center">Figure 2-5</h5>

<img src="C:\Users\86178\AppData\Roaming\Typora\typora-user-images\image-20210830205836701.png" alt="image-20210830205836701" style="zoom:50%;" />

<h5 align = "center">Figure 2-6</h5>

<img src="C:\Users\86178\AppData\Roaming\Typora\typora-user-images\image-20210830205811627.png" alt="image-20210830205811627" style="zoom:50%;" />

<h5 align = "center">Figure 2-7</h5>

<img src="C:\Users\86178\AppData\Roaming\Typora\typora-user-images\image-20210830205734308.png" alt="image-20210830205734308" style="zoom:50%;" />





#### 3.数据库设计(SQL Desgin)

The system mainly involves the interface call part of the user login, registration. Images, file uploads and, most importantly, live code management systems. The acquisition of interface data is inseparable from the operation of the database. This system uses the database system for mysql. Table library tables are designed as follows:

**3-1** **用户信息表**（User table）

| 编号 | 字段名   | 字段类型    | 备注信息 | 字段约束    |
| ---- | -------- | ----------- | -------- | ----------- |
| 1    | id       | int         | 用户编号 | primary key |
| 2    | username | varchar(32) | 用户姓名 | foregin key |
| 3    | password | varchar(32) | 用户密码 |             |
| 4    | dep      | varchar(32) | 所在部门 |             |
| 5    | userType | varchar(32) | 用户类型 |             |
| 6    | position | varchar(32) | 用户职位 |             |
| 7    | campany  | varchar(32) | 公司     |             |
| 8    | phone    | int         | 手机号   |             |
| 9    | sex      | varchar(32) | 用户性别 |             |
| 10   | age      | int         | 用户年龄 |             |

**3-2** **活码信息表**(QRCODE table)

| 编号 | 字段名  | 字段类型    | 备注信息   | 字段约束    |
| ---- | ------- | ----------- | ---------- | ----------- |
| 1    | id      | int         | 活码编号   | primary key |
| 2    | user    | varchar(32) | 用户名     | foregin key |
| 3    | num     | varchar(32) | 码被扫次数 |             |
| 4    | content | varchar(32) | 活码内容   |             |
| 5    | name    | varchar(32) | 码内容描述 |             |
| 6    | mark    | varchar(32) | 备注信息   |             |

 

 

 

 

 

 

