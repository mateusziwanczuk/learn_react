/App.js

Funkcja connect przyjmuje jako parametry funkcje mapStateToProps i mapDispatchToProps, a wyniki ich wywołania łączy w obiekt. Następnie zwraca funkcję, która jako parametr przyjmuje komponent, poczym przygotowany obiekt trafia do this.props tego komponentu. 

Funkcja zwracana przez funkcję connect opakowuje przekazany komponent i zwraca nową jego wesję. 