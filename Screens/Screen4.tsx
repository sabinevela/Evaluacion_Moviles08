import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Alert, Linking } from 'react-native';

const SeriesScreen = () => {
  const [seriesData, setSeriesData] = useState<any[]>([]);

  useEffect(() => {
    const data = [
      {
        name: "Breaking Bad",
        releaseYear: 2008,
        synopsis: "Un profesor de química de secundaria con cáncer terminal se asocia con un ex alumno para fabricar y vender metanfetamina y asegurar el futuro financiero de su familia.",
        details: {
          imdbUrl: "https://www.imdb.com/title/tt0903747/",
          trailerUrl: "https://www.youtube.com/watch?v=HhesaQXLuRY",
          imageUrl: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg"
        },
        extraInfo: {
          seasons: 5,
          creator: "Vince Gilligan"
        }
      },
      {
        name: "Game of Thrones",
        releaseYear: 2011,
        synopsis: "Nueve familias nobles luchan por el control de las tierras de Westeros, mientras una antigua enemiga regresa después de estar ausente durante miles de años.",
        details: {
          imdbUrl: "https://www.imdb.com/title/tt0944947/",
          trailerUrl: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
          imageUrl: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg"
        },
        extraInfo: {
          seasons: 8,
          creator: "David Benioff, D.B. Weiss"
        }
      },
      {
        name: "Stranger Things",
        releaseYear: 2016,
        synopsis: "Cuando un niño desaparece, su madre, un jefe de policía y sus amigos deben enfrentar fuerzas terroríficas para recuperarlo.",
        details: {
          imdbUrl: "https://www.imdb.com/title/tt4574334/",
          trailerUrl: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
          imageUrl: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg"
        },
        extraInfo: {
          seasons: 4,
          creator: "Matt Duffer, Ross Duffer"
        }
      },
      {
        name: "The Crown",
        releaseYear: 2016,
        synopsis: "Sigue la vida de la Reina Isabel II desde su boda en 1947 hasta la actualidad, explorando los eventos que dieron forma a la segunda mitad del siglo XX.",
        details: {
          imdbUrl: "https://www.imdb.com/title/tt4786824/",
          trailerUrl: "https://www.youtube.com/watch?v=JWtnJjn6ng0",
          imageUrl: "https://image.tmdb.org/t/p/w500/izUe1NXB4n15ZjGeMuF1EnYx5vZ.jpg"
        },
        extraInfo: {
          seasons: 5,
          creator: "Peter Morgan"
        }
      },
      {
        name: "The Mandalorian",
        releaseYear: 2019,
        synopsis: "Después de la caída del Imperio, un cazarrecompensas solitario se abre camino a través de los confines de la galaxia, lejos de la autoridad de la Nueva República.",
        details: {
          imdbUrl: "https://www.imdb.com/title/tt8111088/",
          trailerUrl: "https://www.youtube.com/watch?v=aOC8E8z_ifw",
          imageUrl: "https://image.tmdb.org/t/p/w500/x4b8k4n3KOQhRsORZ7eTmYZyo53.jpg"
        },
        extraInfo: {
          seasons: 3,
          creator: "Jon Favreau"
        }
      },
      {
        name: "The Witcher",
        releaseYear: 2019,
        synopsis: "Geralt de Rivia, un cazador de monstruos mutado, lucha por encontrar su lugar en un mundo donde las personas suelen ser más perversas que las bestias.",
        details: {
          imdbUrl: "https://www.imdb.com/title/tt5180504/",
          trailerUrl: "https://www.youtube.com/watch?v=ndl1W4ltcmg",
          imageUrl: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg"
        },
        extraInfo: {
          seasons: 2,
          creator: "Lauren Schmidt Hissrich"
        }
      },
      {
        name: "The Office",
        releaseYear: 2005,
        synopsis: "Una comedia que sigue la vida diaria de los empleados de una oficina, documentando sus relaciones y eventos cotidianos de manera humorística.",
        details: {
          imdbUrl: "https://www.imdb.com/title/tt0386676/",
          trailerUrl: "https://www.youtube.com/watch?v=Vmb1tqYqyII",
          imageUrl: "https://image.tmdb.org/t/p/w500/3HEjS7AzFKJ9gTh2Y8WG2BzpP0t.jpg"
        },
        extraInfo: {
          seasons: 9,
          creator: "Greg Daniels"
        }
      },
      {
        name: "Friends",
        releaseYear: 1994,
        synopsis: "Sigue la vida de seis amigos que viven en Nueva York mientras enfrentan los desafíos del trabajo, la vida y el amor.",
        details: {
          imdbUrl: "https://www.imdb.com/title/tt0108778/",
          trailerUrl: "https://www.youtube.com/watch?v=hDNNmeeJs1Q",
          imageUrl: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg"
        },
        extraInfo: {
          seasons: 10,
          creator: "David Crane, Marta Kauffman"
        }
      },
      {
        name: "Sherlock",
        releaseYear: 2010,
        synopsis: "Una versión moderna de las historias de Sherlock Holmes, el detective más famoso del mundo, y su amigo el Dr. Watson.",
        details: {
          imdbUrl: "https://www.imdb.com/title/tt1475582/",
          trailerUrl: "https://www.youtube.com/watch?v=xK7S9mrFWL4",
          imageUrl: "https://image.tmdb.org/t/p/w500/xWY98dP4pECOes8NviHVEXRdYAx.jpg"
        },
        extraInfo: {
          seasons: 4,
          creator: "Mark Gatiss, Steven Moffat"
        }
      },
      {
        name: "Black Mirror",
        releaseYear: 2011,
        synopsis: "Una serie de antología que explora un futuro retorcido y de alta tecnología donde las mayores innovaciones y los instintos más oscuros de la humanidad chocan.",
        details: {
          imdbUrl: "https://www.imdb.com/title/tt2085059/",
          trailerUrl: "https://www.youtube.com/watch?v=jROLrhQkK78",
          imageUrl: "https://image.tmdb.org/t/p/w500/pXeuSWSKgWUnhRFHZ4TjAUU7OiF.jpg"
        },
        extraInfo: {
          seasons: 5,
          creator: "Charlie Brooker"
        }
      }
    ];

    setSeriesData(data);
  }, []);

  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => Alert.alert('Error', 'No se pudo abrir la URL.'));
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.details.imageUrl }} style={styles.poster} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.year}>Año: {item.releaseYear}</Text>
        <Text style={styles.synopsis}>{item.synopsis}</Text>
        <TouchableOpacity onPress={() => openLink(item.details.imdbUrl)} style={styles.actionButton}>
          <Text style={styles.buttonText}>Ver</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink(item.details.trailerUrl)} style={styles.actionButton}>
          <Text style={styles.buttonText}>Trailer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={seriesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  poster: {
    width: 130,
    height: 200,
    borderRadius: 8,
    marginRight: 15,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  year: {
    fontSize: 15,
    color: '#777',
    marginBottom: 8,
  },
  synopsis: {
    fontSize: 15,
    color: '#444',
    marginBottom: 12,
  },
  actionButton: {
    backgroundColor: '#d02c37',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 6,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default SeriesScreen;
