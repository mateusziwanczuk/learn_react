/App

Stan oraz funkcje rozsyłające akcje dostępne są w this.props. 

Funkcja mapStateToProps pobiera state jako parametr i zwraca nowy obiekt. 

  const mapStateToProps = (state) => ({
      counter: state.counter.count
    })

Funkcja mapDispatchToProps zwraca obiekt zawierający metody. Po wywołaniu funkcji dispatch wysyłane są obiekty akcji do store. 
  
  const mapDispatchToProps = (dispatch) => ({
      increaseCounter: () => dispatch(increment()),
      decreaseCounter: () => dispatch(decrement())
    })
  
  
export default connect(mapStateToProps, mapDispatchToProps)(App);


