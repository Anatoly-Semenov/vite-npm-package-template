# npm-package-template

## Базовый темплейт для разработки NPM-пакетов

---

## Структура
Все рабочие файлы библиотеки хранятся в директории `./src`

---

## Сборка
Для сборки проекта используются такие скрипты
```
yarn dev
```

```
yarn buid
```

```
yarn serve
```

---

## Work flow
Локальная разработка ведется через скрипт

```
yarn dev
```

Когда функциональность готова к релизу и есть необходимость минифицировать пакет, воспользуйтесь командой
```
yarn dev
```
Чтобы собрать артифакт из разработанного кода. В таком случае,
проекты которые будут пользоваться текущим пакетом,
смогут импортировать функциональность из директории /dist

После сборки проекта необходимо выпустить новую версию

```
yarn release-version minor|major|patch
```

---

## Коммиты
Необходимо придерживаться правил написания коммитов, описанных в `commits.agreement.md`

---

## Версионирование
Для реализации версионирования проекта используется пакет [standard-version](https://www.npmjs.com/package/standard-version)

Для выпуска новой версии воспользуйтесь скриптом 

```
yarn release-version major|minor|patch
```

---

## Prettier и ESLint
Настройки eslint - `./.eslintrc.js`

Настройки prettier - `./.editorconfig` и `./.prettierrc`

> Не забудь включить file watcher в своем IDE для корректной работы форматирования prettier 


