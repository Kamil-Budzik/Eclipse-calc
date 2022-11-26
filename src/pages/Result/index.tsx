function Result() {
  return (
    <>
      <header>
        <h1>Results</h1>
        <p>Stylowanie tego zostawiam już tobie :D</p>
        <p>
          Osobiście dane do tego też przetrzymywałbym w shipsSlice. Dodaj do
          obiektu shipsState właściwość result i tam przetrzymuj co będzie
          potrzebne.
        </p>
        <p>
          Stworzenie do tego nowego slice'a/reducera byłoby czystrze ale ty
          klikając calculate musiałybym do slice'a result przekazywać wszystkie
          statki co trochę mija się z celem (chociaż no byłoby to lepsze
          rozwiązanie, pytanie czy ten ziomek ogarnia na tyle ze to znajdzie xD)
        </p>
      </header>
    </>
  );
}

export default Result;
