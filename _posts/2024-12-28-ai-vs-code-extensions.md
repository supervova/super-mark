---
title: 'AI-расширения VS Code: nothing compares to C…'
description: 'Ради исследовательского интереса попробовал бесплатные альтернативы <a href="/ru/blog/2024/cursor">Cursor</a>.'
image: img/blog/2024/12-28/vscode.png
categories: Разработка
date: 2024-12-28
---

Из расширений порадовал только Copilot. Codeium оказался полезен только для правки ошибок Eslint / Stylelint и экономии токенов бесплатной версии Copilot'а. Остальные мало в чем помогают и проигрывают, как Cursor'у, так и самостоятельным приложениям ChatGPT и Claude.

Ну, и [про Windsurf (есть 2-недельный «пробник») я уже писал](/ru/blog/2024/windsurf) – хорошо, дешевле, но не Cursor.

## Copilot

Встроенный ИИ-помощник VS Code – единственная, на мой взгляд, реальная бесплатная альтернатива Cursor'у. Удобный интерфейс; «под капотом» в бесплатной версии – ChatGPT и Claude.

### Возможности бесплатной версии

- **Автодополнение кода:** до 2000 автодополнений в месяц (примерно 80 в день).
- **Чат:** до 50 запросов в чате в месяц.
- **Доступ к моделям:** включает модели GPT-4o от OpenAI и Claude 3.5 Sonnet от Anthropic.

![Выбор модели в Copilot](https://i.imgur.com/Q5hBsmx.png)

### Установка и активация

1. Установите расширение GitHub Copilot в Visual Studio Code.
2. Авторизуйтесь через учетную запись GitHub, имеющую активную подписку Copilot.
3. Проверьте настройки `github.copilot.advanced` в `settings.json` для тонкой настройки поведения:

   ```json
   {
     "github.copilot.advanced": {
       "inlineSuggest.enable": true,
       "autoComplete.enable": true,
       "suggestions.showOnDemand": true
     }
   }
   ```

### Основные функции

- **Генерация кода в панели Copilot Edits**. Откройте редактор Copilot'а: macOS – `⇧⌘I`; Windows – `Shift` + `Ctrl` + `I`. Добавьте, если нужно, кнопкой-плюсиком файлы для редактирования/контекста. Опишите задачу. Если сможете, проверьте предложенный код. Примите его или откажитесь.

   ![Copilot Edits](https://i.imgur.com/LQpZv8u.png)

- **Генерация кода на основе комментариев**. Напишите комментарий с описанием задачи. Пример:

    ```typescript
    // Функция для вычисления факториала числа
    ```

    Copilot предложит соответствующую реализацию.

- **Автодополнение**. Начните писать код, и Copilot будет предлагать продолжение. Пример:

    ```typescript
    const fetchData = async (url: string) => {
    ```

    Copilot автоматически добавит шаблон асинхронной функции с обработкой ответа.

- **Оптимизация и пояснение существующего кода**. Выделите фрагмент кода, щелкните правой кнопкой мыши и выберите:

  - "Explain code"
  - "Refactor code"

### Советы

1. **Используйте контекст проекта**. Откройте все связанные файлы, чтобы Copilot мог анализировать больше данных.
2. **Анализ требований**. Убедитесь, что Copilot понимает контекст. Предоставьте точные и понятные комментарии.
3. **Генерация псевдокода**. Напишите шаги на естественном языке или в псевдокоде, чтобы Copilot мог предложить наиболее точное решение.
4. **Подтверждение предложений**. Пересматривайте предложения Copilot и принимайте их с помощью `Tab`, либо изменяйте вручную для соответствия требованиям.

## «Нативные» приложения ChatGPT и Claude

Когда вы израсходуете месячный лимит бесплатной версии Copilot'а, до окончания расчетного периода можно пользоваться «родными» приложениями ChatGPT и Claude. Не так удобно, потому что контент придется ограничить четырьмя открытыми панелями или добавлять загрузкой последних версий файлов либо «копипастой»… Но, с другой стороны, модели всё те же – что и в Copilot'е, что и в Cursor'е.

[Десктопные версии Claude](https://claude.ai/download) – по сути, обёртка для веб-приложения самой умной модели для программирования. Интерфейс, к сожалению, столь же сырой, как и в браузере.

[ChatGPT](https://help.openai.com/en/articles/10119604-work-with-apps-on-macos) удобнее, но, насколько понимаю, выпущен пока только под macOS. Далее следует его «прямая речь».

> Для помощи в кодировании убедитесь, что приложение запущено, затем в строке чата ChatGPT нажмите кнопку «Work With Apps» и выберите совместимое приложение (см. ниже). При отправке сообщения ChatGPT будет учитывать содержимое выбранных приложений, улучшая качество ответов.
>
> Функция поддерживает текстовые редакторы (Apple Notes, Notion, TextEdit, Quip), кодовые редакторы (Xcode, VS Code, Jetbrains и другие) и терминалы (Terminal, iTerm, Warp, Prompt). При подготовке ответа ChatGPT учитывает полный контент открытых окон редакторов или последние 200 строк терминала, с учетом выделенного текста для более точного контекста.
>
> Для вызова модального окна с мини-приложением в VS Code надо нажать `⌥⇧1`. Выделите фрагмент кода и затем вводите промт. Чтобы работать с несколькими файлами одновременно, открывайте их в разделенных редакторах.
>
> Для работы с большинством приложений требуется разрешение на доступ к API доступности macOS, которое можно настроить в системных настройках. Для VS Code необходимо установить специальное расширение. Вы можете управлять совместимыми приложениями и их настройками в разделе ChatGPT: Settings > Work with Apps > Manage Apps.

Чтобы добавить в контекст ChatGPT до 4 файлов, откройте их в разделенных редакторах.

![Контекст из разделенных редакторов](https://i.imgur.com/WLOIzQG.png)

## Codeium

**2 млн** скачиваний; 1403 оценки; средняя – **5**.

Базовая функциональность бесплатна. Неплох для исправления ошибок Eslint, Stylelint, а также для написания JDoc'ов. Автозаполнение неудачное.

В бесплатной версии доступна только переделанная  Llama (Codeium называет ее Basic Model). Подключить ChatGPT или Claude с помощью API-ключей нельзя – они поставляются только «вшитыми» в платную версию.

## CodeGPT

**1,5 млн** скачиваний; 227 оценок; средняя – **4**.

Может работать на Ollam'е и на ChatGPT (надо ввести API-ключ) но количество обращений ограничено 8 в день.

- После установки введите ваш API-ключ OpenAI в настройках расширения.
- Используйте командную панель для доступа к функциям CodeGPT.
- Выделите код и выберите соответствующую команду для получения помощи от AI.

## Cline

**208 тыс.** скачиваний; 84 оценки; средняя – **5**.

Лучше всего работает с Claude, о чем постоянно напоминает. Но Claude платный – для использования надо закупать токены по схеме Pay-as-you-go.

Однако можно использовать бесплатную Ollam'у. Которая, впрочем, с большими задачами – типа, «перепиши боковую панель @index.pug на React, используй компоненты @src» – не справляется.

### Инструкции, подготовленные ChatGPT

1. **Установите Ollama:**

   Скачайте и установите Ollama, инструмент для локального запуска крупных языковых моделей (LLM), с [официального сайта](https://ollama.com/).

2. **Установите расширение Cline:**

   - Откройте Visual Studio Code.
   - Перейдите в раздел расширений, нажав на значок Extensions в боковой панели.
   - В строке поиска введите "Cline" и установите соответствующее расширение.

3. **Настройте Cline для использования Ollama:**

   - После установки расширения Cline перейдите в его настройки.
   - В разделе настроек выберите Ollama в качестве провайдера API.
   - Укажите модель, которую вы хотите использовать, например, `llama3.2`.
   - Сохраните изменения, нажав кнопку "Done".

   Выбор модели.

   - **CodeLlama** – для кодирования. Если ваша основная задача связана с программированием, будет лучшим выбором благодаря своей специализации на коде.
   - **Llama 3.1** – для сложных аналитических задач. Если вам нужно обрабатывать большие объемы данных или выполнять сложные вычисления.
   - **Llama 3.2** – для мультимодальных приложений. Если вы планируете использовать текстовые и визуальные данные одновременно или работать на мобильных устройствах, то будет наиболее подходящей моделью.

4. **Загрузите выбранную модель в Ollama:**

   - Откройте терминал на вашем компьютере.
   - Введите команду для загрузки модели, например:

   ```sh
   ollama pull llama3.2

- Дождитесь завершения загрузки модели.

5. **Запустите Ollama:**

   Убедитесь, что Ollama запущен и работает в фоновом режиме. Даже если у вас установлено приложение Ollama с графическим интерфейсом, рекомендуется запускать серверную часть Ollama через терминал для обеспечения стабильного соединения.

   ```sh
   ollama serve
   ```

   ☝️🧐 **Команда `ollama run <model_name>` для работы с Cline не подходит.** А то, что при запуске сервере непонятно, какая модель используется сейчас неважно. Модель выбирается динамически согласно настройкам в Cline. В примере – это самая подходящая для кодирования модель Codellama.

   ![Настройки Cline](https://i.imgur.com/Up25dIL.png)

6. **Используйте Cline с моделью Ollama:**

   Теперь вы можете вводить запросы в Cline, и они будут обрабатываться с использованием выбранной модели Ollama.

## Continue.dev

**505 тыс.** скачиваний; 65 оценки; средняя – **4,5**.

### Инструкции, подготовленные ChatGPT

1. **Ollama**. Скачайте и установите [Ollama](https://ollama.com), который позволяет запускать модели ИИ локально.

2. **Модель ИИ**. Выберите модель ИИ, соответствующую вашим потребностям, например, **Llama 3** или **Code Llama**. Вы можете загрузить эти модели с помощью Ollama, используя следующие команды:

   ```sh
   ollama pull codellama
   ollama pull starcoder2:3b
   ```

3. Получите API ключ. [На сайте Mistral AI, в разделе Codestral](https://console.mistral.ai/codestral) создайте API ключ.

4. **Установите расширение Continue**.

   - Откройте VS Code.
   - Перейдите в раздел расширений, нажав на иконку расширений в боковой панели или нажав `Ctrl+Shift+X`.
   - Найдите "Continue" и нажмите кнопку `Установить` для расширения Continue .

5. **Настройте Continue.dev**.

   - После установки в боковой панели появится иконка Continue. Нажмите на нее, чтобы открыть интерфейс Continue.
   - Откройте настройки, нажав на значок шестеренки в правом нижнем углу окна Continue.
   - Добавьте конфигурацию вашей модели ИИ в файл `~/.continue/config.json`. Вот пример конфигурации для использования Code Llama:

     ```json
     {
       "models": [
         {
           "title": "CodeLlama",
           "provider": "ollama",
           "model": "codellama",
           "apiBase": "http://localhost:11434/"
         }
       ],
       "tabAutocompleteModel": {
         "title": "Codestral",
         "provider": "mistral",
         "model": "codestral-latest",
         "apiKey": "[API-KEY]"
       }
     }
     ```

   И для Codestral / Mistral API:

   ```json
      "tabAutocompleteModel": {
        "title": "Starcoder2 3b",
        "provider": "ollama",
        "model": "starcoder2:3b",
        "apiBase": "http://localhost:11434/"
      }
   ```

6. **Запустите ваши модели\***. Убедитесь, что Ollama запущен и выбранные вами модели активны. Возможно, вам потребуется запустить сервер для ваших моделей, если это необходимо.

7. **Использование Continue.dev**.
   - Как только все настроено, вы можете начать кодировать! Используйте функции автозаполнения, объяснения кода и рефакторинга прямо в VS Code.
   - Выделяйте участки кода и используйте сочетания клавиш для взаимодействия с возможностями ИИ Continue.
