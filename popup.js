chrome.runtime.sendMessage({ action: 'getJiraTasks' }, function (response) {
  var tasksContainer = document.querySelector('#tasksContainer tbody');

  // Сортировка задач по дате изменения от новых к старым
  response.sort(function (a, b) {
    return new Date(b.fields.updated) - new Date(a.fields.updated);
  });

  response.forEach(function (task) {
    var row = document.createElement('tr');

    // Задача и ссылка на страницу с задачей
    var summaryCell = document.createElement('td');
    var summaryLink = document.createElement('a');
    summaryLink.href = jiraUrl + '/browse/' + task.key;
    summaryLink.textContent = task.key + ' ' + task.fields.summary;
    summaryCell.appendChild(summaryLink);
    row.appendChild(summaryCell);

    // Запланированное время
    var plannedTimeCell = document.createElement('td');
    plannedTimeCell.textContent = (task.fields.timeoriginalestimate/3600).toFixed(2) ? (task.fields.timeoriginalestimate/3600).toFixed(2) : '-';
    row.appendChild(plannedTimeCell);

    // Фактическое время
    var actualTimeCell = document.createElement('td');
    actualTimeCell.textContent = (task.fields.timespent/3600).toFixed(2) ? (task.fields.timespent/3600).toFixed(2) : '-';
    row.appendChild(actualTimeCell);

    // Кнопки для логгирования времени
    var actionsCell = document.createElement('td');
    var addTimeButton15 = document.createElement('button');
    addTimeButton15.textContent = '+15min';
    addTimeButton15.addEventListener('click', function () {
      // Логгирование 15 минут
      // Ваш код для отправки запроса на логгирование времени
      var timeLogged = '15m'; // Запланированное время, которое вы хотите записать (15 минут)

      // Замените `https://your-jira-instance.com` на фактический URL вашего Jira-сервера
      var apiUrl = jiraUrl + '/rest/api/2/issue/' + task.key + '/worklog';

      // Создание объекта данных для отправки в теле запроса
      var data = {
        timeSpent: timeLogged
      };

      // Опции запроса
      var options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };

      // Отправка POST-запроса на API Jira для записи времени в журнал работы задачи
      fetch(apiUrl, options)
        .then(function (response) {
          if (response.ok) {
            console.log('Время успешно записано в журнал работы задачи.');
            chrome.runtime.reload(); // Перезагрузка попапа
          } else {
            console.log('Ошибка записи времени в журнал работы задачи:', response.status);
          }
        })
        .catch(function (error) {
          console.log('Ошибка при выполнении запроса:', error);
        });
    });
    actionsCell.appendChild(addTimeButton15);

    var addTimeButton30 = document.createElement('button');
    addTimeButton30.textContent = '+30min';
    addTimeButton30.addEventListener('click', function () {
      // Логгирование 30 минут
      // Ваш код для отправки запроса на логгирование времени
      var timeLogged = '30m'; // Запланированное время, которое вы хотите записать (15 минут)

      // Замените `https://your-jira-instance.com` на фактический URL вашего Jira-сервера
      var apiUrl = 'https://lognex.atlassian.net/rest/api/2/issue/' + task.key + '/worklog';

      // Создание объекта данных для отправки в теле запроса
      var data = {
        timeSpent: timeLogged
      };

      // Опции запроса
      var options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };

      // Отправка POST-запроса на API Jira для записи времени в журнал работы задачи
      fetch(apiUrl, options)
        .then(function (response) {
          if (response.ok) {
            console.log('Время успешно записано в журнал работы задачи.');
            chrome.runtime.reload(); // Перезагрузка попапа
          } else {
            console.log('Ошибка записи времени в журнал работы задачи:', response.status);
          }
        })
        .catch(function (error) {
          console.log('Ошибка при выполнении запроса:', error);
        });
    });
    actionsCell.appendChild(addTimeButton30);

    var addTimeButton1h = document.createElement('button');
    addTimeButton1h.textContent = '+1h';
    addTimeButton1h.addEventListener('click', function () {
      // Логгирование 1 часа
      // Ваш код для отправки запроса на логгирование времени
      var timeLogged = '1h'; // Запланированное время, которое вы хотите записать (15 минут)

      // Замените `https://your-jira-instance.com` на фактический URL вашего Jira-сервера
      var apiUrl = 'https://lognex.atlassian.net/rest/api/2/issue/' + task.key + '/worklog';

      // Создание объекта данных для отправки в теле запроса
      var data = {
        timeSpent: timeLogged
      };

      // Опции запроса
      var options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };

      // Отправка POST-запроса на API Jira для записи времени в журнал работы задачи
      fetch(apiUrl, options)
        .then(function (response) {
          if (response.ok) {
            console.log('Время успешно записано в журнал работы задачи.');
            chrome.runtime.reload(); // Перезагрузка попапа
          } else {
            console.log('Ошибка записи времени в журнал работы задачи:', response.status);
          }
        })
        .catch(function (error) {
          console.log('Ошибка при выполнении запроса:', error);
        });
    });
    actionsCell.appendChild(addTimeButton1h);

    var addTimeButton2h = document.createElement('button');
    addTimeButton2h.textContent = '+2h';
    addTimeButton2h.addEventListener('click', function () {
      // Логгирование 2 часов
      // Ваш код для отправки запроса на логгирование времени
      var timeLogged = '2h'; // Запланированное время, которое вы хотите записать (15 минут)

      // Замените `https://your-jira-instance.com` на фактический URL вашего Jira-сервера
      var apiUrl = 'https://lognex.atlassian.net/rest/api/2/issue/' + task.key + '/worklog';

      // Создание объекта данных для отправки в теле запроса
      var data = {
        timeSpent: timeLogged
      };

      // Опции запроса
      var options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };

      // Отправка POST-запроса на API Jira для записи времени в журнал работы задачи
      fetch(apiUrl, options)
        .then(function (response) {
          if (response.ok) {
            console.log('Время успешно записано в журнал работы задачи.');
            chrome.runtime.reload(); // Перезагрузка попапа
          } else {
            console.log('Ошибка записи времени в журнал работы задачи:', response.status);
          }
        })
        .catch(function (error) {
          console.log('Ошибка при выполнении запроса:', error);
        });
    });
    actionsCell.appendChild(addTimeButton2h);

    row.appendChild(actionsCell);

    tasksContainer.appendChild(row);
  });
});
