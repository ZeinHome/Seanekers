import search from '../components/images/search/search.svg';
import remove from '../components/images/search/btn-remove.svg';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card/Card';
import {
  SectionTitle,
  Nav,
  SearchBlock,
  Search,
  SearchImageRemove,
  Gallery,
} from './Home.styled';

function Home({
  item,
  searchInput,
  setSearchInput,
  onChangeSearchInput,
  onAddCart,
  onAddToFavorite,
  isLoading,
}) {
  const renderItem = () => {
    const filtredItem = item.filter(item => {
      return item.title.toUpperCase().includes(searchInput.toUpperCase());
    });

    return (isLoading ? [...Array(10)] : filtredItem).map(item => {
      return (
        <Card
          key={item && item.id}
          onAdd={obj => onAddCart(obj)}
          onFavorite={onAddToFavorite}
          loading={isLoading}
          {...item}
        />
      );
    });
  };

  return (
    <section>
      <Hero />
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

      <Gallery>{renderItem()}</Gallery>
    </section>
  );
}

export default Home;
