var configScript = document.createElement('script');
configScript.src = chrome.extension.getURL('config.js');
(document.head || document.documentElement).appendChild(configScript);
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'getJiraTasks') {
      // Выполните запрос к Jira API и получите задачи
      // Обработайте полученные задачи и отправьте их в popup.js
      // Пример использования fetch:
      fetch(jiraUrl + '/rest/api/2/search?jql=assignee=currentuser()')
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          sendResponse(data.issues);
        });
      return true; // Для указания, что вы хотите использовать sendResponse асинхронно
    }
  });
  