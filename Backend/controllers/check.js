var respons = [
  {
    id: 1,
    icon: "far fa-newspaper",
    title: "Foss Blog",
    status: "Active",
    downTime: "1 Day ago",
    lastUpdate: "2021/02/01",
    path: "/blog",
  },
  {
    id: 2,
    icon: "far fa-comment-dots",
    title: "Foss Forum",
    status: "Active",
    downTime: "1 Day ago",
    lastUpdate: "2021/02/01",
    path: "/forum",
  },
  {
    id: 3,
    icon: "far fa-envelope",
    title: "Mail Server",
    status: "Active",
    downTime: "1 Day ago",
    lastUpdate: "2021/02/01",
    path: "/mailserver",
  },
  {
    id: 4,
    icon: "far fa-window-restore",
    title: "KetchUp AddOn",
    status: "Inactive",
    downTime: "1 Day ago",
    lastUpdate: "2021/02/01",
    path: "/ketchup",
  },
  {
    id: 5,
    icon: "far fa-calendar-alt",
    title: "Event 404",
    status: "Active",
    downTime: "1 Day ago",
    lastUpdate: "2021/02/01",
    path: "/event404",
  },
  {
    id: 6,
    icon: "far fa-window-restore",
    title: "RSVP App",
    status: "Inactive",
    downTime: "1 Day ago",
    lastUpdate: "2021/02/01",
    path: "/rsvp",
  },
];

exports.check = (reqq, resp) => {
  console.log(respons);
  resp.json({ statusData: respons });
};

exports.checkurl = (reqq, resp, next) => {
  ststusCheck("fossnsbm.org", 0);
  ststusCheck("forum.fossnsbm.org", 1);
  next();
};

ststusCheck = (url, id) => {
  const https = require("https");

  const options = {
    hostname: url,
    path: "/",
    method: "GET",
  };

  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode == 200) {
      respons[id].status = "Active";
    } else {
      respons[id].status = "Inactive";
    }
  });

  req.on("error", (error) => {
    console.error(error);
    respons[id].status = "error";
  });

  req.end();
};
