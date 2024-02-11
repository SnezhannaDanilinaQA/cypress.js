describe('Автотесты на форму логина', function () {
   it('Верный логин верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт 
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин 
        cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль 
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible') // Проверка что тест виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно');  // Проверка совпадения текста 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик видимый 
   })

    it('Верный логин неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт 
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин 
        cy.get('#loginButton').should('be.disabled')   // Кнопка войти не кликабельная 
        cy.get('#pass').type('iLoveqastudio5'); // Ввели неверный пароль 
        cy.get('#loginButton').should('be.enabled')   // Кнопка войти кликабельная 
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет');  // Проверка совпадения текста 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик видимый 
   }) 

       it('Логика восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт 
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин 
        cy.get('#forgotEmailButton').click(); // Клик забыли пароль
        cy.get('#forgotForm > .header').should('be.visible') // Надпись видима 
        cy.get('#forgotForm > .header').contains('Восстановите пароль');  // Проверка совпадения текста 
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); // Проверка что крестик видимый 
        cy.get('#mailForgot').type('german2@dolnikov.ru'); // Ввели email
        cy.get('#restoreEmailButton').click(); // Нажать по кнопке отправить код 
        cy.get('#messageHeader').should('be.visible'); // Проверка текст видимый 
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');  // Проверка совпадения текста 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик видимый 
   })
       it('Неверный логин верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт 
        cy.get('#mail').type('german@dolnikov5.ru'); // Ввели логин 
        cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль 
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible') // Проверка что тест виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет');  // Проверка совпадения текста 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик видимый 
   })
       it('Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт 
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин 
        cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль 
        cy.get('#loginButton').should('be.enabled')   // Кнопка войти кликабельная 
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible') // Проверка что тест виден
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  // Проверка совпадения текста 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик видимый 
   })    
       it('Строчные буквы в логине', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт 
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин 
        cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль 
        cy.get('#loginButton').should('be.enabled')   // Кнопка войти кликабельная 
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible') // Проверка что тест виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно');  // Проверка совпадения текста 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик видимый 
   })
})