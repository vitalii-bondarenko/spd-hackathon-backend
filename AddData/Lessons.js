// const Lesson = require('../models/Lesson');
// ​
// //JS
// Lesson.create({
//     subject: "Java Script",
//     lessonNumber: 6,
//     title: "Modules and Routing",
//     description: "Front-end (Angular): Lesson 6 - Modules and Routing",
//     presentation_ulr: "https://docs.google.com/presentation/d/12SHgbLA_Qh_4sj23hdbz0Am4QoziMEnNKAS8NpeAMnM/edit?usp=sharing",
//     videoUrl: "https://youtu.be/_TGCMPf_0Io",
//     lectorName: "Stanislav Vysotskyi",
//     lectorPosition: "Javascript Software Engineer",
//     homework: "Необходимо разработать систему авторизации и контроля доступа к страницам Вашего проекта. Гость, который попадает на корневую страницу приложения (“/”), должен увидеть форму для ввода электронного адреса и пароля. По нажатию на кнопку “Submit” необходимо создать токен в local storage (можно использовать обычную строку “test” в качестве токена) и открыть для данного пользователя страницу портала. Если гость Вашего приложения, без нажатия на кнопку “Submit”, попытается открыть страницу портала, необходимо перенаправить его на страницу авторизации. В случае, если пользователь уже авторизированный и попытается открыть корневую страницу (“/”), необходимо перенаправлять его на страницу портала.Также необходимо добавить страницу “Пользователи“, на которой будет отображаться список пользователей проекта. Данная страница должна быть вложенной в страницу “Портал” (/portal/users). На данной страницу необходимо вывести таблицу со списком пользователей. На данный момент, это должна быть только верстка. Можно использовать bootstrap таблицу, например https://getbootstrap.com/docs/4.0/content/tables/  . Обязательно обновите Ваш sidebar, что бы он отображал только ссылку на эту страницу. По клику на конкретного пользователя, должна открываться страница информации о пользователе (/portal/users/:id/detail). Это страница должна быть пустая, и должна просто отображать ID пользователя.    P.S. Не нужно делать проверку email и password в форме авторизации. Просто, по нажатию на кнопку, создавайте токен.    P.S.s. Обратите внимание, что после открытия страницы портала (‘/portal’), пользователь НЕ должен видеть пустую страницу и вручную переходить на список пользователей. При переходе на портал, Ваш роутинг приложения должен автоматически перенаправить посетителя на страницу пользователей.P.S.s.s не забудьте про sign-out. Он тоже должен выполнять выход с приложения.\n",
//     deadline: new Date(2020, 3, 1),
//     additional: "Додаткові матеріали:\n" +
//         "http://10.123.32.30:8080/\n" +
//         "http://10.123.32.30:8080/api/v1/tokens\n" +
//         "{\n" +
//         " email: string;\n" +
//         ' password: string;\n' +
//         '}\n' +
//         'admin@domain.com/admin\n' +
//         '{\n' +
//         ' "/api/v1": {\n' +
//         '   "target": "http://0.0.0.0:8080",\n' +
//         '   "secure": true,\n' +
//         '   "logLevel": "debug",\n' +
//         '   "changeOrigin": true\n' +
//         ' }\n' +
//         '}\n' +
//         'ng serve --proxy-config proxy.json\n' +
//         'http://10.123.32.30:8080/\n',
// });
// ​
// //QA
// Lesson.create({
//     subject: 'Angular',
//     lessonNumber: 5,
//     title: 'Templates',
//     description: 'Front-end (Angular): Lesson 5 - Templates',
//     presentation_ulr: 'https://docs.google.com/presentation/d/15IDdjLuM9pRZ6YhFpObLJvLOLlSGvz7gPTS9DS6n_H0/edit?usp=sharing',
//     videoUrl: 'https://youtu.be/pbOYmim8714',
//     lectorName: 'Stanislav Vysotskyi',
//     lectorPosition: 'Javascript Software Engineer',
//     homework: 'Необходимо доработать созданный ранее компонент sidebar, применив знания, полученные на лекции Angular - Templates. Для компонента Sidebar нужно добавь возможность принимать шаблон, который будет применяться к каждому элементу меню. Например, дать возможность странице “Portal” определять, как должны выглядеть элементы меню компонента sidebar.\n',
//     deadline: new Date(2020, 3, 1),
//     additional: 'Додаткові матеріали:\n' +
//         'http://10.123.32.30:8080/\n' +
//         'http://10.123.32.30:8080/api/v1/tokens\n' +
//         '{\n' +
//         ' email: string;\n' +
//         ' password: string;\n' +
//         '}\n' +
//         'admin@domain.com/admin\n' +
//         '{\n' +
//         ' "/api/v1": {\n' +
//         '   "target": "http://0.0.0.0:8080",\n' +
//         '   "secure": true,\n' +
//         '   "logLevel": "debug",\n' +
//         '   "changeOrigin": true\n' +
//         ' }\n' +
//         '}\n' +
//         'ng serve --proxy-config proxy.json\n' +
//         'http://10.123.32.30:8080/\n',
// });
// ​
// //REACT
// Lesson.create({
//     subject: 'Angular',
//     lessonNumber: 4,
//     title: ' Components, Directives, Pipes and data binding',
//     description: 'Front-end (Angular): Lesson 4 - Components, Directives, Pipes and data binding',
//     presentation_ulr: 'https://docs.google.com/presentation/d/1hM6MbndT7RHf4d2mX5DIMxkX1x4EozyrGXAqSxNu1vo/edit?usp=sharing',
//     videoUrl: 'https://youtu.be/JJr8Z94OMLY',
//     lectorName: 'Stanislav Vysotskyi',
//     lectorPosition: 'Javascript Software Engineer',
//     homework: 'Необходимо доработать созданные ранее компоненты sidebar и header, применив знания, полученные на лекции Angular - Components, Directives, Pipes and data binding. Для компонента Sidebar нужно создать входящий параметр elements, который будет принимать в себя массив элементов меню данного sidebar. Данные элементы выводятся на экран с помощью цикла. Текущая страница, в данном меню, должна быть выделена другим цветом. Для компонента header нужно добавить event, который будет происходить, когда пользователь нажимает на кнопку sign-out. Контейнер, который выводит компонент header, должна обрабатывать этот event и показывать на экране сообщение: “Вы успешно вышли с системы“.\n',
//     deadline: new Date(2020, 3, 1),
//     additional: 'Додаткові матеріали:\n' +
//         'http://10.123.32.30:8080/\n' +
//         'http://10.123.32.30:8080/api/v1/tokens\n' +
//         '{\n' +
//         ' email: string;\n' +
//         ' password: string;\n' +
//         '}\n' +
//         'admin@domain.com/admin\n' +
//         '{\n' +
//         ' "/api/v1": {\n' +
//         '   "target": "http://0.0.0.0:8080",\n' +
//         '   "secure": true,\n' +
//         '   "logLevel": "debug",\n' +
//         '   "changeOrigin": true\n' +
//         ' }\n' +
//         '}\n' +
//         'ng serve --proxy-config proxy.json\n' +
//         'http://10.123.32.30:8080/\n',
// });
// ​
// //ANGULAR
// Lesson.create({
//     subject: 'Angular',
//     lessonNumber: 3,
//     title: 'Angular Base',
//     description: 'Front-end (Angular): Lesson 3 - Angular Base',
//     presentation_ulr: 'https://docs.google.com/presentation/d/17YQhKrYGZEPDbkG31SgmOxz6KkgZlV4nVngS5iDZrPI/edit?usp=sharing',
//     videoUrl: 'https://youtu.be/i1epLHqc9eA',
//     lectorName: 'Stanislav Vysotskyi',
//     lectorPosition: 'Javascript Software Engineer',
//     homework: 'Разработать первую страницу собственного проекта, с названием “портал“. Страница должна содержать в себе такие компоненты: header, sidebar. Компоненты должны быть настраиваемые, т.е. отображение компонента зависит от переданных атрибутов. Для упрощения задания можно воспользоваться средствами bootstrap (подключаем только css файлы, НЕ используем сторонние библиотеки). Разработанная страница и компоненты должна выглядеть как работающее приложение (дальше Вам придется дорабатывать эту страницу, по этому не делайте задание как тестовое). Обязательно создайте новый репозиторий, в котором дальше будут выполняться все домашние задания по курсу Angular. Создавать issue не нужно, достаточно создать marge request на меня\n',
//     deadline: new Date(2020, 3, 1),
//     additional: 'Додаткові матеріали:\n' +
//         'http://10.123.32.30:8080/\n' +
//         'http://10.123.32.30:8080/api/v1/tokens\n' +
//         '{\n' +
//         ' email: string;\n' +
//         ' password: string;\n' +
//         '}\n' +
//         'admin@domain.com/admin\n' +
//         '{\n' +
//         ' "/api/v1": {\n' +
//         '   "target": "http://0.0.0.0:8080",\n' +
//         '   "secure": true,\n' +
//         '   "logLevel": "debug",\n' +
//         '   "changeOrigin": true\n' +
//         ' }\n' +
//         '}\n' +
//         'ng serve --proxy-config proxy.json\n' +
//         'http://10.123.32.30:8080/\n',
// });
// ​
// //HTML
// Lesson.create({
//     subject: 'Javascript',
//     lessonNumber: 3,
//     title: 'Type Coercion',
//     description: 'Front-end (Js): Lesson 3 - Type Coercion',
//     presentation_ulr: 'https://drive.google.com/file/d/1C69qlqTCuQJYMD0BqJuAIToGISHIUkdl/',
//     videoUrl: 'https://youtu.be/zyYaeUnaQVE',
//     lectorName: 'Leonid Baida',
//     lectorPosition: 'Lead Frontend Developer',
//     homework: 'Змінна типу number (ціле число) містить наступну інформацію про особу: стать \n' +
//         'сімейний стан (одружений/не одружений)\n' +
//         'вік\n' +
//         'кількість дітей\n' +
//         'наявність вищої освіти\n' +
//         'Заповнити масив такими числами.\n' +
//         'Написати функції-предикати які дають можливість фільтрувати масив залишаючи в ньому:\n' +
//         'неодружених чоловіків з вищою освітою молодше 30 років\n' +
//         'одружених жінок в яких 3 і більше дитини\n' +
//         'неодружених жінок у віці від 25 (включно) до 30 (включно) з вищою освітою і без дітей\n' +
//         'В цій роботі вам допоможуть такі поняття, як bit field та bit mask\n',
//     deadline: new Date(2020, 3, 1),
//     additional: 'Додаткові матеріали:\n' +
//         'http://10.123.32.30:8080/\n' +
//         'http://10.123.32.30:8080/api/v1/tokens\n' +
//         '{\n' +
//         ' email: string;\n' +
//         ' password: string;\n' +
//         '}\n' +
//         'admin@domain.com/admin\n' +
//         '{\n' +
//         ' "/api/v1": {\n' +
//         '   "target": "http://0.0.0.0:8080",\n' +
//         '   "secure": true,\n' +
//         '   "logLevel": "debug",\n' +
//         '   "changeOrigin": true\n' +
//         ' }\n' +
//         '}\n' +
//         'ng serve --proxy-config proxy.json\n' +
//         'http://10.123.32.30:8080/\n',
// });
// ​
// Lesson.create({
//     subject: 'Javascript',
//     lessonNumber: 4,
//     title: 'Object, Array',
//     description: 'Front-end (Js): Lesson 4 - Object, Array',
//     presentation_ulr: 'https://drive.google.com/file/d/1KV8jxHA7zH6EIcmkxpSC13lnE_N5eTkw/',
//     videoUrl: 'https://youtu.be/zigGw8GVbSI',
//     lectorName: 'Leonid Baida',
//     lectorPosition: 'Lead Frontend Developer',
//     homework: 'Дано масив, в якому представлено населення країн світу. Потрібно підготувати масив на основі якого буде побудовано секторну діаграму. де description - назва країни (з початкового масиву), value - населення країни (з початкового масиву), percentage населення країни по відношенню до населення світу (у відсотках). Масив list має відповідати наступним умовам (читати уважно!): Має бути відсортований у порядку спадання значення percentage (спочатку більші); Якщо є 2 чи більше елементів у списку, у яких поле percentage менше ніж OTHER_THRESHOLD, то такі елементи мають бути просумовані (додані) як один елемент в кінець списку. \n',
//     deadline: new Date(2020, 3, 1),
//     additional: 'Додаткові матеріали:\n' +
//         'http://10.123.32.30:8080/\n' +
//         'http://10.123.32.30:8080/api/v1/tokens\n' +
//         '{\n' +
//         ' email: string;\n' +
//         ' password: string;\n' +
//         '}\n' +
//         'admin@domain.com/admin\n' +
//         '{\n' +
//         ' "/api/v1": {\n' +
//         '   "target": "http://0.0.0.0:8080",\n' +
//         '   "secure": true,\n' +
//         '   "logLevel": "debug",\n' +
//         '   "changeOrigin": true\n' +
//         ' }\n' +
//         '}\n' +
//         'ng serve --proxy-config proxy.json\n' +
//         'http://10.123.32.30:8080/\n',
// });
// ​
// Lesson.create({
//     subject: 'Javascript',
//     lessonNumber: 11,
//     title: ' Client-Server Interaction. Fetch, AJAX, WS',
//     description: 'Front-end (Js): Lesson 11 - Client-Server Interaction. Fetch, AJAX, WS',
//     presentation_ulr: 'https://drive.google.com/file/d/1MCMl3cks_d15TeJ4eKdv5c3UR67uPVek/',
//     videoUrl: 'https://youtu.be/5qzDDZUWC30',
//     lectorName: 'Leonid Baida',
//     lectorPosition: 'Lead Frontend Developer',
//     homework: 'Створити Realtime Database на сервісі Firebase. Перенести список нобелівських ' +
//         'лауреатів з попередньої домашньої роботи в новостворену базу. Організувати вичитування' +
//         'даних з бази. До інтерфейсу data-table додати методи (сетери?) для встановлення розміру' +
//         ' та номеру сторінки і поля та напрямку сортування. До інтерфейсу data-table додати опціональні ' +
//         'колбеки на пейджинейшн та сортування, які мають спрацьовувати, коли користувач проводить відповідні ' +
//         'маніпуляції з таблицею. До бази додати: сторінку, розмір сторінки, поле сортування, напрямок сортування.' +
//         ' Організувати їх вичитування з бази як на початку роботи додатку, так і при їх зміні в базі. Коли ж користувач ' +
//         'змінює пейджинейшн чи сортування сам, то зберігати ці дані в базі. Таким чином, робота є завершеною тоді, коли' +
//         ' в двох вікнах браузера можна відкрити один і той самий додаток з таблицею, в якому, при зміні сортування чи ' +
//         'пейджинейшина, відповідна зміна буде робитися у другому вікні автоматично, синхронізуючись через базу. ВАЖЛИВО ' +
//         'домашку робимо в репі з попередньої домашки, бранчу називаємо  firebase\n',
//     deadline: new Date(2020, 3, 1),
//     additional: 'Додаткові матеріали:\n' +
//         'http://10.123.32.30:8080/\n' +
//         'http://10.123.32.30:8080/api/v1/tokens\n' +
//         '{\n' +
//         ' email: string;\n' +
//         ' password: string;\n' +
//         '}\n' +
//         'admin@domain.com/admin\n' +
//         '{\n' +
//         ' "/api/v1": {\n' +
//         '   "target": "http://0.0.0.0:8080",\n' +
//         '   "secure": true,\n' +
//         '   "logLevel": "debug",\n' +
//         '   "changeOrigin": true\n' +
//         ' }\n' +
//         '}\n' +
//         'ng serve --proxy-config proxy.json\n' +
//         'http://10.123.32.30:8080/\n',
// });
// ​
// Lesson.create({
//     subject: 'Javascript',
//     lessonNumber: 10,
//     title: 'Web. DOM, BOM',
//     description: 'Front-end (Js): Lesson 10 - Web. DOM, BOM',
//     presentation_ulr: 'https://drive.google.com/file/d/1jk95oO-kSOh0tmX90DdutI7yDRyuZGJi/view',
//     videoUrl: 'https://youtu.be/EDQeM_zcYr8',
//     lectorName: 'Leonid Baida',
//     lectorPosition: 'Lead Frontend Developer',
//     homework: 'Розробити компонент “DataTable”, який приймає на вхід довільний масив об’єктів, та виводить його в табличному вигляді. Реалізувати функції pagination (з можливістю змінювати розмір сторінок) та сортування. Посилання на практичну роботу: див. https://gitlab.com/spdu19/hw_09 (Уточнення, в домашці на DOM ви вносите зміни ВИКЛЮЧНО в клас DataTable. Використання innerHTML  в роботі з DOM забороняється!) \n',
//     deadline: new Date(2020, 3, 1),
//     additional: 'Додаткові матеріали:\n' +
//         'http://10.123.32.30:8080/\n' +
//         'http://10.123.32.30:8080/api/v1/tokens\n' +
//         '{\n' +
//         ' email: string;\n' +
//         ' password: string;\n' +
//         '}\n' +
//         'admin@domain.com/admin\n' +
//         '{\n' +
//         ' "/api/v1": {\n' +
//         '   "target": "http://0.0.0.0:8080",\n' +
//         '   "secure": true,\n' +
//         '   "logLevel": "debug",\n' +
//         '   "changeOrigin": true\n' +
//         ' }\n' +
//         '}\n' +
//         'ng serve --proxy-config proxy.json\n' +
//         'http://10.123.32.30:8080/\n',
// });