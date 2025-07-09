import {
  SkinData,
  MatchData,
  Teams,
  Scoreboard,
  TimerData,
  Table,
  Scenario,
  Person,
  Replacement
} from "../models";

export const skins: SkinData[] = [
  {
    "id": "6857f9d20af7623a50ab7198",
    "name": "style_1",
    "title": "Стиль 1"
  },
  {
    "id": "6857f9e00af7623a50ab719e",
    "name": "style_2",
    "title": "Стиль 2"
  },
  {
    "id": "6857fd010af7623a50ab71d4",
    "name": "style_3",
    "title": "Стиль 3"
  },
  {
    "id": "6857fd080af7623a50ab71da",
    "name": "amfto",
    "title": "АМФТО"
  }
];

export const match: MatchData = {
  "id": "68373bc57f2e38f710f5f944",
  "date": "2025-07-31",
  "time": "03:00",
  "team_1": {
    "id": "6696c7ec040190bdcc6d5aef",
    "name": "Экспресс офис",
    "img": "https://admin.sporlive.ru/static/images/d1a623bbbf09442bb6a01776df0d6d48.png",
    "description": "",
    "color": "#ff7b00",
    "coaches": [
      {
        "id": "66b8d172b9f1bb08e9f19ce1",
        "fio": "Чернов Александр ",
        "img": "https://admin.sporlive.ru/static/images/d0f71a2e85fb49a3b74c00dbf1a9883e.jpeg"
      },
      {
        "id": "66b8d172b9f1bb08e9f19ce2",
        "fio": "Черноусов Александр",
        "img": "https://admin.sporlive.ru/static/images/d0f71a2e85fb49a3b74c00dbf1a9883e.jpeg"
      }
    ],
    "representativs": [
      {
        "id": "6696c913040190bdcc6d5d14",
        "fio": "Алексей Курилов",
        "img": "https://admin.sporlive.ru/static/images/38a0c01fca804c3fa735be242d1cac8f.jpeg"
      }
    ]
  },
  "team_2": {
    "id": "66ca45cbc7c6a5c776e7720b",
    "name": "ТЗМС",
    "img": "https://admin.sporlive.ru/static/images/0bd63ef72ef64fd9969852472f6b64cc.png",
    "description": "",
    "color": "#ff0000",
    "coaches": [
      {
        "id": "66d1665ad21f953361aacff6",
        "fio": "Вагнер Артем",
        "img": "https://admin.sporlive.ru/static/images/bdbae19c93c843e3aff1607c258d5665.jpeg"
      },
      {
        "id": "66d1665ad21f953361aacff7",
        "fio": "Костин Олег",
        "img": "https://admin.sporlive.ru/static/images/bdbae19c93c843e3aff16"
      }
    ],
    "representativs": [
      {
        "id": "66d1664bd21f953361aacfc8",
        "fio": "Козлов Геннадий ",
        "img": "https://admin.sporlive.ru/static/images/7f3249ba1da046228335e7e318464fa3.jpeg"
      }
    ]
  },
  "team_1_score": 1,
  "team_2_score": 0,
  "status": "awaiting",
  "circle": "1 тур",
  "stadium": {
    "id": "68190047af8426867ff2dd2d",
    "name": "СК ТУЛГУ",
    "img": "https://admin.sporlive.ru/static/images/ed31bd83b68549fd8fce5b0fcea3dfd3.jpg",
    "description": ""
  },
  "tournament": {
    "id": "66ca4555c7c6a5c776e77173",
    "position": 6,
    "name": "Финальный день Летнего кубка",
    "full_name": "Финальный день Летнего кубка",
    "img": "",
    "kind": "",
    "tours": [
      "1 тур"
    ],
    "teams": [
      {
        "id": "6696c7ec040190bdcc6d5aef",
        "name": "Экспресс офис",
        "img": "https://admin.sporlive.ru/static/images/d1a623bbbf09442bb6a01776df0d6d48.png",
        "description": "",
        "color": "#ff7b00"
      },
      {
        "id": "66ca45cbc7c6a5c776e7720b",
        "name": "ТЗМС",
        "img": "https://admin.sporlive.ru/static/images/0bd63ef72ef64fd9969852472f6b64cc.png",
        "description": "",
        "color": "#ff0000"
      }
    ],
    "judges": [
      {
        "id": "6696c86c040190bdcc6d5ba8",
        "fio": "Муслим Файсханов",
        "img": "https://admin.sporlive.ru/static/images/fe7bb4b0acdd4f9ebd87135624908475.jpeg"
      },
      {
        "id": "66d15aadd21f953361aab86f",
        "fio": "Вадим Фасхутдинов",
        "img": "https://admin.sporlive.ru/static/images/e0aeba0f6eb741b0a0566816d7932caf.png"
      },
      {
        "id": "66d15ab7d21f953361aab87e",
        "fio": "Павел Шишкин",
        "img": "https://admin.sporlive.ru/static/images/b320c97483a14eb283b85bb0c9c31449.jpeg"
      },
      {
        "id": "66e5a79a0b95def27caac978",
        "fio": "Рыжов Геннадий",
        "img": "https://admin.sporlive.ru/static/images/514d202b061043608ee4aa15bf38b1c4.png"
      },
      {
        "id": "6742bf6e464378e43901b476",
        "fio": "Андрей Добрынин",
        "img": ""
      },
      {
        "id": "67823dc6b9aded1932b12bfe",
        "fio": "Фарид Мамедов",
        "img": "https://admin.sporlive.ru/static/images/31d79edff761491b90600e6dc57c875d.jpeg"
      }
    ],
    "commentators": [
      {
        "id": "6696c87b040190bdcc6d5bb7",
        "fio": "Семенец Николай",
        "img": "https://admin.sporlive.ru/static/images/87abc2be494842e68688e10b8e06fe56.jpeg"
      },
      {
        "id": "66d15a45d21f953361aab842",
        "fio": "Игорь Ревин",
        "img": "https://admin.sporlive.ru/static/images/1825de468e4e44deafeebd7359a0a645.png"
      },
      {
        "id": "66d15a50d21f953361aab851",
        "fio": "Денис Путров",
        "img": "https://admin.sporlive.ru/static/images/d5615015829b48fba2566a0aca7bc0f2.jpeg"
      },
      {
        "id": "66d15a6fd21f953361aab861",
        "fio": "Вячеслав Богачев",
        "img": "https://admin.sporlive.ru/static/images/ce1f2d31c88e4ac081ffa85b31a8ec81.jpeg"
      }
    ]
  },
  "team_1_score_penalty": 1,
  "team_2_score_penalty": 0,
  "is_overtime": false,
  "is_penalty": false,
  "is_tech_win": false,
  "judges": [
    "6696c86c040190bdcc6d5ba8",
    "66d15aadd21f953361aab86f",
    "66d15ab7d21f953361aab87e"
  ],
  "commentators": [
    "6696c87b040190bdcc6d5bb7",
    "66d15a45d21f953361aab842"
  ],
  "results_1": [
    {
      "id": "68373bc67f2e38f710f5f956",
      "is_active": true,
      "player": "6696c8db040190bdcc6d5c9c",
      "player_fio": "Ларин Олег ",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/58128c9c15d14f96af36a3a41f620d04.jpeg",
      "player_number": "31",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f957",
      "is_active": true,
      "player": "669fdadb11b930b2eb55b07a",
      "player_fio": "Крючков Александр ",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/097f791d267d437e8816335887cde190.jpeg",
      "player_number": "30",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f958",
      "is_active": true,
      "player": "669fdb7a11b930b2eb55b1b4",
      "player_fio": "Чичерин Игорь ",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/5019e71f6d494feea4c064a3f3cac244.jpeg",
      "player_number": "10",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    
    {
      "id": "68373bc67f2e38f710f5f958",
      "is_active": true,
      "player": "669fdb7a11b930b2eb55b1b4",
      "player_fio": "Чичерин Игорь ",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/5019e71f6d494feea4c064a3f3cac244.jpeg",
      "player_number": "10",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    
    {
      "id": "68373bc67f2e38f710f5f958",
      "is_active": true,
      "player": "669fdb7a11b930b2eb55b1b4",
      "player_fio": "Чичерин Игорь ",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/5019e71f6d494feea4c064a3f3cac244.jpeg",
      "player_number": "10",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    
    {
      "id": "68373bc67f2e38f710f5f958",
      "is_active": true,
      "player": "669fdb7a11b930b2eb55b1b4",
      "player_fio": "Чичерин Игорь ",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/5019e71f6d494feea4c064a3f3cac244.jpeg",
      "player_number": "10",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f959",
      "is_active": true,
      "player": "669fdb9211b930b2eb55b1e7",
      "player_fio": "Гогия Алексей ",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/084e36fa7ab143fbadf71c3ce15970bf.jpeg",
      "player_number": "7",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f95a",
      "is_active": true,
      "player": "66d17e33d21f953361aae568",
      "player_fio": "Кузнецов Павел",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/3629addcabbd406184bc07dc68453cb1.jpeg",
      "player_number": "12",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f95b",
      "is_active": true,
      "player": "66d17e49d21f953361aae5b9",
      "player_fio": "Суслов Владислав",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/773b64898ea24578951377b1b65e1db8.jpeg",
      "player_number": "13",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f95c",
      "is_active": true,
      "player": "66d17e6bd21f953361aae653",
      "player_fio": "Мельчикови Ника",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/1b72b2afaf224c4982935d0d039ce0c0.jpeg",
      "player_number": "8",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f95d",
      "is_active": true,
      "player": "66d17e7bd21f953361aae6a4",
      "player_fio": "Кузнецов Дмитрий",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/8ec5f9aae25c484080f44035b40c6d86.jpeg",
      "player_number": "71",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f95e",
      "is_active": true,
      "player": "66d17ed9d21f953361aae83f",
      "player_fio": "Денисов Михаил",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/d79c0548a4c04fdb8fea50f24a6083ac.jpeg",
      "player_number": "15",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f95f",
      "is_active": true,
      "player": "66d17eecd21f953361aae890",
      "player_fio": "Павлов Павел",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/872d8ff2da76403fb630bb76b172c3e6.jpeg",
      "player_number": "27",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f960",
      "is_active": true,
      "player": "66d17efcd21f953361aae8e1",
      "player_fio": "Орлов Виталий",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/0276a247b20b41afb3f786ee12af29a9.jpeg",
      "player_number": "33",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f961",
      "is_active": true,
      "player": "66d17f11d21f953361aae932",
      "player_fio": "Борисов Павел",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/bf000ab399ad46478ba7d60537ee4a03.jpeg",
      "player_number": "18",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f962",
      "is_active": true,
      "player": "66d17f22d21f953361aae983",
      "player_fio": "Горбачев Александр ",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/3799b49a03014bd48eea1d6d7da6239e.jpeg",
      "player_number": "19",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f963",
      "is_active": true,
      "player": "66d1808e534afadb64ef7277",
      "player_fio": "Щеглов Сергей",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/e8ecc867c1dc4abe97ab3cd02d0847b0.jpeg",
      "player_number": "72",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f964",
      "is_active": true,
      "player": "671d3b3f5aabdaa427d046a6",
      "player_fio": "Жаринов Александр",
      "player_ampl": "striker",
      "player_img": "/static/images/e598fa701ec44b6bab0e2c3eb054a23e.jpeg",
      "player_number": "99",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f965",
      "is_active": true,
      "player": "677a2199b9aded1932a50e14",
      "player_fio": "Коробов Виктор ",
      "player_ampl": "universal",
      "player_img": "/static/images/a937cfb8f68b4e7e855cc6aa62daf629.jpeg",
      "player_number": "9",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f966",
      "is_active": true,
      "player": "677a21bdb9aded1932a50e6c",
      "player_fio": "Мурашов Михаил",
      "player_ampl": "universal",
      "player_img": "/static/images/0a6599e615ed43c795e6b9858e59ef90.jpeg",
      "player_number": "45",
      "team": "6696c7ec040190bdcc6d5aef",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    }
  ],
  "results_2": [
    {
      "id": "68373bc67f2e38f710f5f96a",
      "is_active": true,
      "player": "66d16580d21f953361aacc8f",
      "player_fio": "Корякин Ярослав",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/78a74824146c46c880bb909d065ed382.jpeg",
      "player_number": "99",
      "team": "66ca45cbc7c6a5c776e7720b",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f96b",
      "is_active": true,
      "player": "66d165abd21f953361aacd31",
      "player_fio": "Лыгин Иван",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/0acfd786db1d40a48061afb23d1ace4b.jpeg",
      "player_number": "33",
      "team": "66ca45cbc7c6a5c776e7720b",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f96c",
      "is_active": true,
      "player": "66d165c0d21f953361aacd82",
      "player_fio": "Зеленецкий Руслан",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/0ce77dc9c2c74ddb8cf306a7d6ecfeec.jpeg",
      "player_number": "34",
      "team": "66ca45cbc7c6a5c776e7720b",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f96d",
      "is_active": true,
      "player": "66d165dcd21f953361aacdd3",
      "player_fio": "Деревягин Максим",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/2f5e159cd7864bcbb6a2db81d7a336b9.jpeg",
      "player_number": "35",
      "team": "66ca45cbc7c6a5c776e7720b",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f96e",
      "is_active": true,
      "player": "66d165eed21f953361aace24",
      "player_fio": "Осипов Денис",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/47ff0b0d460449dbb6537266898ef46b.jpeg",
      "player_number": "3",
      "team": "66ca45cbc7c6a5c776e7720b",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f96f",
      "is_active": true,
      "player": "66d16f8ad21f953361aadd22",
      "player_fio": "Колобков Никита ",
      "player_ampl": "striker",
      "player_img": "/static/images/fdeb44e7f584452f8235c0ba693e810f.jpeg",
      "player_number": "71",
      "team": "66ca45cbc7c6a5c776e7720b",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f970",
      "is_active": true,
      "player": "66d16fb6d21f953361aaddc4",
      "player_fio": "Казаков Никита ",
      "player_ampl": "defender",
      "player_img": "/static/images/82e24d2112294ab0bdb473fdaccf9d5a.jpeg",
      "player_number": "19",
      "team": "66ca45cbc7c6a5c776e7720b",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f971",
      "is_active": true,
      "player": "66d3f659055c0f848e465f2d",
      "player_fio": "Осин Денис",
      "player_ampl": "striker",
      "player_img": "/static/images/d0b2ed02981746a89748cddac6f8a1cc.jpeg",
      "player_number": "16",
      "team": "66ca45cbc7c6a5c776e7720b",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f972",
      "is_active": true,
      "player": "66f03896d994ee8cb15adf45",
      "player_fio": "Юров Артем",
      "player_ampl": "universal",
      "player_img": "/static/images/d0c1a8c452664804bdd65607645a35b1.jpeg",
      "player_number": "27",
      "team": "66ca45cbc7c6a5c776e7720b",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f973",
      "is_active": true,
      "player": "66f3a6a66c9e8e6712fd8a79",
      "player_fio": "Петров Артем",
      "player_ampl": "universal",
      "player_img": "/static/images/d8328f2921e947e5966a56f3f23343cc.jpeg",
      "player_number": "31",
      "team": "66ca45cbc7c6a5c776e7720b",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f974",
      "is_active": true,
      "player": "66f3a6bc6c9e8e6712fd8ad6",
      "player_fio": "Бальзамов Даниил",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/c6d7d39948b9421093db1a53aaef14bd.jpeg",
      "player_number": "1",
      "team": "66ca45cbc7c6a5c776e7720b",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f975",
      "is_active": true,
      "player": "671d343e5aabdaa427d0023c",
      "player_fio": "Бабкин Иван",
      "player_ampl": "goalkeeper",
      "player_img": "/static/images/baf4054f2bed46dfb8ebe1f9c935519c.jpeg",
      "player_number": "9",
      "team": "66ca45cbc7c6a5c776e7720b",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f976",
      "is_active": true,
      "player": "677a250fb9aded1932a533a5",
      "player_fio": "Валуев Герман",
      "player_ampl": "goalkeeper",
      "player_number": "90",
      "team": "66ca45cbc7c6a5c776e7720b",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f977",
      "is_active": true,
      "player": "677a253eb9aded1932a5346d",
      "player_fio": "Соловьев Максим",
      "player_ampl": "universal",
      "player_number": "5",
      "team": "66ca45cbc7c6a5c776e7720b",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f978",
      "is_active": true,
      "player": "677a2555b9aded1932a534cd",
      "player_fio": "Сахаров Сергей",
      "player_ampl": "universal",
      "player_number": "8",
      "team": "66ca45cbc7c6a5c776e7720b",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f979",
      "is_active": true,
      "player": "677a256eb9aded1932a5352d",
      "player_fio": "Замоскович Владимир",
      "player_ampl": "universal",
      "player_number": "11",
      "team": "66ca45cbc7c6a5c776e7720b",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f97a",
      "is_active": true,
      "player": "677a2586b9aded1932a5358d",
      "player_fio": "Крыгин Марк",
      "player_ampl": "universal",
      "player_number": "13",
      "team": "66ca45cbc7c6a5c776e7720b",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    },
    {
      "id": "68373bc67f2e38f710f5f97b",
      "is_active": true,
      "player": "677a259eb9aded1932a535ed",
      "player_fio": "Луценко Федор",
      "player_ampl": "defender",
      "player_number": "18",
      "team": "66ca45cbc7c6a5c776e7720b",
      "match": "68373bc57f2e38f710f5f944",
      "red": 0,
      "yellow": 0,
      "transits": 0,
      "goals": 0,
      "is_main_goalkeeper": false
    }
  ]
};

export const teams_data: Teams = {
  team_1_name: 'Экспресс офис',
  team_2_name: 'ТЗМС',
  team_1_color: '#ff7b00',
  team_2_color: '#ff0000'
};

export const scoreboard_data: Scoreboard = {
  team_1_score: 1,
  team_2_score: 2,
  is_fouls: true,
  team_1_fouls: 0,
  team_2_fouls: 2
};

export const timer_data: TimerData = {
  time: 112
};

export const table_data: Table = {
  kind: 'little',
  style: 'style_1'
};

export const scenario_data: Scenario = 'начало матча';

export const person_data: Person = {
  id: '1',
  fio: 'Иванов Иван',
  img: 'https://admin.sporlive.ru/static/images/d0f71a2e85fb49a3b74c00dbf1a9883e.jpeg'
};

export const replacement_data: Replacement = {
  from: { id: '1', fio: 'Иванов Иван', img: 'https://admin.sporlive.ru/static/images/d0f71a2e85fb49a3b74c00dbf1a9883e.jpeg' },
  to: { id: '2', fio: 'Петров Петр', img: 'https://admin.sporlive.ru/static/images/d0f71a2e85fb49a3b74c00dbf1a9883e.jpeg' }
};