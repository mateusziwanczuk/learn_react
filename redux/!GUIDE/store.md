App => store.js

Tworzenie store:
    import { createStore } from 'redux'

Funkcja createStore jest dostarczana przez bibliotekę Redux i tworzy obiekt store. Jako pierwszy parametr przyjmuje reducer, jako drugi - stan początkowy aplikacji. 

Podczas tworzenia obiektu store rejestrowana jest w nim funkcja reducer. Będzie ona wywoływana przez obiekt store w momencie rozgłoszenia akcji. 