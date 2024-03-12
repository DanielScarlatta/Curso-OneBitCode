const geturl = "https://api.github.com/users";
const Database = []

interface TypeUser {
  id: number;
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  repos_url: string;
}

interface DataRepositories {
  name: string,
  description: string,
  fork: boolean,
  stargazers_count: number
}

async function findUser(nameUser: string) {
  try {
    const response = await fetch(`${geturl}/${nameUser}`).then((result) =>
      result.json()
    );

    if (response.message == "Not Found") {
      return console.log(`User ${response.message}`);
    }

    const User: TypeUser = {
      id: response.id,
      login: response.login,
      name: response.name,
      bio: response.bio,
      public_repos: response.public_repos,
      repos_url: response.repos_url,
    };
    
    Database.push(User)
  } catch (err) {
    console.log(
      `An error occurred while searching, please try later \n ERROR: ${err}`
    );
  }
}

async function displayRepositories(User: TypeUser) {
  try {
    const response = await fetch(User.repos_url).then(result => result.json())

    console.log(User)
    response.forEach(rep => {
      const Repositories: DataRepositories = {
        name: rep.name,
        description: rep.description,
        fork: rep.fork,
        stargazers_count:rep.stargazers_count
      }

      console.table(Repositories)
    });

  } catch(err) {
    console.log(`${err}`)
  }
}

function displayDatabase() {
  console.table(Database)
}

function sumRepositories() {
  const sum = Database.reduce((accum, repo) => {
    return accum += repo.public_repos
  }, 0)
  console.log(sum)
}

function topQuantityRepositories() {
  const top = [...Database]

  top.sort((a, b) => b.public_repos - a.public_repos)
  top.forEach((user) => {
    console.table(user)
  })
}

findUser('DanielScarlatta')
findUser('Davisimao')
findUser('phBirais')
findUser('lucas-grippa')
findUser('diegoprates')
findUser('MarcioLeiteDev')



setTimeout(() => {
  sumRepositories()
  topQuantityRepositories()
},2000)
