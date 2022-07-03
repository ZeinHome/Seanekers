import search from '../components/images/search/search.svg';
import remove from '../components/images/search/btn-remove.svg';
import {
  SectionTitle,
  Nav,
  SearchBlock,
  Search,
  SearchImageRemove,
} from './Home.styled';
//     item,
//     onAddCart,
//     onChangeSearchInput,
//     onAddToFavorite,

function Home({ searchInput, setSearchInput, onChangeSearchInput }) {
  return (
    <section>
      <Nav>
        <SectionTitle>
          {searchInput ? `Поиск по запросу: ${searchInput}` : 'Все кроссовки'}
        </SectionTitle>

        <SearchBlock>
          <img src={search} alt="search" />
          {searchInput && (
            <SearchImageRemove
              onClick={() => setSearchInput('')}
              src={remove}
              alt="remove"
            />
          )}
          <Search
            onInput={onChangeSearchInput}
            value={searchInput}
            placeholder="Поиск..."
          />
        </SearchBlock>
      </Nav>

      {/* <ul className="gallery">
        {item
          .filter(item => {
            return item.title.toUpperCase().includes(searchInput.toUpperCase());
          })
          .map(({ title, price, imageUrl, id }) => {
            return (
              <Card
                key={id}
                title={title}
                price={price}
                imageUrl={imageUrl}
                onAdd={obj => onAddCart(obj)}
                onFavorite={obj => onAddToFavorite(obj)}
              />
            );
          })}
      </ul> */}
    </section>
  );
}

export default Home;
