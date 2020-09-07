// Interfcases are like promise of contracts defining what should look like what
export default interface Icontacts { // good practice to place I: Linter
  id?: string; // ? = optional
  name: string;
  email?: string;
}