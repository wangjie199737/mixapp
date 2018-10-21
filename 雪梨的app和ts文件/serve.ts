import express from 'express';
import bodyParser from 'body-parser'
const app = express();
app.use(bodyParser.json());
class Course{
    constructor(
        public id:number,
        public lessonName:string,
        public images:string,
        public task:number,
        public person:number
    ){}
} 
class Shipin{
    constructor(
        public id1:number,
        public shipinName:string,
        public img:string,
        public intro:string,
        public time:number,
        public persons:number
    ){}
}
const lessons = [
    new Course(1,'2016级混合应用开发','http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130',10,90),
    new Course(2,'2017-12-软件测试基础',"http://www.edu2act.net/static/img/course.png",15,80),
    new Course(3,'2017级web开发(二)',"http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",12,60),
    new Course(4,'2016级测试方向——web系统测试',"http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",15,100),
    new Course(5,'2016级HTML5与CSS3前端开发',"http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",15,100),
    new Course(6,'2017级3、4班软件测试基础',"http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",15,100),
    new Course(7,'2018级信息素养实践',"http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130",15,100),
    new Course(8,'2018级计算机导论',"http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",15,100),
    new Course(9,'2018-2019第一学期面向对象程序设计',"http://www.edu2act.net/static/img/course.png",15,100),
    new Course(10,'2017级数据结构',"http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130",15,100),
    new Course(11,'软件学院18级新生训练营',"http://usercontent.edu2act.cn/media/team/18-07-09/3ydhisn3DM8PR9hNY9vCjA.jpg?imageView2/1/w/230/h/130",15,100),
    new Course(12,'2017级coding暑期训练营',"http://usercontent.edu2act.cn/media/team/18-07-09/J3LxZ5cMMP9JFjGuDbSsh8.png?imageView2/1/w/230/h/130",15,100)
]
const shipins =[
    new Shipin(1,'Github 开源之旅视频课程第一季：启程','http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190','      完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ',14,3738),
    new Shipin(2,'CSS3基础','http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190','CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性。' ,12,2320),
    new Shipin(3,'HTML5基础','http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190','    HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API。',12,1312)
]
app.get('/api',(req,res)=>{

    res.json(lessons);
});
app.get('/api/lesson',(req,res)=>{
    // res.end('hello');
    res.json(lessons);
});

app.get('/api/lesson/:id',(req,res)=>{
   // res.end(JSON.stringify(lessons));

   res.json(lessons.find((ele)=>ele.id == req.params.id));
});


app.get('api/shipin',(req,res)=>{
    res.json(shipins);
});
// app.post('/api',(req,res)=>{
//     console.log(req.body);
//     res.json(lessons);
// })
app.listen(8000);