import User from '../stores/User/User';

async function fetchUser(user: string): Promise<User> {
  const response = await fetch(`https://api.github.com/users/${user}`);
  const data = await response.json();

  return data;
}

export default fetchUser;