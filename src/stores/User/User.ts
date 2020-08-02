export default interface User {
  name: string  | undefined;
  avatar_url: string;
  public_repos?: string;
  company?: string;
  bio?: string;
  html_url?: string;
  followers?: number;
  following?: number;
}