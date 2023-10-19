var posts=["2023/10/01/ASP.NET/1.ASP.NET 教程/","2023/10/01/ASP.NET/2.ASP.NET 简介/","2023/10/01/ASP.NET/4.WebPages Razor/","2023/10/01/C#/1. C#/","2023/10/01/ASP.NET/3.ASP.NET WebPages 简介/","2023/10/01/ASP.NET Core/asp.net core 系列 1 概述 /","2023/10/01/ASP.NET Core/asp.net core 系列 10 配置configuration (上) /","2023/10/01/ASP.NET Core/asp.net core 系列 11 配置configuration (下) /","2023/10/01/ASP.NET Core/asp.net core 系列 12 选项 TOptions /","2023/10/01/ASP.NET Core/asp.net core 系列 13 日志 /","2023/10/01/ASP.NET Core/asp.net core 系列 14 错误处理 /","2023/10/01/ASP.NET Core/asp.net core 系列 15 中间件 /","2023/10/01/ASP.NET Core/asp.net core 系列 16 Web主机 IWebHostBuilder /","2023/10/01/ASP.NET Core/asp.net core 系列 17 通用主机 IHostBuilder /","2023/10/01/ASP.NET Core/asp.net core 系列 18 web服务器实现 /","2023/10/01/ASP.NET Core/asp.net core 系列 19 EFCore介绍 /","2023/10/01/ASP.NET Core/asp.net core 系列 20 EF基于数据模型创建数据库 /","2023/10/01/ASP.NET Core/asp.net core 系列 21 EF现有数据库进行反向工程 /","2023/10/01/ASP.NET Core/asp.net core 系列 3 依赖注入服务 /","2023/10/01/ASP.NET Core/asp.net core 系列 2 启动Startup类介绍 /","2023/10/01/ASP.NET Core/asp.net core 系列 22 EF(连接字符串,连接复原,DbContext) /","2023/10/01/ASP.NET Core/asp.net core 系列 4 注入服务的生存期 /","2023/10/01/ASP.NET Core/asp.net core 系列 5 MVC框架路由(上) /","2023/10/01/ASP.NET Core/asp.net core 系列 6 MVC框架路由(下) /","2023/10/01/ASP.NET Core/asp.net core 系列 7 Razor框架路由(上) /","2023/10/01/ASP.NET Core/asp.net core 系列 8 Razor框架路由(下) /","2023/10/01/ASP.NET Core/asp.net core系列 23 EF模型配置(概述, 类型和属性的包含与排除) /","2023/10/01/ASP.NET Core/asp.net core 系列 9 环境(Development、Staging 、Production) /"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };