const seedUsers = () => {
  return [{}];
};
const seedMovies = () => {
  return [
    {
      title: "The Dark Knight",
      releaseYear: 2008,
      genres: "Action",
      duration: 152,
      cast: [
        {
          _id: "610d58b00cf1144f30696d7c",
          name: "Cristian",
          lastName: "Bale",
        },
        {
          _id: "610d58b00cf1144f30696d7d",
          name: "Heath",
          lastName: "Ledger",
        },
      ],
      crew: [
        {
          _id: "610d58b00cf1144f30696d79",
          name: "Christopher",
          lastName: "Nolan",
          position: "director",
        },
        {
          _id: "610d58b00cf1144f30696d7a",
          name: "Andrew",
          lastName: "Stein",
          position: "costume",
        },
        {
          _id: "610d58b00cf1144f30696d7b",
          name: "Benjamin",
          lastName: "Melniker",
          position: "executive producer",
        },
      ],
    },
    {
      title: "The Shawshank Redemption",
      releaseYear: 1994,
      genres: "Drama",
      duration: 142,
      cast: [
        {
          _id: "610d506b8b072249591f33a8",
          name: "Natalie",
          lastName: "Portman",
        },
      ],
      crew: [
        {
          _id: "610d506b8b072249591f33a9",
          name: "Frank",
          lastName: "Darabont",
          position: "director",
        },
      ],
    },
  ];
};

const seedPersons = () => {
  return [{}];
};
