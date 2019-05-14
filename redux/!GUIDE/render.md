App/index.js

Renderowanie: Aby Redux spełniał swoje funkcje, należy owinąć dany komponent Providerem dostarczanym przez moduł react-redux. Jako parametr przekazujemy mu utworzony wcześniej obiekt store.

    ReactDOM.render((
        <ReduxProvider store={ configureStore() }>
            <App />
        </ReduxProvider>
    ), document.getElementById('root'));