# Ćwiczenia

### Ćwiczenie 1
Stwórz prosty komponent `<App />`. App powinno być komponentem funkcyjnym, który składa się z taga `<div />`, którego dzieckiem jest `<h1>Hello world</h1>`

### Ćwiczenie 2
Stwórz komponent `<Name />`, który będzie odpowiedzialny za wyświetlanie dowolnego imienia. Następnie stwórz komponent `<App />` w którym umieścisz wygenerowany komponent `<Name />`

Spróbuj przenieść `<Name />` do innego pliku i zaimportować dany plik do `<App />`

### Ćwiczenie 3 
Stwórz komponent `<User />` który przyjmie props `name`. Następnie wyrenderuj otrzymaną w propsie wartość

### Ćwiczenie 4 
Stwórz w komponencie `<App />` komponent `<User />`. `<User />` powinien przyjmować propsa `name` i przekazywać go dalej do komponentu `<Welcome />`, który powinien wyświetlić tekst `Hello` + `name`

### Ćwiczenie 5 
Stwórz w komponencie `<App />` komponent `<User />`. `<User />` powinien przyjmować propsy `name`, `age`, `occupation`. Stwórz komponent dla każdego z nich i wyświetl go tylko w momencie kiedy dany prop jest obecny

### Ćwiczenie 6 
Stwórz w komponencie `<App />` komponent `<Garden />`. `<Garden />` powinien przyjmować następujące propsy:
  -  rose
  -  lily
  -  gardenia
  -  sunflower
  -  isWinter

Wszystkie propsy **oprócz** `isWinter` powinny być obiektem:
```
{
   name: nazwa_kwiata // string
   height: wysokosc // number
}
```

`isWinter` powinien być booleanem

Dla każdego kwiatowego propsa stwórz komponent. Każdy z tych komponentów powinien przyjmować propsa `flower`, który wyświetli nazwę kwiata i jego wysokość podaną w centymetrach

`<Garden />` powinien wyświetlać kwiaty tylko w momencie kiedy `isWinter` jest `false`

***Zastanów się jakby można zrefaktoryzować kod***

### Ćwiczenie 8
W komponencie `<App />` stwórz funkcję która wyświetli `alert` z `Hello World`. Następnie w `<App />` stów komponent `<World />`, który przyjmie deklarację tej funkcji jako props. 

W `<World />` stwórz komponent `<Hello />`, który również przyjmie deklaracje tej funkcji jako prop i który renderuje `<button />` po kliknięciu w `<button />` powinniśmy zobaczyć alert z tekstem `Hello world` 

### Ćwiczenie 9
 Stwórz w komponencie `<App />` komponent `<Translate />`. `<Translate />` powinien przyjmować propsa `word`. 
 
 W `<Translate />` Stwórz listę słów po angielsku, które mogą zostać przetłumaczone (~5). stwórz funkcję która sprawdzi czy `word` może być przetłumaczony i zwróci `true/false`

W `<Translate />` stwórz komponent `<Translatable />`, który powinien przyjmować propsa `isTranslatable`, do którego przekażemy wartość funkcji napisanej w poprzednim kroku. `<Translatable />` powinien wyświetlić informację czy słowo może zostać przetłumaczone

### Ćwiczenie 10 
W komponencie `<App />` stwórz kolekcję 10 imion. Iterując się po kolekcji wyświetl dla każdego imienia komponent `<Name />`, który przyjmie imię jako propsa i je wyświetli

### Ćwiczenie 11 
Użyj kolekcji `people` z pliku `people.js`. W komponencie `<App />` wyświetl 3 listy: 
  - osób, które mają powyżej 180cm wzrostu
  - osób, które mają pomiędzy 160 a 180 cm wzrostu
  - osób, które mają poniżej 160cm wzrostu

Każda lista powinna mieć nagłówek i listę imion

### Ćwiczenie 12 
W komponecie `<App />` stwórz komponent `<List />`. Komponent `<App />` powinien wyrendorować 3 listy. Każda z tych list powinna móc renderować inny element

Użyj kolekcji `people` i stwórz 3 komponenty. 
     - Komponent wyświetlający imię i nazwisko 
     - Komponent wyświetlający wzrost
     - Komponent wyświetlający wagę

Podaj deklarację każdego komponentu do odpowiedniego list oraz element z kolekcji `people`

### Ćwiczenie 13
W komponecie `<App />` stwórz komponent `<Input />`, który będzie renderował tag `<input />` i będzie wywoływał metodę `onInputChange` zadeklarowaną w `<App />`

Metoda `onInputChange` powinna zapisywać do stanu `<App />` wartość inputa

W `<App />` stwórz komponent `<InputValue />` który będzie wyświetlał wszystko co wpiszemy w `<Input />`

***Podpowiedzi***
  - użyj komponentu klasowego
  - ustaw stan używając metody `this.setState`

### Ćwiczenie 14 
Powtórz ćwiczenie 9, ale tym razem dodaj do `<App />` <input />,  w którym użytkownik będzie mógł podać słowo do przetłumaczenia

### Ćwiczenie 15

Powtórz ćwiczenie 6 ale tym razem dodaj `<button />`, którym będziemy mogli zmieniać stan `isWinter`

 